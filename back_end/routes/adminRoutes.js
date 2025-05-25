import express from "express";
import { adminLogin, verifyAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post("/login", adminLogin);

export default router;
