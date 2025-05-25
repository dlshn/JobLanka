import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL 
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // Change or use env vars! 

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email: ADMIN_EMAIL, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Access denied" });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
