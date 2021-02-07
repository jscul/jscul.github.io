import React, {useState, useRef, useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import LocalLink from '../../LocalLink';

import './style.scss';

export default ({page, sections}) => {
  const timers = useRef([]);

  const header = useRef(null);
  const brackets = useRef(null);

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad && header.current && brackets.current) {
      page = page.split('-')[0];
      const headerBounds = header.current.getBoundingClientRect();
      const targetBounds = document
        .getElementById(page)
        .getBoundingClientRect();
      brackets.current.style.top = targetBounds.top - headerBounds.top + 'px';
      brackets.current.style.left =
        targetBounds.left - headerBounds.left + 'px';
      brackets.current.style.width = targetBounds.width + 'px';
      brackets.current.style.opacity = 1;
      setInitialLoad(false);
    }
  }, [header.current, brackets.current]);

  const windowResize = (e) => moveBracketsTo(page || 'home');
  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  });

  useEffect(() => {
    if (!initialLoad) moveBracketsTo(page);
  }, [page]);

  const moveBracketsTo = (id) => {
    if (
      ![
        'home',
        'about',
        'experience',
        'portfolio',
        'portfolio-1',
        'portfolio-2',
        'portfolio-3',
        'contact',
      ].includes(id)
    )
      return;

    timers.current.forEach((timer) => {
      clearTimeout(timer);
    });

    const targetBounds = document.getElementById(id).getBoundingClientRect();
    const headerBounds = header.current.getBoundingClientRect();
    const overlayBounds = header.current.parentElement.getBoundingClientRect();

    brackets.current.style.top =
      targetBounds.top -
      headerBounds.top -
      overlayBounds.top -
      targetBounds.height +
      'px';

    timers.current.push(
      setTimeout(() => {
        brackets.current.style.left =
          targetBounds.left - overlayBounds.left + 'px';
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
      <div className='fade-in' />

      <div
        className={`brackets ${initialLoad || 'no-transition'}`}
        ref={brackets}>
        <div className={'left-bracket'}>[</div>
        <div className={'right-bracket'}>]</div>
      </div>

      <LocalLink
        find={'home-page'}
        to='/'
        exact
        className={'link'}
        draggable='false'>
        <span id={'home'}>home</span>
      </LocalLink>

      <div className='stretch'></div>

      <LocalLink
        find={'about-page'}
        to='/about'
        exact
        className={'link'}
        draggable='false'>
        <span id={'about'}>about</span>
      </LocalLink>

      <span>-></span>

      <LocalLink
        find={'experience-page'}
        to='/experience'
        exact
        className={'link'}
        draggable='false'>
        <span id={'experience'}>experience</span>
      </LocalLink>

      <span>-></span>

      <LocalLink
        find={'portfolio-page'}
        to='/portfolio'
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio'}>portfolio</span>
      </LocalLink>
      <LocalLink
        find={'portfolio-1-page'}
        to='/portfolio/1'
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-1'}>1</span>
      </LocalLink>
      <LocalLink
        find={'portfolio-2-page'}
        to='/portfolio/2'
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-2'}>2</span>
      </LocalLink>
      <LocalLink
        find={'portfolio-3-page'}
        to='/portfolio/3'
        exact
        className={'link'}
        draggable='false'>
        <span id={'portfolio-3'}>3</span>
      </LocalLink>

      <span>-></span>

      <LocalLink
        find={'contact-page'}
        to='/contact'
        exact
        className={'link'}
        draggable='false'>
        <span id={'contact'}>contact</span>
      </LocalLink>
    </header>
  );
};
