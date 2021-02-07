import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {HashRouter as Router, Route} from 'react-router-dom';

const accessToken = 'YOUR_ACCESS_TOKEN';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path={'/'} component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
