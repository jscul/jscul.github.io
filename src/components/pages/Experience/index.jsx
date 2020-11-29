import React from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <div className={'center-content'} style={{}}>
        <div>
          <div className='workplace-container'>
            <svg className={'line'}>
              <path d={`M 1,1 l 1,3`} />
            </svg>
            <div className={'title'}>Where I've worked</div>
            <div className='circle' />
            <div className='workplace'>
              <div className={'name'}>Dogtown Media</div>
              <div className={'info'}>June 2018 - Present</div>
            </div>
            <div className='circle' />
            <div className='workplace'>
              <div className={'name'}>Freelance</div>
              <div className={'info'}>June 2016 - June 2018</div>
            </div>
            <div className='circle' />
            <div className='workplace'>
              <div className={'name'}>Ocean Lifeguard</div>
              <div className={'info'}>June 2010 - Present</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
