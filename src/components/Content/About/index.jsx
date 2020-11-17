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
          <p>Software Development is a comittment to learning.</p>
          <p>
            <NavLink to={'/about/more'}>But I want to know more 👉</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};
