import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dg.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
