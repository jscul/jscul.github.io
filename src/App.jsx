import React, {Fragment, useEffect, useRef, useState} from 'react';

import {Route} from 'react-router-dom';

import {throttle, debounce} from 'lodash';

import Header from './components/Header';
import Content from './components/pages';

import './app.scss';

import Home from './components/pages/Home';
import About from './components/pages/About';

import Experience from './components/pages/Experience';
import Experience1 from './components/pages/Experience/pages/1';
import Experience2 from './components/pages/Experience/pages/2';
import Experience3 from './components/pages/Experience/pages/3';

import Portfolio from './components/pages/Portfolio';
import Portfolio1 from './components/pages/Portfolio/pages/1';
import Portfolio2 from './components/pages/Portfolio/pages/2';
import Portfolio3 from './components/pages/Portfolio/pages/3';

import Contact from './components/pages/Contact';

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
    path: '/about',
    component: About,
    next: '/experience',
    previous: '/',
    availableFrom: [],
  },
  {
    id: 'experience',
    path: '/experience',
    component: Experience,
    next: '/portfolio',
    previous: '/about',
  },
  {
    id: 'portfolio',
    path: '/portfolio',
    component: Portfolio,
    next: '/contact',
    previous: '/experience',
    availableFrom: [],
  },
  {
    id: 'portfolio-1',
    path: '/portfolio/1',
    component: Portfolio1,
    style: {},
    next: '/portfolio/2',
    previous: '/portfolio',
  },
  {
    id: 'portfolio-2',
    path: '/portfolio/2',
    component: Portfolio2,
    next: '/portfolio/3',
    previous: '/portfolio/1',
  },
  {
    id: 'portfolio-3',
    path: '/portfolio/3',
    component: Portfolio3,
    next: '/contact',
    previous: '/portfolio/2',
  },
  {
    id: 'contact',
    path: '/contact',
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

  return (
    <>
      <Header page={page} sections={sections} />
      <div className={'content'}>
        <Content page={page} history={history} sections={sections} />
      </div>
    </>
  );
};
