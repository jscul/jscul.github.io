import React, {Fragment, useEffect} from 'react';

import './style.scss';

export default ({history, page, sections}) => {
  useEffect(() => {
    const el = document.getElementById(`${page}-page`);
    if (el) el.scrollIntoView({behavior: 'smooth'});
  }, [page]);

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

  // return an array of grid sections
  return sections.map((section, i) => {
    const Section = section.component;
    return (
      <section id={`${section.id}-page`} style={section.style}>
        <Section history={history} section={section} />
      </section>
    );
  });
};
