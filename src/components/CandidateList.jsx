import { useEffect, useState } from "react";
import axios from "axios";

function CandidateList({ refresh }) {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const res = await axios.get("http://localhost:5000/api/candidates");
    setCandidates(res.data);
  };

  useEffect(() => {
    getCandidates();
  }, [refresh]);

  return (
    <div className="card">
      <h2>Candidate List</h2>

      {candidates.length === 0 ? (
        <p>No candidates added yet.</p>
      ) : (
        candidates.map((candidate) => (
          <div className="candidate" key={candidate._id}>
            <h3>{candidate.name}</h3>
            <p>Email: {candidate.email}</p>
            <p>Skills: {candidate.skills.join(", ")}</p>
            <p>Experience: {candidate.experience} years</p>
            <p>Bio: {candidate.bio}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CandidateList;