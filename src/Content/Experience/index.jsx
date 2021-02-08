import React from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>Experience</h1>
        <div className={'center-content'} style={{}}>
          <div>
            <div className='workplace-container'>
              <div className={'arrow'}>
                <svg
                  className={'line'}
                  viewBox={'0 0 4 4'}
                  preserveAspectRatio='none'>
                  <path
                    vectorEffect='non-scaling-stroke'
                    d={`M 2,4.2 L 2,-.2`}
                  />
                </svg>
              </div>

              <div className='circle' />
              <div className='workplace'>
                <div className={'name'}>Software Developer</div>
                <div className={'info'}>
                  <a href={'https://www.dogtownmedia.com/'} target={'_blank'}>
                    Dogtown Media
                  </a>
                  , June 2018 - Present
                </div>
              </div>
              <div className='circle' />
              <div className='workplace'>
                <div className={'name'}>Software Developer</div>
                <div className={'info'}>Freelance, June 2016 - June 2018</div>
              </div>
              <div className='circle' />
              <div className='workplace'>
                <div className={'name'}>Ocean Lifeguard 🌊</div>
                <div className={'info'}>
                  <a href={'https://fire.lacounty.gov/'} target={'_blank'}>
                    LACoFD
                  </a>
                  , June 2010 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
