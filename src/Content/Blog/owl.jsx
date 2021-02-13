import {useState, useEffect} from 'react';

import './index.scss';

export default ({...props}) => {
  const [eye, setEye] = useState('o');

  useEffect(() => {
    const i = setInterval(() => setEye('-'), 6000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (eye === '-') {
      const t = setTimeout(() => setEye('o'), 300);
      return () => clearTimeout(t);
    }
  }, [eye]);

  return (
    <div style={{}}>
      {` {${eye},${eye}}\n`}
      {'./)_)\n'}
      {'  " "\n'}
    </div>
  );
};
