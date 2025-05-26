import Job from "../models/Job.js";

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
