import React, {PureComponent, useState, useRef, useEffect} from 'react';

import {NavLink, Route} from 'react-router-dom';
import LocalLink from 'components/LocalLink';

import ReactMarkdownWithHtml from 'react-markdown/with-html';

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/dracula.css';
import javascript from 'highlight.js/lib/languages/javascript';

import skills, {sections} from './sections';
import logos from 'assets/skills';

import './style.scss';

hljs.registerLanguage('javascript', javascript);

class _Logo extends PureComponent {
  render() {
    const {id, src, link, hovering, onMouseOver, onMouseOut} = this.props;
    const img = (
      <img
        onMouseOver={() => {
          onMouseOver([id]);
        }}
        onMouseOut={onMouseOut}
        src={src}
        alt=''
        className={hovering ? 'hovering' : ''}
      />
    );
    if (link)
      return (
        <a
          onMouseOver={() => {
            onMouseOver([id]);
          }}
          onMouseOut={onMouseOut}
          href={link}
          target={'_blank'}
          className={hovering ? 'hovering' : ''}>
          {img}
        </a>
      );
    else return img;
  }
}

class _SelectedSkill extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      hoveringOn: [],
    };
    this.getDescription = this.getDescription.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  componentDidMount() {
    this.getDescription();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.section.id !== this.props.section.id) this.getDescription();
  }

  onMouseOver(hoveringOn) {
    this.setState({hoveringOn: hoveringOn});
  }

  onMouseOut() {
    this.setState({hoveringOn: []});
  }

  async getDescription() {
    await fetch(`/descriptions/${this.props.section.id}.md`).then(
      (data) =>
        data.status === 200 &&
        data
          .text()
          .then((description) => this.setState({description, hoveringOn: []}))
    );

    const linksWithClasses = [
      ...this.skillDescription.querySelectorAll('a'),
    ].forEach((a) => {
      if (a.classList.length) {
        if (a.classList.length === 1 && !a.href) {
          const c = a.classList[0];
          if (c in logos && logos[c].link)
            a.setAttribute('href', logos[c].link);
        }
        a.parentElement.addEventListener('mouseover', (e) => {
          this.onMouseOver([...this.state.hoveringOn, ...a.classList]);
          a.classList.add('hovering');
        });
        a.parentElement.addEventListener('mouseout', () => {
          a.classList.remove('hovering');
          this.onMouseOut();
        });
      }
    });
  }

  render() {
    return (
      <>
        <div className={'skill-logo'}>
          {this.props.section.skills.map((props) => (
            <_Logo
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
              key={props.src}
              hovering={this.state.hoveringOn.includes(props.id)}
              {...props}
            />
          ))}
        </div>
        <div
          className={'markdown-container'}
          ref={(r) => (this.skillDescription = r)}>
          <ReactMarkdownWithHtml
            allowDangerousHtml
            renderers={{
              link: ({href, children}) => {
                return href.startsWith('/') ? (
                  <LocalLink
                    className={``}
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
              code: ({language, value, ...props}) => {
                return (
                  <pre>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: hljs.highlightAuto(value).value,
                      }}
                    />
                  </pre>
                );
              },
            }}
            className={`markdown`}>
            {this.state.description}
          </ReactMarkdownWithHtml>
        </div>
      </>
    );
  }
}

const SelectedSkill = ({history, match}) => {
  const {page, skill} = match.params;
  if (page === 'skills') {
    if (skill) {
      localStorage.setItem('skillId', skill);
      return <_SelectedSkill section={sections[skill]} />;
    }
  }
  if (localStorage.getItem('skillId')) {
    return (
      <_SelectedSkill section={sections[localStorage.getItem('skillId')]} />
    );
  }
  return <_SelectedSkill section={sections['js']} />;
};

export default ({section, history}) => {
  return (
    <>
      <section id={`skills-page`} className={'page scroll-offset'}>
        <h1>Skills</h1>
        {Object.keys(skills).map((section, i) => {
          return (
            <div key={i} className={'skills-section'}>
              <div className={'title'}>{section}</div>
              {skills[section].map((skill, j) => (
                <LocalLink
                  key={skill.id}
                  draggable={false}
                  to={`/skills/${skill.id}`}
                  className={'item clickable'}>
                  <span id={`skills-${skill.id}`}>{skill.title}</span>
                </LocalLink>
              ))}
            </div>
          );
        })}
        <Route path={'/:page?/:skill?'} component={SelectedSkill} />
      </section>
    </>
  );
};
