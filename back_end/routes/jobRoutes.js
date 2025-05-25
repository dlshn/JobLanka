import express from "express";
import { getJobs, createJob } from "../controllers/jobController.js";

import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.get("/getAll", getJobs);

router.post("/create", createJob);

router.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = req.file.path || req.file.url; // Assuming you are using multer to handle file uploads
    res.json({ imageUrl });
});         

export default router;
