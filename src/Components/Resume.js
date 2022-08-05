import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

function Resume() {
  return (
    <MDBContainer
      fluid
      className="bg-dark shadow-1-strong"
      style={{ maxWidth: "540px", position: "relative" }}
    >
      <img src='https://i.pinimg.com/564x/53/5e/26/535e2686548ab614cd94f64d969ba687.jpg' className='img-fluid shadow-4' alt='Resume' />
      <div className="video-responsive"></div>
    </MDBContainer>
  );
}

export default Resume;
