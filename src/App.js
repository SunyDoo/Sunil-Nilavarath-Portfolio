import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import VideoCards from "./Components/VideoCards";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<VideoCards />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
