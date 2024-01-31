import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/results/:id" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
