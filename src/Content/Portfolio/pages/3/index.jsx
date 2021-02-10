import React, {Video} from 'react';

import {NavLink} from 'react-router-dom';

// import video from 'assets/projects/owlsight/test.mp4';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>[3] Aspire</h1>
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
      </section>
    </>
  );
};
