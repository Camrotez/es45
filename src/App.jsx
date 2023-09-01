import { Routes, Route } from "react-router-dom";
import GitHubUser from "./assets/GithubUser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/:username" element={<GitHubUser />} />
      </Routes>
    </>
  );
}

export default App;