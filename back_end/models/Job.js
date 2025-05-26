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
  category: {
    type: String,
    enum: ["IT","Marketing","Finance", "Education", "Healthcare", "Other", "", ""],
    required: true, 
  },
  link: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Job", jobSchema);  

