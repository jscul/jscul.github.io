import React, {useEffect, useState, useRef} from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

const arc = `
  a1,1 0 0,0 10,0`;

const wires = [
  `m 4,4 L 1,4 1,5`,
  `1,5 1,5.5 4.75,6 4.75,50`,
  `4.5,50`,
  '4.5,54.5 3,54.5 .5,54 .5,50.5  3,50.5 5,51',
];

const getWires = () => {
  return wires.join(' ');
};

export default ({}) => {
  const dashSpacing = 300;
  const [totalLength, setTotalLength] = useState(0);
  const dataLine = useRef(null);

  const points = getWires();

  useEffect(() => {
    if (dataLine.current) setTotalLength(dataLine.current.getTotalLength());
  }, [dataLine]);
  return null;
  return (
    <svg
      className={'circuit'}
      viewBox='0 0 5 5'
      preserveAspectRatio='none'
      style={{}}>
      <g className={'send'}>
        <path className={'wire'} d={points} vectorEffect='non-scaling-stroke' />
        <path
          ref={dataLine}
          className={'data'}
          d={points}
          vectorEffect='non-scaling-stroke'
          style={{
            strokeDasharray: `${4} ${dashSpacing}`,
            strokeDashoffset: `${totalLength + totalLength * dashSpacing}`,
            animation: `dash ${totalLength * 2}s linear forwards infinite`,
          }}
        />
      </g>
      {/* <g className={'recieve'} transform='translate(.05, .06)'>
        <path className={'wire'} d={points} vectorEffect='non-scaling-stroke' />
        <path
          ref={dataLine}
          className={'data'}
          d={points}
          vectorEffect='non-scaling-stroke'
          style={{
            strokeDasharray: `${6} ${dashSpacing * 2}`,
            strokeDashoffset: `${totalLength + totalLength * dashSpacing}`,
            animation: `dash ${totalLength * 2}s linear reverse infinite`,
          }}
        />
      </g> */}
    </svg>
  );
};
