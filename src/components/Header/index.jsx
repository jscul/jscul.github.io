import React, {useState, useRef, useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({page, sections}) => {
  const timers = useRef([]);

  const header = useRef(null);
  const brackets = useRef(null);

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad && header.current && brackets.current) {
      const headerBounds = header.current.getBoundingClientRect();
      const targetBounds = document
        .getElementById(page)
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
    if (!initialLoad) moveBracketsTo(page);
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
      <NavLink to='/' exact className={'link'}>
        <span id={'home'}>home</span>
      </NavLink>
      <div className='stretch'></div>
      <NavLink to='/about' exact className={'link'}>
        <span id={'about'}>about</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>1</span>
      </NavLink>

      <span>-></span>
      <NavLink to='/experience' exact className={'link'}>
        <span id={'experience'}>experience</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>1</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>2</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>3</span>
      </NavLink>
      <span>-></span>
      <NavLink to='/portfolio' exact className={'link'}>
        <span id={'portfolio'}>portfolio</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>1</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>2</span>
      </NavLink>
      <NavLink to='/about/more' exact className={'link'}>
        <span id={'about-more'}>3</span>
      </NavLink>
      <span>-></span>
      <NavLink to='/contact' exact className={'link'}>
        <span id={'contact'}>contact</span>
      </NavLink>
    </header>
  );
};
