function AIRecommendation({ aiText }) {
  return (
    <div className="card">
      <h2>AI Recommendation</h2>

      {aiText ? (
        <pre className="ai-box">{aiText}</pre>
      ) : (
        <p>No AI recommendation yet.</p>
      )}
    </div>
  );
}

export default AIRecommendation;