import React from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import skills from "../../skills";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        {" "}
        <span> Skills </span> & <span> Toolkit </span>{" "}
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "white" }}>
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);