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
      {/* <iframe
        width={800}
        height={1200}
        src='https://docs.google.com/document/d/e/2PACX-1vSdZMyqVU4HU5od4oWocg1QAmF8A0rQdmf0lF8j3ewbn1ux5W07ec7pd725A1I-8i0zNmyxNVeAgB4p/pub?embedded=true'
      /> */}
      <iframe
        width={1200}
        height={800}
        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vRj7op3ukM3NfnRFYXwHd5hKJAqCc-cLK8g-V6h6SbDXR1-f3IouJW-GCLxVeWYn_Zm0bRIkypKSPtS/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false'></iframe>
    </>
  );
};
