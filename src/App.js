// import { Routes, Route } from "react-router-dom";
import "./App.scss";
// import NavBar from "./Components/Navbar/NavBar";
import { Navbar } from "./Components";
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// import Resume from "./Components/Resume";
// import VideoCards from "./Components/VideoCards";
// import Skills from "./Components/Skills";
// import SkillIcons from "./Components/SkillIcons";
import {
  About,
  Footer,
  Header,
  Skills,
  Resume,
  Projects,
  Contact,
} from "./container";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<VideoCards />} />
        <Route exact path="/skills" element={<SkillIcons />} />
      </Routes> */}
      <Header />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
