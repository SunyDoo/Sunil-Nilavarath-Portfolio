import React from "react";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#212121" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <small>contact me: snilavarath@gmail.com</small> <br></br>
          <MDBIcon fab icon="google" />
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    </MDBFooter>
  );
}
