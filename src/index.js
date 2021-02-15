import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

import {HashRouter as Router, Route} from 'react-router-dom';

console.log(` {o,o}
./)_)
  " "  do you like global vars? Y/N`);

Object.defineProperty(window, 'Y', {
  get: function () {
    console.log('%c INITIALIZING SEQUENCE ', 'background:yellow;color:#222');
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey='6Lfi1VYaAAAAAMUM5HJMLqnTDXFR0T3euDebSZTj'
      theme='dark'
      // useRecaptchaNet='[optional_boolean_value]'
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}>
      <Router>
        <Route path={'/'} component={App} />
      </Router>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
