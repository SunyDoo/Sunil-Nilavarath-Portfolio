import React from "react";
import youtube from "../videos";

export default function VideoCards() {
  return (
    <>
      <center>
        <div className="col-sm-6">
          {youtube.videos.map((video) => (
            <div className="card mb-3" style={{ padding: "2%" }}>
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
              <div className="card-body">
                <h5 className="card-title">{video.name}</h5>
                <ul className="card-text">
                  {video.bullets.map((bullet) => (
                    <li id={video.id}>{bullet}</li>
                  ))}
                </ul>
                <p className="card-text">
                  <a className="text-blue" href={video.github}>
                    Github
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
}
