import React, {Fragment, useEffect, useRef} from 'react';

import Wire from '../Wire';

import './style.scss';

export default ({history, page, sections}) => {
  useEffect(() => {
    const resize = e => {
      const el = document.getElementById(`${page}-page`);
      if (el) el.scrollIntoView({});
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [page]);

  const getDistanceFromMiddle = el => {
    var {top} = el.getBoundingClientRect();
    return Math.abs(top);
  };

  useEffect(() => {
    window.addEventListener('scroll', e => {
      const pages = document.querySelectorAll('.page');
      let closest = null,
        distance = null;
      for (let i = pages.length; i--; ) {
        const _distance = getDistanceFromMiddle(pages[i]);
        if (_distance < distance || distance === null) {
          closest = pages[i];
          distance = _distance;
        }
      }
      const section = sections.find(
        section => section.id === closest.id.replace('-page', '')
      );
      history.push(section.path);
    });
  }, []);

  // return an array of grid sections
  return (
    <>
      <Wire />
      {sections.map((section, i) => {
        const Section = section.component;
        return (
          <section id={`${section.id}-page`} className={'page'}>
            <Section history={history} section={section} />
          </section>
        );
      })}
    </>
  );
};
