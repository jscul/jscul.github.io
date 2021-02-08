import {NavLink} from 'react-router-dom';

import './style.scss';

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <h1>Portfolio</h1>
        <div className={'center-content'}>
          <ol style={{}}>
            <li>eczemawise.org (the production stuff)</li>
            <li>Owlsite (The fun stuff)</li>
            <li>Test (internal tools)</li>
          </ol>
        </div>
      </section>
    </>
  );
};
