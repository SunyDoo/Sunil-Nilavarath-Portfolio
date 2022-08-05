import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const YoutubeVids = () => (
    <>
    <div>
        <h2 className='text-light'>The following are video demos for projects I've made throughout my time at the Flatiron School</h2>
    </div>
  <MDBContainer>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/s11rA9Hou4s`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h3 className='text-light'>RUMC Patient Portal</h3>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/W7XaT3JDzz0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h3 className='text-light'>Sunil's BlogSpot</h3>

    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/0ruEEsFAD3c`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h3 className='text-light'>Sunil's Movie Reviews</h3>

    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/hErkcaaHIC8`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h3 className='text-light'>Sunil's Gym</h3>

    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/IzDIefsyMbU`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h3 className='text-light'>Sunil's Card Shop</h3>
    <div className="video-responsive"></div>
  </MDBContainer>
  </>
);



export default YoutubeVids;
