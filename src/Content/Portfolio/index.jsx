import {NavLink} from 'react-router-dom';

import projects from 'assets/projects';

import './style.scss';

const Android = (props) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 32 32'
      height='1em'
      width='1em'
      {...props}>
      <path d='M6.802 20.283c0 1.23-0.857 2.237-1.904 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.904 1.007 1.904 2.237v7.321zM29.007 20.283c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.905 1.007 1.905 2.237v7.321zM20.164 3.649l1.222-2.193c0.1-0.179 0.070-0.388-0.065-0.463s-0.329 0.009-0.428 0.188l-1.25 2.244c-1.115-0.439-2.364-0.684-3.684-0.684-1.33 0-2.588 0.25-3.71 0.695l-1.256-2.254c-0.1-0.179-0.293-0.264-0.428-0.188s-0.165 0.284-0.065 0.463l1.228 2.204c-2.555 1.2-4.276 3.453-4.276 6.035 0 0.262 0.019 0.521 0.053 0.776h16.909c0.035-0.255 0.053-0.513 0.053-0.776 0-2.59-1.732-4.849-4.301-6.046zM12.097 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM19.861 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM7.45 11.211v12.471h0.007c0.087 1.053 1.056 1.89 2.23 1.89h12.541c1.173 0 2.142-0.837 2.23-1.89h0.007v-12.471h-17.014zM14.74 25.51v3.858c0 1.23-0.857 2.237-1.905 2.237s-1.904-1.007-1.904-2.237v-3.855zM21.088 25.508v3.86c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.007-1.905-2.237v-3.86z' />
    </svg>
  );
};

const Apple = (props) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 16 16'
      height='1em'
      width='1em'
      {...props}>
      <path d='M12.367 8.501c-0.020-2.026 1.652-2.998 1.727-3.046-0.94-1.375-2.404-1.564-2.926-1.585-1.246-0.126-2.431 0.734-3.064 0.734-0.631 0-1.607-0.715-2.64-0.696-1.358 0.020-2.61 0.79-3.31 2.006-1.411 2.448-0.361 6.076 1.014 8.061 0.672 0.972 1.473 2.064 2.525 2.025 1.013-0.040 1.396-0.656 2.621-0.656s1.569 0.656 2.641 0.635c1.090-0.020 1.781-0.991 2.448-1.966 0.772-1.128 1.089-2.219 1.108-2.275-0.024-0.011-2.126-0.816-2.147-3.236zM10.353 2.555c0.558-0.677 0.935-1.617 0.832-2.555-0.804 0.033-1.779 0.536-2.356 1.212-0.518 0.6-0.971 1.557-0.85 2.476 0.898 0.070 1.815-0.456 2.373-1.132z' />
    </svg>
  );
};

const Web = (props) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      {...props}>
      <g>
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z' />
      </g>
    </svg>
  );
};

const GitHub = (props) => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth={0}
      viewBox='0 0 32 32'
      {...props}>
      <path d='M6.368 15.671h-2.653c-0.068 0-0.124 0.055-0.124 0.124v1.296c0 0.069 0.055 0.124 0.124 0.124h1.035v1.612c0 0-0.232 0.078-0.874 0.078-0.758 0-1.817-0.278-1.817-2.604 0-2.328 1.102-2.634 2.137-2.634 0.896 0 1.282 0.157 1.527 0.234 0.077 0.024 0.147-0.053 0.147-0.122l0.296-1.253c0-0.032-0.011-0.071-0.047-0.097-0.1-0.070-0.708-0.411-2.245-0.411-1.771 0-3.588 0.753-3.588 4.375s2.079 4.16 3.832 4.16c1.451 0 2.332-0.62 2.332-0.62 0.036-0.020 0.040-0.070 0.040-0.093v-4.045c-0.001-0.069-0.056-0.124-0.124-0.124zM19.783 12.327h-1.493c-0.069 0-0.124 0.056-0.124 0.124v2.886h-2.328v-2.886c0-0.069-0.056-0.124-0.123-0.124h-1.494c-0.067 0-0.122 0.056-0.122 0.124v7.814c0 0.069 0.055 0.125 0.122 0.125h1.494c0.068 0 0.123-0.056 0.123-0.125v-3.342h2.328l-0.005 3.342c0 0.069 0.055 0.124 0.122 0.124h1.494c0.069 0 0.122-0.056 0.122-0.124l0.005-7.815c0.001-0.069-0.055-0.124-0.122-0.124zM8.152 12.504c-0.532 0-0.963 0.435-0.963 0.972s0.431 0.973 0.963 0.973 0.963-0.435 0.963-0.973c0-0.537-0.431-0.972-0.963-0.972zM9.009 15.011c0-0.068-0.055-0.125-0.122-0.125h-1.489c-0.070 0-0.129 0.070-0.129 0.139 0 0 0 4.341 0 5.168 0 0.151 0.094 0.197 0.217 0.197 0 0 0.635 0 1.342 0 0.146 0 0.185-0.072 0.185-0.2-0.001-0.277-0.001-1.362-0.001-1.572-0.001-0.2-0.001-3.607-0.001-3.607zM25.564 14.898h-1.482c-0.068 0-0.122 0.056-0.122 0.125v3.831c0 0-0.376 0.277-0.912 0.277-0.534 0-0.677-0.242-0.677-0.767 0-0.523 0-3.342 0-3.342 0-0.069-0.056-0.125-0.123-0.125h-1.503c-0.069 0-0.123 0.056-0.123 0.125 0 0 0 2.040 0 3.595s0.866 1.935 2.057 1.935c0.977 0 1.767-0.54 1.767-0.54s0.037 0.284 0.055 0.317c0.016 0.034 0.060 0.068 0.108 0.068h0.952c0.068 0 0.123-0.056 0.123-0.125l0.004-5.25c-0.003-0.068-0.059-0.124-0.126-0.124zM29.622 14.722c-0.842 0-1.414 0.376-1.414 0.376v-2.646c0-0.069-0.056-0.124-0.122-0.124h-1.499c-0.067 0-0.122 0.056-0.122 0.124l-0.004 7.815c0 0.069 0.056 0.124 0.123 0.124 0 0 1.043 0 1.044 0 0.046 0 0.081-0.024 0.108-0.066s0.063-0.361 0.063-0.361 0.611 0.581 1.771 0.581c1.362 0 2.142-0.691 2.142-3.101-0-2.407-1.247-2.722-2.089-2.722zM29.038 19.126c-0.514-0.016-0.862-0.249-0.862-0.249v-2.476c0 0 0.344-0.211 0.767-0.249 0.534-0.047 1.050 0.114 1.050 1.387-0.003 1.342-0.235 1.607-0.954 1.586zM13.324 19.097c-0.066 0-0.233 0.026-0.405 0.026-0.549 0-0.737-0.256-0.737-0.587 0-0.332 0-2.198 0-2.198h1.121c0.069 0 0.123-0.055 0.123-0.125v-1.204c0.001-0.069-0.054-0.125-0.123-0.125h-1.121l-0.002-1.48c0-0.056-0.030-0.084-0.094-0.084h-1.526c-0.059 0-0.092 0.026-0.092 0.083v1.529c0 0-0.765 0.185-0.817 0.2s-0.088 0.063-0.088 0.119v0.962c0 0.069 0.056 0.125 0.123 0.125h0.782c0 0 0 1.005 0 2.312 0 1.717 1.205 1.886 2.018 1.886 0.371 0 0.815-0.121 0.889-0.147 0.045-0.016 0.070-0.062 0.070-0.111l0.001-1.057c0-0.069-0.058-0.125-0.122-0.125z' />
    </svg>
  );
};

export default ({section}) => {
  return (
    <>
      <section id={`${section.id}-page`} className={'page scroll-offset'}>
        <div className={'center-content'}>
          <ol>
            {Object.keys(projects).map((id, i) => {
              const {
                title,
                skills,
                client: {logo},
                live: {web, android, ios},
                github,
              } = projects[id];

              let links = [];
              if (web)
                links.push(
                  <a target={'_blank'} href={web}>
                    <Web />
                  </a>
                );
              if (android)
                links.push(
                  <a target={'_blank'} href={android}>
                    <Android />
                  </a>
                );
              if (ios)
                links.push(
                  <a target={'_blank'} href={ios}>
                    <Apple />
                  </a>
                );

              const skills2 = skills.length !== 0 && (
                <div className={'skills-used'}>
                  {skills.map((s, i) => s.id)}
                </div>
              );

              return (
                <li key={i}>
                  <div className={'head'}>{title}</div>
                  {logo && <img src={logo} />}
                  {links.length !== 0 && (
                    <div className={'live-links'}>
                      {links.map((link, i) => {
                        return <div key={i}>{link}</div>;
                      })}
                    </div>
                  )}
                  {github && (
                    <div className={'github'}>
                      <a href={github} target={'_blank'}>
                        <GitHub />
                      </a>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
};
