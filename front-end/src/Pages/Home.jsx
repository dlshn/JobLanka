import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(9); // NEW

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/jobs/getAll`);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const searchLower = search.toLowerCase();
    const categoryLower = category.toLowerCase();

    const matchesSearch = job.title.toLowerCase().includes(searchLower);
    const matchesCategory = category === "" || job.category.toLowerCase() === categoryLower;

    return matchesSearch && matchesCategory;
  });

  const handleSeeMore = () => {
    setVisibleJobs((prev) => prev + 6); // Show 6 more each time
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-yellow-400 text-white py-6 shadow mt-2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black text-center">JobLanka</h1>
        <p className="text-center mt-1 text-black text-base md:text-xl lg:text-2xl ">
          Find your dream job in Sri Lanka 🇱🇰
        </p>

        <div className='flex sm:flex-row flex-col justify-center items-center mt-4 p-4 gap-4'>
          <input
            type="text"
            placeholder="Search your job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none text-black"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full lg:w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-black bg-white appearance-none transition duration-300 ease-in-out"
          >
            <option value="">Select a category</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </header>

      <main className="p-4">
        <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.slice(0, visibleJobs).map((job, index) => (
            <div
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-yellow-400 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out group cursor-pointer"
              key={index}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  alt={job.title}
                  src={job.img_url}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                  {job.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{job.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="text-gray-800 font-medium text-sm">{job.company}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <p className="text-gray-700 text-sm">{job.location}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  salary:<span className="text-md font-bold text-yellow-600">
                    {job.salary ? `LKR ${job.salary}` : "Negotiable"}
                  </span>
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {new Date(job.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <a
                    href={job.link}
                    rel='noopener noreferrer'
                    target="_blank"
                    className="inline-block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleJobs < filteredJobs.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="bg-black text-yellow-400 font-bold px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              See More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
