import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: {
    type: Number,
    default: 0,
  },
  description: String,
  email: {
  type: String,
  required: false,
},
  img_url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Job", jobSchema);

