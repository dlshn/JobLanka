import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  company: String,
  location: String,
  description: String,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Job", jobSchema);

