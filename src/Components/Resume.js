import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Resume() {
  return (
    <MDBContainer
      fluid
      className="bg-dark shadow-1-strong"
      style={{ maxWidth: "540px", position: "relative" }}
    >
      <img
        src="https://i.pinimg.com/originals/ff/f0/da/fff0da24ccdcc48c57b14f44bd2de914.jpg"
        className="img-fluid shadow-4"
        alt="Resume"
      />
      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Resume;
