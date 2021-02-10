import firebase from 'firebase/app';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: 'AIzaSyCOAjMGoKIyZFneC9o3IcmLfy9yP2ZebUg',
  authDomain: 'jscul0.firebaseapp.com',
  projectId: 'jscul0',
  storageBucket: 'jscul0.appspot.com',
  messagingSenderId: '310093664041',
  appId: '1:310093664041:web:33f69ad7ffdaea961ff138',
  measurementId: 'G-W0MG7QFQQ4',
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
export default analytics;
