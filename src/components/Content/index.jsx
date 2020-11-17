import React, {Fragment, useEffect} from 'react';

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';

import './style.scss';

const _sections = {
  home: Home,
  about: About,
  experience: Experience,
  work: Work,
  contact: Contact,
};

export default ({page, sections}) => {
  useEffect(() => {
    document
      .getElementById(`${page || 'home'}-page`)
      .scrollIntoView({behavior: 'smooth'});
  }, [page]);

  // return an array of grid sections
  return sections.map((section, i) => {
    const Section = _sections[section.name];
    return (
      <section id={`${section.name}-page`}>
        <Section section={section} />
      </section>
    );
  });
};
