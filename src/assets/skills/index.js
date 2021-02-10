import aws from './images/aws.svg';
import nodejs from './images/nodejs.png';
import express from './images/express.png';
import docker from './images/docker.svg';
import compose from './images/compose.png';
import ffmpeg from './images/ffmpeg.svg';
import flask from './images/flask.png';
import git from './images/git.png';
import github from './images/github.svg';
import graphql from './images/graphql.svg';
import apollo from './images/apollo.svg';
import sql from './images/mysql.png';
import css from './images/css.png';
import scss from './images/scss.png';
import postgres from './images/postgres.svg';
import python from './images/python.svg';
import html from './images/html.png';
import react from './images/react.png';
import reactrouter from './images/reactrouter.png';
import rds from './images/rds.png';
import s3 from './images/s3.png';
import eb from './images/eb.png';
import firebase from './images/firebase.png';
import redux from './images/redux.svg';
import vscode from './images/vscode.svg';
import javascript from './images/javascript.png';
import twilio from './images/twilio.png';
import analytics from './images/analytics.svg';
import mongodb from './images/mongodb.png';
import yarn from './images/yarn.png';
import npm from './images/npm.png';
import linux from './images/ubuntu.png';
import jsx from './images/jsx.png';
import rest from './images/rest.svg';
import postman from './images/postman.png';
import relay from './images/relay.png';

// TODO flatten this list
export default {
  aws: {
    id: 'aws',
    src: aws,
    link: 'https://docs.aws.amazon.com/',
  },
  eb: {
    id: 'eb',
    src: eb,
    link: 'https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html',
  },
  rds: {
    id: 'rds',
    src: rds,
    link: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html',
  },
  s3: {
    id: 's3',
    src: s3,
    link: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',
  },
  nodejs: {
    id: 'nodejs',
    src: nodejs,
    link: 'https://nodejs.org/en/',
  },
  express: {
    id: 'express',
    src: express,
    link: 'https://expressjs.com/en/guide/routing.html',
  },
  docker: {
    id: 'docker',
    src: docker,
    link: 'https://www.docker.com/',
  },
  compose: {
    id: 'compose',
    src: compose,
    link: 'https://docs.docker.com/compose/',
  },
  ffmpeg: {id: 'ffmpeg', src: ffmpeg, link: 'https://ffmpeg.org/'},
  flask: {
    id: 'flask',
    src: flask,
    link: 'https://flask.palletsprojects.com/en/1.1.x/',
  },
  github: {
    id: 'github',
    src: github,
    link: 'https://github.com/jscul',
  },
  git: {id: 'git', src: git, link: 'https://git-scm.com/about'},
  graphql: {
    id: 'graphql',
    src: graphql,
    link: 'https://graphql.org/code/',
  },
  restful: {id: 'restful', src: rest, link: 'https://restfulapi.net/'},
  apollo: {
    id: 'apollo',
    src: apollo,
    link: 'https://www.apollographql.com/docs/tutorial/introduction/',
  },
  postman: {
    id: 'postman',
    src: postman,
    link: 'https://www.postman.com/use-cases/application-development/',
  },
  relay: {
    id: 'relay',
    src: relay,
    link: 'https://www.apollographql.com/docs/tutorial/introduction/',
  },
  sql: {
    id: 'sql',
    src: sql,
    link: 'https://www.mysqltutorial.org/basic-mysql-tutorial.aspx',
  },
  postgres: {
    id: 'postgres',
    src: postgres,
    link: 'https://www.postgresqltutorial.com/',
  },
  py: {
    id: 'python',
    src: python,
    link: 'https://docs.python.org/3/tutorial/',
  },
  html: {
    id: 'html',
    src: html,
    link: 'https://www.w3schools.com/html/',
  },
  css: {id: 'css', src: css, link: 'https://www.w3schools.com/css/'},
  scss: {id: 'scss', src: scss, link: 'https://sass-lang.com/guide'},
  react: {
    id: 'react',
    src: react,
    link: 'https://reactjs.org/',
  },
  redux: {
    id: 'redux',
    src: redux,
    link: 'https://redux.js.org/tutorials/fundamentals/part-1-overview',
  },
  reactrouter: {
    id: 'reactrouter',
    src: reactrouter,
    link: 'https://reactrouter.com/',
  },
  jsx: {
    id: 'jsx',
    src: jsx,
    link: 'https://reactjs.org/docs/introducing-jsx.html',
  },
  twilio: {
    id: 'twilio',
    src: twilio,
    link: 'https://www.twilio.com/docs/sms',
  },
  firebase: {
    id: 'firebase',
    src: firebase,
    link: 'https://firebase.google.com/docs',
  },
  analytics: {
    id: 'analytics',
    src: analytics,
    link: 'https://firebase.google.com/docs/analytics',
  },
  vscode: {id: 'vscode', src: vscode, link: 'https://code.visualstudio.com/'},
  js: {
    id: 'js',
    src: javascript,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  mongodb: {id: 'mongodb', src: mongodb, link: 'https://docs.mongodb.com/'},
  npm: {
    id: 'npm',
    src: npm,
    link: 'https://docs.npmjs.com/',
  },
  yarn: {id: 'yarn', src: yarn, link: 'https://classic.yarnpkg.com/en/docs/'},
  linux: {id: 'linux', src: linux, link: 'https://ubuntu.com/download/desktop'},
};
