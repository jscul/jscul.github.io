import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../../assets/programmer.png';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <div
        className={'title'}
        style={{
          gridColumn: '1/2',
          justifySelf: 'end',
          alignSelf: 'start',
          transform: 'rotate(-90deg)',
        }}>
        Experience
      </div>
      <div className={'center-content'} style={{}}>
        <div style={{}}>
          <p>
            I have 4+ years of extensive professional experience and am
            proficient with HTML5, CSS3, JavaScript, Python, and Database
            Systems. I work closely with designers, R&D teams, and other
            developers to create robust servers, paired with microservices and
            serverless functions to create intuitive user experiences and meet
            client needs. Currently programming at Dogtown Media.
          </p>
          <p>Software Development is a comittment to learning.</p>
        </div>
      </div>
    </>
  );
};
