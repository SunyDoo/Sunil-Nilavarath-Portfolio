import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white fixed-bottom"
      style={{ backgroundColor: "#212121" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
         
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/sunil-nilavarath-2b78a2a8/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/SunyDoo"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://medium.com/@snilavarath"
            role="button"
          >
            <MDBIcon fab icon="medium" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <a className="text-white" href="https://flatironschool.com/">
          FlatironSchool.com
        </a>
      </div>
    </MDBFooter>
  );
}
