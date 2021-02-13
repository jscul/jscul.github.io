import React, {PureComponent} from 'react';

import {NavLink} from 'react-router-dom';

import lifeguardImg from 'assets/experience/lifeguard.jpg';
import freelanceImg from 'assets/experience/freelance.jpg';
import dogtownmediaImg from 'assets/experience/dogtownmedia.jpg';

import './style.scss';

export default class Experience extends PureComponent {
  render() {
    const {section} = this.props;
    return (
      <>
        <section id={`${section.id}-page`} className={'page scroll-offset'}>
          <div className={'center-content'}>
            <h1>~&gt; Experience ~&gt;</h1>
            <div className='workplace-container'>
              <div className='workplace'>
                <div className={'question-mark'}>?</div>
                <span>&#8212;</span>
                <div>
                  <div className={'name'}>Software Engineer</div>
                  <div className={'info'}>&lt;!-- ? --&gt;, Present - ?</div>
                </div>
              </div>
              <div className='workplace'>
                <img src={dogtownmediaImg} className='circle' />
                <span>&#8212;</span>
                <div>
                  <div className={'name'}>Software Engineer</div>
                  <div className={'info'}>
                    <a href={'https://www.dogtownmedia.com/'} target={'_blank'}>
                      Dogtown Media
                    </a>
                    , June 2018 - Present
                  </div>
                </div>
              </div>
              <div className='workplace'>
                <img src={freelanceImg} className='circle' />
                <span>&#8212;</span>
                <div>
                  <div className={'name'}>Software Developer</div>
                  <div className={'info'}>Freelance, June 2016 - June 2018</div>
                </div>
              </div>
              <div className='workplace'>
                <img src={lifeguardImg} className='circle' />
                <span>&#8212;</span>
                <div>
                  <div className={'name'}>Ocean Lifeguard 🌊</div>
                  <div className={'info'}>
                    <a href={'https://fire.lacounty.gov/'} target={'_blank'}>
                      LACoFD
                    </a>
                    , June 2010 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
