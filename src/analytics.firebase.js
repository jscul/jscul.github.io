import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDu7qLjsnCgo3q4FuPBereaMw3hJD_WrhY',
  authDomain: 'jscul-github-io.firebaseapp.com',
  projectId: 'jscul-github-io',
  storageBucket: 'jscul-github-io.appspot.com',
  messagingSenderId: '812855560152',
  appId: '1:812855560152:web:3c0401a0e3ef082a7c94ad',
  measurementId: 'G-KGQSFPTBKE',
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
export default analytics;

// analytics.logEvent('test_event');
