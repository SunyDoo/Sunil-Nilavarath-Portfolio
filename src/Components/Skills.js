import React from "react";
import { MDBCard, MDBCardImage, MDBCardFooter, MDBRow } from "mdb-react-ui-kit";
import skills from "../skills";

function Skills() {
  return (
    <>
      <MDBRow className="row-cols-7 row-cols-md-5 g-3">
        {skills.skills.map((skill) => (
          <MDBCard className="w-10">
            <MDBCardImage
              src={skill.image}
              className="img-thumbnail"
              alt="logo"
              position="top"
              style={{ width: "100%", height: "100%" }}
            />

            <MDBCardFooter>
              <small className="text-muted">{skill.name}</small>
            </MDBCardFooter>
          </MDBCard>
        ))}
      </MDBRow>
    </>
  );
}

export default Skills;
