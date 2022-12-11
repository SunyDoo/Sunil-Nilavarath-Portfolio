import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Front End",
      description: "Javascript / React.js",
      imgUrl: images.about02,
    },
    {
      title: "Back End",
      description: "Ruby on Rails / PostGreSQL",
      imgUrl: images.about04,
    },
    { title: "Full Stack", description: "", imgUrl: images.about01 },
  ];

  return (
    <>
      <h4 className="head-text">
      🚀 Highly Motivated full-stack developer{" "}
        <span>Experienced in object-oriented programming</span> <br />
        Ruby on Rails, React, JavaScript <br></br>
        <span>strong skills in analytical thinking</span> <br />
        ability to thrive in fast-paced, challenging, and collaborative work
        environments 🪐
      </h4>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
