import React, {Video} from 'react';

import {NavLink} from 'react-router-dom';

import video from 'assets/portfolio/owlsite/test.mp4';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <div className={'center-content'} style={{}}>
        {/* <video
          loop
          autoPlay
          muted
          width={750}
          height={500}
          controls
          src={video}
        /> */}
      </div>
    </>
  );
};
