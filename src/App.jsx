import React, {Fragment, useEffect, useRef, useState} from 'react';
import analytics from './analytics.firebase';

import Game from './game/Client';
import Server from './game/server';

import Header from 'Content/Header';
import Content from 'Content';
import sections from './Content/sections';

analytics.logEvent('test_event');
for (let i = 0; i < sections.length; i++) {
  if (i !== 0) sections[i].previous = sections[i - 1].path;
  if (i !== sections.length - 1) sections[i].next = sections[i + 1].path;
}

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
      <Content page={page} history={history} />
    </>
  );
};
