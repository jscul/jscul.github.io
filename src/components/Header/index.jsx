import React, {useState, useRef, useEffect} from 'react';

import {NavLink} from 'react-router-dom';
import LocalLink from 'components/LocalLink';

import Owl from 'Content/Blog/owl';

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
    header.current.addEventListener('scroll', windowResize);
    return () => {
      window.removeEventListener('resize', windowResize);
      header.current.removeEventListener('scroll', windowResize);
    };
  });

  useEffect(() => {
    if (!initialLoad) moveBracketsTo(page);
  }, [page]);

  const moveBracketsTo = (id) => {
    if (
      ![
        'home',
        'about',
        'skills',
        'experience',
        'projects',
        'projects-1',
        'projects-2',
        'projects-3',
        'recommendations',
        'contact',
      ].includes(id)
    )
      return;

    timers.current.forEach((timer) => {
      clearTimeout(timer);
    });

    const target = document.getElementById(id);
    const headerBounds = header.current.getBoundingClientRect();
    let targetBounds = target.getBoundingClientRect();

    // we need to be more clever about what we're adding here
    // target.parentElement.parentElement.scrollLeft += targetBounds.left;

    brackets.current.style.top =
      targetBounds.top - headerBounds.top - targetBounds.height + 'px';

    timers.current.push(
      setTimeout(() => {
        if (!brackets.current) return;
        brackets.current.style.left =
          targetBounds.left + header.current.scrollLeft + 'px';
        brackets.current.style.width = targetBounds.width + 'px';
        timers.current.push(
          setTimeout(() => {
            if (!brackets.current) return;
            brackets.current.style.top =
              targetBounds.top - headerBounds.top + 'px';
          }, 300)
        );
      }, 300)
    );
  };

  return (
    <header className='header' ref={header}>
      <nav>
        <NavLink
          to='/blog'
          exact
          className={'link link-blog'}
          draggable='false'
          replace={false}>
          <Owl />
        </NavLink>

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

        <div className='stretch' />

        <span className={'first-arrow'}>-></span>

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
          find={'skills-page'}
          to='/skills'
          exact
          className={'link'}
          draggable='false'>
          <span id={'skills'}>skills</span>
        </LocalLink>

        <span>-></span>

        <LocalLink
          find={'experience-page'}
          to='/experience'
          exact
          className={'link'}
          draggable='false'>
          <span id={'experience'}>work</span>
        </LocalLink>

        <span>-></span>

        <LocalLink
          find={'projects-page'}
          to='/projects'
          exact
          className={'link'}
          draggable='false'>
          <span id={'projects'}>projects</span>
        </LocalLink>
        {/* <LocalLink
        find={'projects-1-page'}
        to='/projects/1'
        exact
        className={'link'}
        draggable='false'>
        <span id={'projects-1'}>1</span>
      </LocalLink>
      <LocalLink
        find={'projects-2-page'}
        to='/projects/2'
        exact
        className={'link'}
        draggable='false'>
        <span id={'projects-2'}>2</span>
      </LocalLink>
      <LocalLink
        find={'projects-3-page'}
        to='/projects/3'
        exact
        className={'link'}
        draggable='false'>
        <span id={'projects-3'}>3</span>
      </LocalLink> */}

        <span>-></span>

        <LocalLink
          find={'recommendations-page'}
          to='/recommendations'
          exact
          className={'link'}
          draggable='false'>
          <span id={'recommendations'}>recs</span>
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
      </nav>
    </header>
  );
};
