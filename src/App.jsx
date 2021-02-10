import React, {Fragment, useEffect, useRef, useState} from 'react';

import Game from './game/Client';
import Server from './game/server';

import Header from 'Content/Header';
import Content from 'Content';

import Home from 'Content/Home';
import About from 'Content/About';
import Skills from 'Content/Skills';
import Experience from 'Content/Experience';
import Portfolio from 'Content/Portfolio';
import Portfolio1 from 'Content/Portfolio/pages/1';
import Portfolio2 from 'Content/Portfolio/pages/2';
import Portfolio3 from 'Content/Portfolio/pages/3';
import Recommendations from 'Content/Recommendations';
import Contact from 'Content/Contact';

const sections = [
  {
    id: 'home',
    component: Home,
    path: '/',
  },
  {
    id: 'about',
    path: '/about',
    component: About,
  },
  {
    id: 'skills',
    path: '/skills',
    component: Skills,
  },
  {
    id: 'experience',
    path: '/experience',
    component: Experience,
  },
  {
    id: 'projects',
    path: '/projects',
    component: Portfolio,
  },
  {
    id: 'projects-1',
    path: '/projects/1',
    component: Portfolio1,
  },
  {
    id: 'projects-2',
    path: '/projects/2',
    component: Portfolio2,
  },
  {
    id: 'projects-3',
    path: '/projects/3',
    component: Portfolio3,
  },
  {
    id: 'recommendations',
    path: '/recommendations',
    component: Recommendations,
  },
  {
    id: 'contact',
    path: '/contact',
    component: Contact,
  },
];

for (let i = 0; i < sections.length; i++) {
  if (i !== 0) sections[i].previous = sections[i - 1].path;
  if (i !== sections.length - 1) sections[i].next = sections[i + 1].path;
}

// import analytics from './analytics.firebase';
// analytics.logEvent('loaded_page');

export default ({history, match}) => {
  let page = history.location.pathname;
  page =
    page === '/'
      ? 'home'
      : page
          .split('/')
          .filter((s) => s)
          .join('-');

  if (page === 'game') {
    const server = new Server();
    server.start();
    return <Game />;
  }

  return (
    <>
      <Header page={page} sections={sections} />
      <Content page={page} sections={sections} history={history} />
    </>
  );
};
