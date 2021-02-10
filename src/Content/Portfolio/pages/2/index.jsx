import React from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>[2] OwlSight</h1>
        <div className={'center-content'} style={{}}>
          OwlSight
        </div>
      </section>
    </>
  );
};
