import React from 'react';

import {NavLink} from 'react-router-dom';

import logo from '../../../assets/programmer.png';
import mountains from '../../../assets/mountains.svg';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <div
        style={{
          gridColumn: '3/4',
          gridRow: '3/4',
          justifySelf: 'end',
          alignSelf: 'end',
          fontSize: '28px',
          textAlign: 'left',
          position: 'relative',
          margin: 0,
          padding: 0,
          fontSize: 0,
        }}>
        <img
          width={1200}
          src={mountains}
          style={{position: 'absolute', bottom: 0, right: 0}}
          alt={''}
        />
      </div>
      <div
        className={'title'}
        style={{
          gridColumn: '1/2',
          justifySelf: 'end',
          alignSelf: 'center',
          fontSize: '28px',
          transform: 'rotate(-90deg)',
          textAlign: 'left',
        }}>
        About me
      </div>
      <div
        className={'title'}
        style={{
          gridColumn: '2/3',
          gridRow: '1/2',
          justifySelf: 'start',
          alignSelf: 'end',
        }}>
        Profesional Life 💻
      </div>
      <div className={'center-content'} style={{}}>
        <div style={{}}>
          <p>
            I have 4+ years of extensive professional experience and am
            proficient with <span className={'keyword'}>HTML5</span>,{' '}
            <span className={'keyword'}>(S)CSS</span>,{' '}
            <span className={'keyword'}>JavaScript</span>,{' '}
            <span className={'keyword'}>Python</span>, and{' '}
            <span className={'keyword'}>Database Systems</span>. I work closely
            with designers, R&D teams, and other developers to create robust
            servers, paired with microservices and serverless functions to
            create intuitive user experiences and meet client needs. Currently
            programming at Dogtown Media.
          </p>
          <p>Software Development is a comittment to learning.</p>
          <p>
            <NavLink to={'/about/more'}>But I want to know more 👉</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
