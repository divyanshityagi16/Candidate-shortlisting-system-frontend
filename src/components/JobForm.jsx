import { useState } from "react";
import axios from "axios";

function JobForm({ setShortlisted, setAiText }) {
  const [job, setJob] = useState({
    requiredSkills: "",
    preferredSkills: "",
    minExperience: "",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const shortlistCandidates = async (e) => {
    e.preventDefault();

    const jobData = {
      requiredSkills: job.requiredSkills.split(",").map((s) => s.trim()),
      preferredSkills: job.preferredSkills
        ? job.preferredSkills.split(",").map((s) => s.trim())
        : [],
      minExperience: Number(job.minExperience),
    };

    const res = await axios.post("https://candidate-shortlisting-system-5xr6.onrender.com/api/match", jobData);

    setShortlisted(res.data);
  };

  const aiShortlist = async () => {
    const jobData = {
      requiredSkills: job.requiredSkills.split(",").map((s) => s.trim()),
      preferredSkills: job.preferredSkills
        ? job.preferredSkills.split(",").map((s) => s.trim())
        : [],
      minExperience: Number(job.minExperience),
    };

    const res = await axios.post(
      "https://candidate-shortlisting-system-5xr6.onrender.com/api/ai/shortlist",
      jobData
    );

    setAiText(res.data.aiRecommendation);
  };

  return (
    <div className="card">
      <h2>Job Requirement Form</h2>

      <form onSubmit={shortlistCandidates}>
        <input
          name="requiredSkills"
          placeholder="Required Skills: React, Node.js"
          value={job.requiredSkills}
          onChange={handleChange}
          required
        />

        <input
          name="preferredSkills"
          placeholder="Preferred Skills: MongoDB, AWS"
          value={job.preferredSkills}
          onChange={handleChange}
        />

        <input
          name="minExperience"
          type="number"
          placeholder="Minimum Experience"
          value={job.minExperience}
          onChange={handleChange}
          required
        />

        <button type="submit">Shortlist Candidates</button>

        <button type="button" onClick={aiShortlist}>
          AI Shortlist
        </button>
      </form>
    </div>
  );
}

export default JobForm;