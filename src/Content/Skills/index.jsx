import React, {useState, useRef, useEffect} from 'react';

import {NavLink, Route} from 'react-router-dom';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

import logos from './logos';

import './style.scss';
import LocalLink from 'components/LocalLink';

const SelectedElement = ({history, match}) => {
  const {page, skill} = match.params;

  // get skill from localStorage
  const [id, setId] = useState(localStorage.getItem('skill') || skill);
  const [description, setDescription] = useState('');

  let logo = logos.find((value) => id === value.id);
  if (!logo) logo = logos[0];

  // save current skill
  localStorage.setItem('skill', logo.id);

  useEffect(() => {
    if (page === 'about' && skill) setId(skill);
  }, [page, skill]);

  useEffect(() => {
    fetch(`/descriptions/${logo.id}.md`).then(
      (data) =>
        data.status === 200 &&
        data.text().then((md) => {
          setDescription(md);
        })
    );
  }, [logo]);

  return (
    <div className={'skill-description'} id={'skill-description'}>
      <div className={'skill-logo'}>
        {Array.isArray(logo.src) ? (
          logo.src.map((src, i) => <img key={src} src={src} alt='' />)
        ) : (
          <img key={logo.src} src={logo.src} alt='' />
        )}
      </div>
      <ReactMarkdownWithHtml
        allowDangerousHtml
        renderers={{
          link: ({href, children, node}) => {
            return href.startsWith('/') ? (
              <LocalLink
                className={'local-link'}
                find={href.slice(1).split('/').join('-') + '-page'}
                to={href}
                draggable={false}>
                {children}
              </LocalLink>
            ) : (
              <a href={href} target={'_blank'}>
                {children}
              </a>
            );
          },
        }}
        className={`${logo.id} description`}>
        {description}
      </ReactMarkdownWithHtml>
    </div>
  );
};

export default ({section, history}) => {
  return (
    <>
      <section id={`skills-page`} className={'page scroll-offset'}>
        <h1>Skills</h1>
        <div className='skills' id='skills'>
          <div className={'skills-section'}>
            <div className={'title'}>Languages</div>
            <LocalLink
              draggable={false}
              to={'/about/javascript'}
              className={'item clickable'}>
              <span id={'about-javascript'}>JavaScript (ES6+)</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/python'}
              className={'item clickable'}>
              <span id={'about-python'}>Python</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/html'}
              className={'item clickable'}>
              <span id={'about-html'}>HTML</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/scss'}
              className={'item clickable'}>
              <span id={'about-scss'}>(S)CSS</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/sql'}
              className={'item clickable'}>
              <span id={'about-sql'}>MySQL/PostgreSQL</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/mongodb'}
              className={'item clickable'}>
              <span
                id={'about-mongodb'}
                title={"I know MongoDB isn't a language."}>
                MongoDB
              </span>
            </LocalLink>
          </div>

          <div className={'skills-section'}>
            <div className={'title'}>Frameworks & Libraries</div>
            <LocalLink
              draggable={false}
              to={'/about/react'}
              className={'item clickable'}>
              <span id='about-react' title={'❤️'}>
                React
              </span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/nodejs'}
              className={'item clickable'}>
              <span id='about-nodejs'>Node.js & Express</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/flask'}
              className={'item clickable'}>
              <span id='about-flask'>Flask</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/graphql'}
              className={'item clickable'}>
              <span id='about-graphql'>GraphQL & Apollo</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/messaging'}
              className={'item clickable'}>
              <span id='about-messaging'>Firebase/Twilio</span>
            </LocalLink>
          </div>
          <div className={'skills-section'}>
            <div className={'title'}>Tools</div>
            <div className={'item'}>
              <LocalLink
                draggable={false}
                to={'/about/aws'}
                className={'item clickable'}>
                <span id='about-aws'>AWS (EB/RDS/S3)</span>
              </LocalLink>
            </div>
            <LocalLink
              draggable={false}
              to={'/about/npm'}
              className={'item clickable'}>
              <span id='about-npm'>npm & yarn</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/docker'}
              className={'item clickable'}>
              <span id='about-docker'>docker[-compose]</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/postman'}
              className={'item clickable'}>
              <span id='about-postman'>Postman</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/git'}
              className={'item clickable'}>
              <span id='about-git'>Git & GitHub</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/vscode'}
              className={'item clickable'}>
              <span id='about-vscode'>VS Code</span>
            </LocalLink>
            <LocalLink
              draggable={false}
              to={'/about/linux'}
              className={'item clickable'}>
              <span id='about-linux'>Linux</span>
            </LocalLink>
          </div>
        </div>

        <Route path={'/:page?/:skill?'} component={SelectedElement} />
      </section>

      {/* <a
          className={'download-resume'}
          download={true}
          href='https://docs.google.com/document/d/1ik1XvZifJBw2v4Guut3EJO90E0HuzFzzuQuY-fDvXc4/export?format=pdf'>
          Download resume 📄
        </a> */}
    </>
  );
};