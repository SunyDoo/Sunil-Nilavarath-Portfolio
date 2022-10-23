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
        src="https://i.pinimg.com/originals/d8/d6/59/d8d65963bb7f24aac9d29b0f30442f53.jpg"
        className="img-fluid shadow-4"
        alt="Resume"
      />
      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Resume;
