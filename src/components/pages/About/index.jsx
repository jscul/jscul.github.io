import React, {useState, useRef, useEffect} from 'react';

import {NavLink} from 'react-router-dom';

import logos from '../../../assets/images/logos';

import './style.scss';

export default ({section}) => {
  const [hoveringOn, setHoveringOn] = useState(false);
  const scrollableLogos = useRef(null);

  const [autoscroll, setAutoscroll] = useState(true);
  const [seenNodes, setSeenNodes] = useState([]);

  useEffect(() => {
    if (seenNodes.length === 0) {
      const nodes = [...document.querySelectorAll('.clickable')].map(
        node => node.id
      );
      setSeenNodes(nodes);
    }
  }, [seenNodes]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoscroll) return clearInterval(interval);
      if (seenNodes.length === 0) return;
      const id = seenNodes[0];
      onClick({target: {id}}, false);
      setSeenNodes(seenNodes.slice(1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [autoscroll, seenNodes]);

  const onClick = (e, shouldClearAutoscroll = true) => {
    const logo = document.getElementById(
      `${e.target.id || e.target.parentNode.id}-logo`
    );
    if (logo)
      logo.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    if (shouldClearAutoscroll) setAutoscroll(false);
    setHoveringOn(e.target.id || e.target.firstChild.target);
  };

  return (
    <>
      <div className={'center-content'}>
        <p>
          Hello! I'm John, a software developer based out of Los Angeles, CA.
        </p>
        <p>
          I have 4+ years of extensive professional experience and collaborate
          with designers, R&D teams, and other developers to create{' '}
          <i>pixel-perfect design</i> coupled with <i>robust servers</i>,{' '}
          <i>microservices</i>, and <i>serverless</i> to meet client objectives,
          client needs, and data strategy objectives.
        </p>
        <p>
          Currently programming at{' '}
          <a href='https://www.dogtownmedia.com/' target={'_blank'}>
            Dogtown Media
          </a>
          .
        </p>
      </div>

      <div className={'skills-section'}>
        <div className={'title'}>Languages</div>
        <div className={'item clickable'} id={'javascript'} onClick={onClick}>
          JavaScript (ES6)
        </div>
        <div className={'item clickable'} id={'python'} onClick={onClick}>
          Python
        </div>
        <div className={'item clickable'} id={'html'} onClick={onClick}>
          HTML
        </div>
        <div className={'item'}>
          <span id={'css'} className={'clickable'} onClick={onClick}>
            CSS
          </span>{' '}
          /{' '}
          <span id={'scss'} className={'clickable'} onClick={onClick}>
            Sass
          </span>
        </div>
        <div className={'item clickable'} id={'sql'} onClick={onClick}>
          SQL
        </div>
        <div className={'item clickable'} id={'mongodb'} onClick={onClick}>
          <span title={"I know MongoDB isn't a language."}>MongoDB</span>
        </div>
      </div>
      <div className={'skills-section'}>
        <div className={'title'}>Frameworks</div>
        <div className={'item'} title={'❤️'}>
          <span id={'react'} className={'clickable'} onClick={onClick}>
            React
          </span>{' '}
          /{' '}
          <span id={'redux'} className={'clickable'} onClick={onClick}>
            Redux
          </span>
        </div>
        <div className={'item clickable'} id={'nodejs'} onClick={onClick}>
          Node.js
        </div>
        <div className={'item clickable'} id={'graphql'} onClick={onClick}>
          GraphQL
        </div>
        <div className={'item clickable'} id={'firebase'} onClick={onClick}>
          Firebase
        </div>
        <div className={'item clickable'} id={'flask'} onClick={onClick}>
          Flask
        </div>
      </div>
      <div className={'skills-section'}>
        <div className={'title'}>Tools</div>
        <div className={'item'}>
          <span id={'aws'} className={'clickable'} onClick={onClick}>
            AWS
          </span>{' '}
          (
          <span id={'s3'} className={'clickable'} onClick={onClick}>
            S3
          </span>
          /
          <span id={'rds'} className={'clickable'} onClick={onClick}>
            RDS
          </span>
          /
          <span id={'eb'} className={'clickable'} onClick={onClick}>
            EB
          </span>
          )
        </div>
        <div className={'item clickable'} id={'docker'} onClick={onClick}>
          Docker
        </div>
        <div className={'item clickable'} id={'postman'} onClick={onClick}>
          Postman
        </div>
        <div className={'item'}>
          <span id={'git'} className={'clickable'} onClick={onClick}>
            Git
          </span>{' '}
          /{' '}
          <span id={'github'} className={'clickable'} onClick={onClick}>
            GitHub
          </span>
        </div>
      </div>

      <div className='fade-in' />
      <div className='logo-images' ref={scrollableLogos}>
        <div />
        {logos.map(({src, id}) => (
          <div
            id={`${id}-logo`}
            className={`${hoveringOn && id === hoveringOn ? 'selected' : ''}`}>
            <img src={src} alt='' />
          </div>
        ))}
        <div />
      </div>

      <a
        className={'download-resume'}
        download={true}
        href='https://docs.google.com/document/d/1ik1XvZifJBw2v4Guut3EJO90E0HuzFzzuQuY-fDvXc4/export?format=pdf'>
        Download resume 📄
      </a>
    </>
  );
};
