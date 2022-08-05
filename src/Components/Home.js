import React from "react";
import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";

function Home() {
  return (
    <MDBContainer fluid className="bg-dark shadow-1-strong" style={{ maxWidth: "540px", position: "relative" }}>
      <MDBRipple rippleTag="a">
        <img
          src="https://i.pinimg.com/564x/79/ce/be/79cebe3d8e153d214daf279decba34e0.jpg"
          className="img-thumbnail"
          alt="Sunil Nilavarath"
        />
      </MDBRipple>
      <h3 className='text-light bg-dark' >Currently residing in Staten Island, NY, I have been a respiratory therapist for the past 8 years. After working through a pandemic, I felt it was time to move on from this profession, so I entered the Flatiron School with the ambition of becoming a software engineer.</h3>
    </MDBContainer>
  );
}

export default Home;
