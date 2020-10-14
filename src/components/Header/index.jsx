import React, {useState, useRef, useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({page}) => {
  const timers = useRef([]);

  const header = useRef(null);
  const brackets = useRef(null);

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad && header.current && brackets.current) {
      const headerBounds = header.current.getBoundingClientRect(),
        targetBounds = document
          .getElementById(page || 'home')
          .getBoundingClientRect();
      brackets.current.style.top = targetBounds.top - headerBounds.top + 'px';
      brackets.current.style.left =
        targetBounds.left - headerBounds.left + 'px';
      brackets.current.style.width = targetBounds.width + 'px';
      setInitialLoad(false);
    }
  }, [header.current, brackets.current]);

  const windowResize = e => moveBracketsTo(page || 'home');
  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  });

  useEffect(() => {
    if (!initialLoad) moveBracketsTo(page || 'home');
  }, [page]);

  const moveBracketsTo = id => {
    timers.current.forEach(timer => {
      clearTimeout(timer);
    });

    const targetBounds = document.getElementById(id).getBoundingClientRect();
    const headerBounds = header.current.getBoundingClientRect();

    brackets.current.style.top =
      targetBounds.top - headerBounds.top - targetBounds.height + 'px';

    timers.current.push(
      setTimeout(() => {
        brackets.current.style.left = targetBounds.left + 'px';
        brackets.current.style.width = targetBounds.width + 'px';
        timers.current.push(
          setTimeout(() => {
            brackets.current.style.top =
              targetBounds.top - headerBounds.top + 'px';
          }, 300)
        );
      }, 300)
    );
  };

  return (
    <header className='header' ref={header}>
      <div className={'brackets'} ref={brackets}>
        <div className={'left-bracket'}>[</div>
        <div className={'right-bracket'}>]</div>
      </div>
      <NavLink to='/' className={'link'}>
        <span id={'home'}>home</span>
      </NavLink>
      <div className='stretch'></div>
      <NavLink to='/about' className={'link'}>
        <span id={'about'}>about</span>
      </NavLink>
      <span>-></span>
      <NavLink to='/experience' className={'link'}>
        <span id={'experience'}>experience</span>
      </NavLink>
      <span>-></span>
      <NavLink to='/work' className={'link'}>
        <span id={'work'}>work</span>
      </NavLink>
      <span>-></span>
      <NavLink to='/contact' className={'link'}>
        <span id={'contact'}>contact</span>
      </NavLink>
    </header>
  );
};
