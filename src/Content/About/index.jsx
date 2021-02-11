import React, {useState, useRef, useEffect} from 'react';

import {NavLink, Route} from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

import LocalLink from 'components/LocalLink';

import './style.scss';

export default ({section, history}) => {
  return (
    <>
      <section id={'about-page'} className={'page scroll-offset'}>
        <div className={`center-content`}>
          <h1>About Me</h1>
          <p>
            Hello! I'm John, a software developer based out of Los Angeles, CA.
          </p>
          <p>
            I have 4+ years of extensive professional experience building robust
            software for a variety of clients through collaboration with
            designers, R&D teams, and other developers. My focus is on building{' '}
            robust servers, microservices, and serverless functions to meet
            client needs and data strategy objectives.
          </p>
          <p>
            Currently programming at{' '}
            <a href='https://www.dogtownmedia.com/' target={'_blank'}>
              Dogtown Media
            </a>
            .
          </p>
          {/* https://docs.google.com/document/d/e/2PACX-1vSdZMyqVU4HU5od4oWocg1QAmF8A0rQdmf0lF8j3ewbn1ux5W07ec7pd725A1I-8i0zNmyxNVeAgB4p/pub?embedded=true */}
          <a
            className={'download-resume'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            href='/John_Cullen.pdf'>
            resume <span className='material-icons'>download</span>
          </a>
        </div>
      </section>
    </>
  );
};
