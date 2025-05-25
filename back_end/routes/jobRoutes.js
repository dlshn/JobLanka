import express from "express";
import { getJobs, createJob } from "../controllers/jobController.js";

import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.get("/getAll", getJobs);

router.post("/create", createJob);

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imageUrl = req.file.path; // Or req.file.filename if you are not using cloudinary yet
  res.json({ imageUrl });
});
         

export default router;
