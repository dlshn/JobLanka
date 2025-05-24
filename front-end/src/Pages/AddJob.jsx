import React, { useState } from "react";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add your POST API call here
  };

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
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-white text-black"
              placeholder="hr@company.com"
            />
          </div>



          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
