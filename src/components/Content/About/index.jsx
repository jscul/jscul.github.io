import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../../assets/programmer.png';
import mountains from '../../../assets/mountains.svg';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <svg
        viewBox='0 0 5 5'
        preserveAspectRatio='none'
        width='100vw'
        height='100vh'
        style={{position: 'absolute', zIndex: -1}}>
        <polyline
          points='1,0 1,.5 4.5,.5 4.5,2 5,2'
          strokeLinecap='round'
          vectorEffect='non-scaling-stroke'
          style={{stroke: '#222', fill: 'none', strokeWidth: 4}}
        />
        <polyline
          points='5,3 4.5,3 4.5,5'
          strokeLinecap='round'
          vectorEffect='non-scaling-stroke'
          style={{stroke: '#222', fill: 'none', strokeWidth: 4}}
        />
      </svg>
      <div className={'center-content'} style={{}}>
        <div style={{}}>
          <p>
            I have 4+ years of extensive professional experience with
            proficiency in{' '}
            <a href={'about/css'} className={'keyword'}>
              HTML5
            </a>
            ,{' '}
            <a href={'about/css'} className={'keyword'}>
              (S)CSS
            </a>
            ,{' '}
            <a href={'about/css'} className={'keyword'}>
              JavaScript
            </a>
            ,{' '}
            <a href={'about/css'} className={'keyword'}>
              Python
            </a>
            ,{' '}
            <a href={'about/css'} className={'keyword'}>
              Database Systems
            </a>
            , and{' '}
            <a href={'about/css'} className={'keyword'}>
              Cloud Hosting
            </a>
            . I work closely with designers, R&D teams, and other developers to
            create <b>robust servers</b> paired with <b>microservices</b> and{' '}
            <b>serverless functions</b> to create intuitive user experiences and
            meet client needs and meet data strategy goals. Currently
            programming at Dogtown Media.
          </p>
          <p>
            <NavLink to={'/about/more'}>But I want to know more 👉</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
