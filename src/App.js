import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import YoutubeVids from "./Components/YoutubeVids";
import Resume from "./Components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<YoutubeVids />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
