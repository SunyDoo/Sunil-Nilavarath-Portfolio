import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import "./Resume.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

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
          src={images.spotify}
          className="img-fluid shadow-4"
          alt="Resume"
        />
        <div className="video-responsive"></div>
      </MDBContainer>
    </motion.div>
  );
}

export default AppWrap(Resume, "resume");
