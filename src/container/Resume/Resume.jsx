import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import "./Resume.scss";
import { AppWrap } from "../../wrapper";

function Resume() {
  return (
    <motion.div className="app__profiles">
      <h4 className="head-text">
        <span>Resume 🤓</span>
      </h4>
      <MDBContainer
        fluid
        className="app__resume-item"
        style={{ position: "relative" }}
      >
        <img
          src="https://i.pinimg.com/originals/d8/d6/59/d8d65963bb7f24aac9d29b0f30442f53.jpg"
          className="img-fluid shadow-4"
          alt="Resume"
        />
        <div className="video-responsive"></div>
      </MDBContainer>
    </motion.div>
  );
}

export default AppWrap(Resume, "resume");
