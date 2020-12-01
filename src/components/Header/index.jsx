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

  const onClick = e => {
    e.preventDefault();
    // get first child, id is on the span for the bracket movement
    let id = e.target.firstChild.id;
    if (!id) id = e.target.id;
    const el = document.getElementById(`${id}-page`);
    if (el)
      el.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <header className='header' ref={header}>
      <div className='fade-in' />

      <div className={'brackets'} ref={brackets}>
        <div className={'left-bracket'}>[</div>
        <div className={'right-bracket'}>]</div>
      </div>

      <NavLink
        to='/'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'home'}>home</span>
      </NavLink>

      <div className='stretch'></div>

      <NavLink
        to='/about'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'about'}>about</span>
      </NavLink>

      <span>-></span>

      <NavLink
        to='/experience'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'experience'}>experience</span>
      </NavLink>

      <span>-></span>

      <NavLink
        to='/portfolio'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio'}>portfolio</span>
      </NavLink>
      <NavLink
        to='/portfolio/1'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-1'}>1</span>
      </NavLink>
      <NavLink
        to='/portfolio/2'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-2'}>2</span>
      </NavLink>
      <NavLink
        to='/portfolio/3'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-3'}>3</span>
      </NavLink>

      <span>-></span>

      <NavLink
        to='/contact'
        onClick={onClick}
        exact
        className={'link'}
        draggable='false'>
        <span id={'contact'}>contact</span>
      </NavLink>
    </header>
  );
};
