import GithubUserList from "./assets/GithubUserList";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
      <>
        <h1>Welcome to my application!</h1>
        <Routes>
          <Route path="/users/:username" element={<GithubUserList login="Camrotez" />}/>
        </Routes>
      </>
  );
}
export default App