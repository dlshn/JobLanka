import express from "express";
import { getJobs, createJob } from "../controllers/jobController.js";

const router = express.Router();

router.get("/getAll", getJobs);

export default router;
