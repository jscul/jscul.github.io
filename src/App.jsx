import React, {Fragment, useEffect, useRef, useState} from 'react';

import {Route} from 'react-router-dom';

import {throttle, debounce} from 'lodash';

import Header from './components/Header';
import Content from './components/Content';

import './app.scss';

import Home from './components/Content/Home';
import About from './components/Content/About';
import AboutMore from './components/Content/About/pages/More';
import Experience from './components/Content/Experience';
import Portfolio from './components/Content/Portfolio';
import Contact from './components/Content/Contact';

const sections = [
  {
    id: 'home',
    component: Home,
    next: '/about',
    path: '/',
    availableFrom: ['about', 'experience', 'portfolio', 'contact'],
  },
  {
    id: 'about',
    component: About,
    next: '/experience',
    previous: '/',
    availableFrom: [],
  },
  {
    id: 'about-more',
    component: AboutMore,
    path: '/about/more',
    previous: '/about',
    next: '/about',
    style: {
      'grid-column': '2/3',
      'grid-row': '2/3',
    },
    availableFrom: [],
  },
  {
    id: 'experience',
    component: Experience,
    next: '/portfolio',
    previous: '/about',
  },
  {
    id: 'portfolio',
    component: Portfolio,
    next: '/contact',
    previous: '/experience',
    availableFrom: [],
  },
  {
    id: 'contact',
    component: Contact,
    previous: '/portfolio',
    availableFrom: [],
  },
];

export default ({history, match}) => {
  let page = history.location.pathname;
  page =
    page === '/'
      ? 'home'
      : page
          .split('/')
          .filter(s => s)
          .join('-');

  const freeScroll = useState(false);

  const [initialPageLoad, setInitialPageLoad] = useState(true);
  const isScrolling = useRef(false);
  const scrollingDebounced = useRef(
    debounce(e => {
      isScrolling.current = false;
    }, 60)
  );
  useEffect(() => {
    window.addEventListener('scroll', scrollingDebounced.current, {
      passive: false,
      capture: 'bubble',
    });
    return window.removeEventListener('scroll', scrollingDebounced.current);
  }, []);

  const scrollTime = useRef(Date.now());
  useEffect(() => {
    isScrolling.current = !initialPageLoad;
    const wheel = e => {
      e.preventDefault();
      const now = Date.now();
      if (now - scrollTime.current < 60 || isScrolling.current) return false;
      scrollTime.current = now;
      const section = sections.find(
        section =>
          section.id === document.querySelector('.active').firstChild.id
      );
      if (section && e.deltaY > 0 && section.next) {
        history.push(section.next);
      } else if (section && e.deltaY < 0 && section.previous) {
        history.push(section.previous);
      }
    };
    window.addEventListener('wheel', wheel, {
      passive: false,
      capture: 'bubble',
    });
    setInitialPageLoad(false);
    return () =>
      window.removeEventListener('wheel', wheel, {
        passive: false,
        capture: 'bubble',
      });
  }, [page]);

  return (
    <>
      <Header page={page} sections={sections} />
      <div className={'content'}>
        <Content page={page} history={history} sections={sections} />
      </div>
    </>
  );
};
