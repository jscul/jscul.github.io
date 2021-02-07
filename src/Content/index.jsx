import {Fragment, useEffect, useRef} from 'react';

import Wire from 'components/Wire';

import './style.scss';

export default ({history, page, sections}) => {
  useEffect(() => {
    const resize = (e) => {
      const el = document.getElementById(`${page}-page`);
      if (!el) console.error(`!el`);
      if (el) el.scrollIntoView({});
    };
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [page]);

  const getDistanceFromMiddle = (el) => {
    var {top} = el.getBoundingClientRect();
    return Math.abs(top);
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      // const pages = document.querySelectorAll('.page');
      // let closest = null,
      //   distance = null;
      // for (let i = pages.length; i--; ) {
      //   const _distance = getDistanceFromMiddle(pages[i]);
      //   if (_distance < distance || distance === null) {
      //     closest = pages[i];
      //     distance = _distance;
      //   }
      // }
      // if (closest) {
      //   const section = sections.find(
      //     (section) => section.id === closest.id.replace('-page', '')
      //   );
      //   history.push(section.path);
      // }
    });
  }, []);

  // return an array of grid sections
  return (
    <div className={'content'}>
      {sections.map((section, i) => {
        const Section = section.component;
        return (
          <section key={i} id={`${section.id}-page`} className={'page'}>
            <Section history={history} section={section} />
          </section>
        );
      })}
    </div>
  );
};
