import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import youtube from "../../videos";

import { AppWrap } from "../../wrapper";

import "./Projects.scss";

const Projects = () => {
  return (
    <>
      <h4 className="head-text">
        My
        <span> Portfolio </span>
        of <span> Works </span>
      </h4>
      <center>
        <div className="app__work-filter-item">
          {youtube.videos.map((video) => (
            <div className="app__works" style={{ padding: "2%" }}>
              <center>
                <iframe
                  width="100%"
                  height="500"
                  src={video.link}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </center>
              <div className="app__works">
                <h5 className="card title">{video.name}</h5>
                <ul className="card-text">
                  {video.bullets.map((bullet) => (
                    <li id={video.id}>{bullet}</li>
                  ))}
                </ul>
                <motion.div>
                  <p className="card-text">
                    <a className="text-blue" href={video.github}>
                      <AiFillGithub />
                      Github
                    </a>
                  </p>
                  {video.site ? (
                    <p className="card-text">
                      <a className="text-blue" href={video.github}>
                        <AiFillGithub />
                        {video.site}
                      </a>
                      <AiFillEye />
                    </p>
                  ) : null}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
};

export default AppWrap(Projects, "projects");
