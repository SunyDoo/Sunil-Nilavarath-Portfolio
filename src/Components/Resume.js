import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Resume() {
  return (
    <MDBContainer
      fluid
      className="bg-dark shadow-1-strong"
      style={{ position: "relative" }}
    >
      <img
        src="https://i.pinimg.com/originals/7f/4c/91/7f4c916040df17c4251622bf1bd837bf.jpg"
        className="img-fluid shadow-4"
        alt="Resume"
      />
      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Resume;
