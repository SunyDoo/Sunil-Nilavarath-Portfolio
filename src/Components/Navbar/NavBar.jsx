import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <div className="banner">
        <img
          src="https://i.pinimg.com/originals/bf/ad/41/bfad41f2ac24994cb61872cfb455e382.jpg"
          className="img-fluid shadow-4"
          alt="Banner"
          style={{ width: "50%", height: "30%" }}
        />
      </div>
      <MDBNavbar expand="lg" light bgColor="black">
        <MDBContainer fluid>
          <img
            src="https://i.pinimg.com/originals/9d/36/57/9d3657342bc10cfa2ac4ec930ae64c44.jpg"
            alt="logo"
            className="rounded-circle img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/"
                  className="text-light"
                >
                  Hello, World!
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/resume" className="text-light">
                  Resume
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/skills" className="text-light">
                  Skills
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/projects" className="text-light">
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="ms-auto">
                <MDBNavbarItem>
                  <p className="text-light">Links</p>
                </MDBNavbarItem>
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
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
