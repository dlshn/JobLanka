import Job from "../models/Job.js";

// Get all jobs
export const getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json(jobs);
};

// Create a new job
export const createJob = async (req, res) => {
  const { title, company, location, salary, description, email, img_url } = req.body;

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
      img_url, // This is the Cloudinary URL you get from the frontend
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Error creating job", error });
  }
};
