function ShortlistedCandidates({ shortlisted }) {
  return (
    <div className="card">
      <h2>Shortlisted Candidates</h2>

      {shortlisted.length === 0 ? (
        <p>No shortlisted candidates yet.</p>
      ) : (
        shortlisted.map((item) => (
          <div className="candidate" key={item.candidate._id}>
            <h3>{item.candidate.name}</h3>
            <p>Match Score: {item.matchScore}%</p>
            <p>Matched Skills: {item.matchedSkills.join(", ")}</p>
            <p>Experience Match: {item.experienceMatch ? "Yes" : "No"}</p>
            <p>Level: {item.level}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ShortlistedCandidates;