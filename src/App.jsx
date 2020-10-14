import React, {Fragment, useEffect, useRef, useState} from 'react';

import {Route} from 'react-router-dom';

import {throttle, debounce} from 'lodash';

import Header from './components/Header';
import Content from './components/Content';

import './app.scss';

const sections = [
  {
    name: 'home',
    path: '/',
    next: 'about',
  },
  {
    name: 'about',
    next: 'experience',
    previous: '/',
  },
  {
    name: 'experience',
    next: 'work',
    previous: 'about',
  },
  {
    name: 'work',
    next: 'contact',
    previous: 'experience',
  },
  {
    name: 'contact',
    previous: 'work',
  },
];

export default ({match, history}) => {
  const {page} = match.params;

  const isScrolling = useRef(false);
  const scrollingDebounced = useRef(
    debounce(e => {
      isScrolling.current = false;
    }, 300)
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
    isScrolling.current = true;
    const wheel = e => {
      e.preventDefault();
      const now = Date.now();
      if (now - scrollTime.current < 200 || isScrolling.current) return false;
      scrollTime.current = now;
      const section = sections.find(
        section => section.name === (page || 'home')
      );
      if (e.deltaY > 0 && section.next) {
        history.push(section.next);
      } else if (e.deltaY < 0 && section.previous) {
        history.push(section.previous);
        history.push(section.previous);
      }
    };
    window.addEventListener('wheel', wheel, {
      passive: false,
      capture: 'bubble',
    });
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
        <Content page={page} sections={sections} />
      </div>
    </>
  );
};
