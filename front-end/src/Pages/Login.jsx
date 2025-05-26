import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/login`, {
        email,
        password,
      });

      // Save JWT token in localStorage
      localStorage.setItem("adminToken", res.data.token);

      // Redirect to create job page after login
      setEmail("");
      setPassword("");
      navigate("/addJob");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl w-full max-w-md relative z-10 border border-gray-200/50">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h2>
          <p className="text-gray-600 text-sm">Sign in to manage JobLanka</p>
          <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Input */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="admin@joblanka.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Password Input */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In to Dashboard</span>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Secure admin access to JobLanka
          </p>
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;