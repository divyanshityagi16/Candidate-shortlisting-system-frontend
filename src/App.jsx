import { useState } from "react";
import "./App.css";
import AddCandidate from "./components/AddCandidate";
import CandidateList from "./components/CandidateList";
import JobForm from "./components/JobForm";
import ShortlistedCandidates from "./components/ShortlistedCandidates";
import AIRecommendation from "./components/AIRecommendation";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [shortlisted, setShortlisted] = useState([]);
  const [aiText, setAiText] = useState("");

  return (
    <div className="app">
      <h1>Candidate Shortlisting System</h1>

      <AddCandidate setRefresh={setRefresh} />

      <CandidateList refresh={refresh} />

      <JobForm setShortlisted={setShortlisted} setAiText={setAiText} />

      <ShortlistedCandidates shortlisted={shortlisted} />

      <AIRecommendation aiText={aiText} />
    </div>
  );
}

export default App;