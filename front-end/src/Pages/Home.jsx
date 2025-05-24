import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${proccess.env.Back_End_Url}/api/jobs/getAll`);
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-yellow-400 text-white py-6 shadow mt-2">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-black text-center">JobLanka</h1>
        <p className="text-center mt-1 text-black text-base md:text-xl lg:text-2xl ">Find your dream job in Sri Lanka 🇱🇰</p>

        <div className='flex sm:flex-row flex-col justify-center items-center mt-4 p-4 gap-4'>
            <input
            type="text"
            placeholder="Search your job..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none "
            />
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full lg:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none text-black "
            >
            <option value="">All Categories</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            </select>
        </div>



      </header>

      <main className="p-4">
        <div className="max-w-4xl mx-auto grid gap-4 grid-cols- md:grid-cols-3 lg:grid-cols-3">
          {/* Sample Job Card */}
          {jobs.map((job,index) => (
            <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition key={index}>">
                <img
                alt={job.title}
                src={job.img_url}
                className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
