import {Fragment, useEffect, useRef} from 'react';
import sections from './sections';

import './style.scss';

export default ({history, page}) => {
  const getDistanceFromMiddle = (el) => {
    var {top} = el.getBoundingClientRect();
    return Math.abs(top);
  };

  useEffect(() => {
    // TODO defer this
    const scroll = (e) => {
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
      if (closest) {
        const section = sections.find(
          (section) => section.id === closest.id.replace('-page', '')
        );
        if (section && page.split('-')[0] !== section.id)
          history.push(section.path);
      }
    };

    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, [page]);

  // return an array of grid sections
  return (
    <div className='content'>
      {sections.map((section, i) => {
        const Section = section.component;
        return <Section key={i} history={history} section={section} />;
      })}
    </div>
  );
};
