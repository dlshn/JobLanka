import React from "react";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-12 md:px-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-3xl rounded-full transform -translate-y-12"></div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 relative z-10">
            About <span className="text-yellow-400 inline-block transform hover:scale-110 transition-transform duration-300">JobLanka</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed relative z-10">
            JobLanka is a modern platform that helps people find jobs from top companies in Sri Lanka.
Our goal is to make job searching easy, clear, and open to everyone.
We also share trusted job posts from sites like Facebook and LinkedIn, with links to the original ads.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "10K+", label: "Active Jobs" },
            { number: "5K", label: "Companies" },
            { number: "15K+", label: "Job Seekers" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              description: "We aim to empower individuals by providing reliable job listings and helping employers discover the right talent efficiently. Every connection we facilitate is a step towards building a stronger workforce in Sri Lanka."
            },
            {
              icon: "🌍",
              title: "Why Choose Us?",
              description: "With a user-friendly design, advanced filters, and verified postings, JobLanka makes your job journey smoother and smarter. Our platform is built with cutting-edge technology for the best user experience."
            },
            {
              icon: "📈",
              title: "Our Vision",
              description: "To become Sri Lanka's #1 trusted job portal by continuously improving our platform and supporting career growth for all users. We envision a future where finding the perfect job is effortless."
            },
            {
              icon: "🤝",
              title: "Contact Us",
              description: "Have questions or suggestions? We're here to help you succeed in your career journey.",
              contact: true
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/10 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {item.contact && (
                    <div className="space-y-4">
                      <a 
                        href="mailto:support@joblanka.lk" 
                        className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 transform hover:scale-105"
                      >
                        <span>📧</span>
                        <span>dlshngamage917@gmail.com</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through JobLanka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-black text-yellow-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                Find Jobs
              </Link>
              <Link to="/contact" className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:scale-105">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="fixed top-20 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="fixed top-40 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="fixed bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-25 animate-ping"></div>
      </div>
    </div>
  );
};

export default About;