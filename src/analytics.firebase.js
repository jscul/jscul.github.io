import firebase from 'firebase/app';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: 'AIzaSyDLWZCpExGFy5hgMAHeKdq3BYKFqYKjl-Y',
  authDomain: 'jscul0.firebaseapp.com',
  projectId: 'jscul0',
  storageBucket: 'jscul0.appspot.com',
  messagingSenderId: '310093664041',
  appId: '1:310093664041:web:c427124448bb61c31ff138',
  measurementId: 'G-BR0RRHRB2X',
};

firebase.initializeApp(firebaseConfig);
export default firebase.analytics();
