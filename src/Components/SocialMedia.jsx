import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="https://www.linkedin.com/in/sunil-nilavarath-2b78a2a8/"
        role="button"
      >
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
    </div>
    <div>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#333333" }}
        href="https://github.com/SunyDoo"
        role="button"
      >
        <MDBIcon fab icon="github" />
      </MDBBtn>
    </div>
    <div>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#333333" }}
        href="https://medium.com/@snilavarath"
        role="button"
      >
        <MDBIcon fab icon="medium" />
      </MDBBtn>
    </div>
  </div>
);

export default SocialMedia;
