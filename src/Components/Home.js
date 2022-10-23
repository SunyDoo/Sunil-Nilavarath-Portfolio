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
      <h5 className="text-light bg-dark">Background</h5>
      <p className="text-light bg-dark">
        Passionate full-stack developer experienced in object-oriented
        programming with proficiencies in Ruby on Rails, React, JavaScript-based
        programming, and PostgreSQL. 8 years of experience in healthcare, where
        I developed strong skills in analytical thinking and an ability to
        thrive in fast-paced, challenging, and collaborative work environments
        to deliver life-saving care to patients in a critical care setting.
        Highly motivated to advance and expand my coding skill set through
        mentorship and challenging projects as a software engineer.
      </p>
      <br></br>
      <h5 className="text-light bg-dark">Education</h5>
      <p className="text-light bg-dark">
        Full Stack Software Engineering Accreditation- Flatiron School
      </p>
      <p className="text-light bg-dark">
        Bachelor of Science: Biology - State University of New York at Albany
      </p>
      <p className="text-light bg-dark">
        Associate of Applied Science: Respiratory Care - Molloy University
      </p>
      <br></br>
      <h5 className="text-light bg-dark">Hobbies</h5>
      <p className="text-light bg-dark">
        When I'm not working I enjoy playing video games, watching horror movies
        with my wife, playing guitar, and hanging with my dog. Recently my wife
        gave birth to twins, so these days I spend all of my time, (literally),
        taking care of them. Wouldn't change a thing!
      </p>

      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Home;
