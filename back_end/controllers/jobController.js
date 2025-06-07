import Job from "../models/Job.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
dotenv.config();

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }); // Optional: sort by newest first
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Failed to fetch jobs." });
  }
};

// Create a new job 
export const createJob = async (req, res) => {
  const { title, company, location, salary, description, email, img_url,category,link } = req.body;

  if (!title || !description || !company  || !img_url) {
    return res.status(400).json({ message: "Job title, Description , company and image are required" });
  }

  try {
    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
      email,
      img_url,
      category,
      link
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Error creating job", error }); 
  }
};

// controllers/jobController.js

export const deleteJob = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. No token provided." });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden. Admins only." });
    }

    const jobId = req.params.id;

    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found." });
    }

    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error." });
  }
};

