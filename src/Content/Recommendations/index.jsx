import React, {useState, useEffect} from 'react';

import recommendations from 'assets/recommendations';

import './style.scss';

const Tile = ({profileImage, text, name, title, link, hiding, showing}) => {
  return (
    <div
      className={`recommendation${showing ? ' showing' : ''}${
        hiding ? ' hiding' : ''
      }`}>
      <img src={profileImage} alt='' />
      <div>
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
      <q>{text}</q>
    </div>
  );
};

const Caurosel = ({}) => {
  const [showingIndex, setShowingIndex] = useState(0);
  const [hidingIndex, setHidingIndex] = useState(-1);

  const [direction, setDirection] = useState(1);

  let children = recommendations.map((recommendation, i) => {
    return (
      <Tile
        showing={showingIndex === i}
        hiding={hidingIndex === i}
        key={i}
        {...recommendation}
      />
    );
  });

  const goLeft = (e) => {
    setDirection(-1);
    const nextIndex =
      showingIndex === 0 ? children.length - 1 : showingIndex - 1;
    setHidingIndex(showingIndex);
    setShowingIndex(nextIndex);
  };

  const goRight = (e) => {
    setDirection(1);
    const nextIndex =
      showingIndex === children.length - 1 ? 0 : showingIndex + 1;
    setHidingIndex(showingIndex);
    setShowingIndex(nextIndex);
  };

  const animateOut = (el) => {};

  const animateIn = (el) => {};

  return (
    <div className={`caurosel ${direction === -1 ? 'left' : 'right'}`}>
      <button onClick={goLeft} className={'left'}>
        <i className='material-icons'>chevron_left</i>
      </button>
      {children}
      <button onClick={goRight} button={'right'}>
        <i className='material-icons'>chevron_right</i>
      </button>
      <div className={'pages'}>
        <div className='stretch' />
        {children.map((_, i) => {
          return (
            <div
              key={i}
              className={`page-index${i === showingIndex ? ' showing' : ''}`}
            />
          );
        })}
        <div className='stretch' />
      </div>
    </div>
  );
};

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <div className='center-content'>
          <h1>Recommendations</h1>
          <Caurosel />
        </div>
      </section>
    </>
  );
};