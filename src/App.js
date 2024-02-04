import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import MyFinds from "./pages/MyFinds/MyFinds";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/results/:artist/:id" element={<Results />} />
          <Route path="/myFinds" element={<MyFinds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
