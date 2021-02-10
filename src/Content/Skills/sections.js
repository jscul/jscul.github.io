import s from 'assets/skills';

export const sections = {
  js: {
    id: 'js',
    title: 'JavaScript (ES6+)',
    skills: [s.js],
  },
  py: {
    id: 'py',
    title: 'Python',
    skills: [s.py],
  },
  web: {
    id: 'web',
    title: 'HTML & (S)CSS',
    skills: [s.html, s.css, s.scss],
  },
  sql: {
    id: 'sql',
    title: 'MySQL & PostgreSQL',
    skills: [s.sql, s.postgres],
  },
  mongo: {
    id: 'mongo',
    title: 'MongoDB',
    skills: [s.mongodb],
  },
  react: {
    id: 'react',
    title: 'React & Redux',
    skills: [s.react, s.redux, s.reactrouter, s.jsx],
  },
  nodejs: {
    id: 'nodejs',
    title: 'Node.js & Express',
    skills: [s.nodejs, s.express],
  },
  flask: {
    id: 'flask',
    title: 'Flask',
    skills: [s.flask],
  },
  gql: {
    id: 'gql',
    title: 'GraphQL & RESTful',
    skills: [s.graphql, s.restful, s.apollo, s.postman, s.relay],
  },
  services: {
    id: 'services',
    title: 'Firebase & Twilio',
    skills: [s.twilio, s.firebase, s.analytics],
  },
  aws: {
    id: 'aws',
    title: 'AWS (EB/RDS/S3)',
    skills: [s.aws, s.eb, s.rds, s.s3],
  },
  cheats: {
    id: 'cheats',
    title: 'npm & yarn',
    skills: [s.npm, s.yarn],
  },
  docker: {
    id: 'docker',
    title: 'docker[-compose]',
    skills: [s.docker, s.compose],
  },
  git: {
    id: 'git',
    title: 'Git & GitHub',
    skills: [s.github, s.git],
  },
  sudo: {
    id: 'sudo',
    title: 'Linux',
    skills: [s.linux],
  },
};

export default {
  Languages: [
    sections.js,
    sections.web,
    sections.py,
    sections.sql,
    sections.mongo,
  ],
  'Frameworks & Libraries': [
    sections.react,
    sections.nodejs,
    sections.flask,
    sections.gql,
    sections.services,
  ],
  Tools: [
    sections.aws,
    sections.cheats,
    sections.docker,
    sections.git,
    sections.sudo,
  ],
};
