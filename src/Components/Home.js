import React from "react";
import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";

function Home() {
  return (
    <MDBContainer
      fluid
      className="bg-dark shadow-1-strong"
      style={{ maxWidth: "540px", position: "relative" }}
    >
      <MDBRipple rippleTag="a">
        <img
          src="https://i.pinimg.com/564x/79/ce/be/79cebe3d8e153d214daf279decba34e0.jpg"
          className="img-thumbnail"
          alt="Sunil Nilavarath"
        />
      </MDBRipple>
      <h3 className="text-light bg-dark">
        Passionate full-stack developer experienced in object-oriented
        programming with proficiencies in Ruby on Rails, React, JavaScript-based
        programming, and PostgreSQL. 8 years of experience in healthcare, where
        I developed strong skills in analytical thinking and an ability to
        thrive in fast-paced, challenging, and collaborative work environments
        to deliver life-saving care to patients in a critical care setting.
        Highly motivated to advance and expand my coding skill set through
        mentorship and challenging projects as a software engineer.
      </h3>
      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Home;
