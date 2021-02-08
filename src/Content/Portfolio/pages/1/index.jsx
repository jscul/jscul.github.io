import React from 'react';

import {NavLink} from 'react-router-dom';

// import image from 'assets/Portfolio/Screenshot from 2020-07-30 21-06-36.png';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>[1] eczemawise</h1>
        <div className={'center-content'} style={{}}>
          eczemawise.org
          {/* <img src={image} width={400} alt='' /> */}
        </div>
      </section>
    </>
  );
};
