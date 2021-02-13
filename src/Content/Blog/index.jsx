import {useState, useEffect} from 'react';

import {NavLink} from 'react-router-dom';

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
    <pre
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
      {`  {${eye},${eye}}     The Owl Blog,\n`}
      {' ./)_)       now in acii,\n'}
      {'   " "      unicode next.\n'}
      {' \n'}
      {' \n'}
      {'      Just kidding\n'}
      {' Site under m̸̖̤̜͍͙̈́̈̋̇͆͜ā̴̛̱̟͇i̸̦̣̮̮͍͂̽͛̐̎ṯ̸̡̘͑̒e̷̢̟̦̥̅̏̽̑͘n̵̠̄̒̽̾ē̶͍̰͕͖͕n̷̳̖̯͋͠c̷͕̖̹͛̍e̷͙̱͐̎...\n'}
      {'       '}
    </pre>
  );
};
