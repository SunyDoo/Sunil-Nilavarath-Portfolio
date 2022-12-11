import React from "react";
import { motion } from "framer-motion";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";

import { HeaderWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, World. I am</p>
            <h1 className="head-text">Sunil</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Web Developer 💻</p>
          <p className="p-text">👶 Twin Dad 👶</p>
        </div>
        <div className="tag-cmp app__flex">
            <div>
              <MDBBtn
                floating
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/sunil-nilavarath-2b78a2a8/"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>
            <br></br>
            <div>
              <MDBBtn
                floating
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/SunyDoo"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
            <br></br>
            <div>
              <MDBBtn
                floating
                style={{ backgroundColor: "#333333" }}
                href="https://medium.com/@snilavarath"
                role="button"
              >
                <MDBIcon fab icon="medium" />
              </MDBBtn>
            </div>
          </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.sass, images.javascript, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default HeaderWrap(Header, "home");
