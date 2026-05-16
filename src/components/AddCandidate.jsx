import { useState } from "react";
import axios from "axios";

function AddCandidate({ setRefresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addCandidate = async (e) => {
    e.preventDefault();

    const candidateData = {
      name: form.name,
      email: form.email,
      skills: form.skills.split(",").map((skill) => skill.trim()),
      experience: Number(form.experience),
      bio: form.bio,
    };

    await axios.post("http://localhost:5000/api/candidates", candidateData);

    alert("Candidate added successfully");

    setForm({
      name: "",
      email: "",
      skills: "",
      experience: "",
      bio: "",
    });

    setRefresh((prev) => !prev);
  };

  return (
    <div className="card">
      <h2>Add Candidate</h2>

      <form onSubmit={addCandidate}>
        <input
          name="name"
          placeholder="Candidate Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="skills"
          placeholder="Skills comma separated: React, Node.js, MongoDB"
          value={form.skills}
          onChange={handleChange}
          required
        />

        <input
          name="experience"
          type="number"
          placeholder="Experience in years"
          value={form.experience}
          onChange={handleChange}
          required
        />

        <textarea
          name="bio"
          placeholder="Projects / Bio"
          value={form.bio}
          onChange={handleChange}
        />

        <button type="submit">Add Candidate</button>
      </form>
    </div>
  );
}

export default AddCandidate;