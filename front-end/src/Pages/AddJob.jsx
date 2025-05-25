import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    email: ""
  });

const [imageFile, setImageFile] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const { title, company, location, salary, description, email } = form;

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Just store file, don't upload yet 
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e)  => {
    e.preventDefault();
    // Add your POST API call here
    try{
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", imageFile);

    const uploadRes = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/jobs/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const imageUrl = uploadRes.data.imageUrl;
    
 
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/jobs/create`, {
      title,
      company,
      location,
      salary,
      description,
      email,
      img_url:imageUrl // Use the uploaded image URL    
    });
    console.log(response.data);
    alert("Job posted successfully!");
    navigate("/"); 

    }catch (error) {
      console.error("Error uploading image or creating job:", error);
      alert("Failed to upload image or create job. Please try again."); 

    }finally {
      setIsLoading(false);
      setImageFile(); // Reset the image file after submission 
      setForm({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        email: ""
      });
    }

  }
    


  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-20">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 text-center">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Job Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
              placeholder="Software Engineer"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Company *</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-white text-black"
                placeholder="JobLanka Pvt Ltd"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Location </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white text-black"
                placeholder="Colombo"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Salary (LKR)</label>
            <input
              type="text"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              placeholder="50000"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Job Description *</label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
              placeholder="Describe the role..."
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Contact Email </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white text-black"
              placeholder="hr@company.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Image *</label>
            <input
              type="file"
              name="Image"
              
              onChange={handleImageChange}
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
          >
            {isLoading?"Job Uploading...":"Post Job"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
