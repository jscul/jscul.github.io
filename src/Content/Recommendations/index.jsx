import React, {useState, useEffect} from 'react';

import recommendations from 'assets/recommendations';

import './style.scss';

const Tile = ({
  profileImage,
  text,
  name,
  title,
  link,
  clickedHome,
  setClickedHome,
  showing,
}) => {
  let prompt = [
    link === '/' ? 'click me' : 'click to view his work',
    `thank you`,
    `once was enough, tysm`,
    `are you gonna keep clicking this?`,
    `stop clicking it`,
    <>
      ok - look final <span className={'warning'}>warning!</span>
    </>,
    <>
      <span className={'error'}>500 error: stop this madness</span>
    </>,
    'i might have to delete some messages',
    '',
    'now really... get on with it',
    ``,
  ];

  if (clickedHome === 8)
    for (let i = 0; i < 8; i++) prompt[i] = <>🗑️ {prompt[i]}</>;
  else if (clickedHome > 8) {
    prompt = prompt.slice(9);
  }

  useEffect(() => {
    if (clickedHome === 9) {
      new Audio('/audio/paper-rustle-8.mp3').play();
      setClickedHome(0);
    }
  }, [clickedHome]);

  const info = (
    <>
      <h2>
        <span className='name'>
          {name}{' '}
          {link && (
            <div className={'click-to-see'}>
              <span className='material-icons arrow'>south_west</span>{' '}
              <span className={'text'}>
                {prompt
                  .slice(0, link === '/' ? clickedHome + 1 : 1)
                  .map((s, i) => {
                    return (
                      <div key={i} className={'bubble'}>
                        {s}
                      </div>
                    );
                  })}
              </span>
            </div>
          )}
        </span>
      </h2>
      <h3>{title}</h3>
    </>
  );

  const onClick = (e) => {
    if (e.currentTarget.attributes.href.nodeValue === '/') {
      setClickedHome(clickedHome + 1);
      e.preventDefault();
      return false;
    }
  };

  return (
    <div style={{opacity: showing ? 1 : 0}} className={`recommendation`}>
      <img src={profileImage} alt='' />
      <div>
        {link ? (
          <a onClick={onClick} href={link} target={'_blank'}>
            {info}
          </a>
        ) : (
          info
        )}
      </div>
      <q style={{opacity: link !== '/' || clickedHome === 0 ? 1 : 0}}>{text}</q>
    </div>
  );
};

const Caurosel = ({}) => {
  const [showingIndex, setShowingIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [clickedHome, setClickedHome] = useState(0);

  let children = recommendations.map((recommendation, i) => {
    return (
      <Tile
        showing={showingIndex === i}
        key={i}
        {...recommendation}
        clickedHome={clickedHome}
        setClickedHome={setClickedHome}
      />
    );
  });

  const goLeft = (e) => {
    setDirection(-1);
    setShowingIndex(
      showingIndex === 0 ? children.length - 1 : showingIndex - 1
    );
  };

  const goRight = (e) => {
    setDirection(1);
    setShowingIndex(
      showingIndex === children.length - 1 ? 0 : showingIndex + 1
    );
  };

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
        <h1>Recommendations</h1>
        <Caurosel />
      </section>
    </>
  );
};
