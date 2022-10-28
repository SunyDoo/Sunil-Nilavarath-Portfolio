import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import skills from "../skills";

function SkillIcons() {
  return (
    <>
      <MDBRow className="row-cols-4 row-cols-md-3 g-4">
        {skills.skills.map((skill) => (
          <div className="bg-image hover-overlay">
            <img
              src={skill.image}
              className="img-thumbnail"
              alt="logo"
              width="20%"
              height="10%"
            />
            <a href="#!">
              <div
                className="mask overlay"
                style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
              >
                <small className="text-muted">{skill.name}</small>
              </div>
            </a>
          </div>
        ))}
      </MDBRow>
    </>
  );
}

export default SkillIcons;
