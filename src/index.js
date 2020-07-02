import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOzKz8YIbGAW4yI3pQf4gjDFwAGxnTdiQ",
  authDomain: "cart-ca0e2.firebaseapp.com",
  databaseURL: "https://cart-ca0e2.firebaseio.com",
  projectId: "cart-ca0e2",
  storageBucket: "cart-ca0e2.appspot.com",
  messagingSenderId: "22201687135",
  appId: "1:22201687135:web:b2b4e04734fe01e8468fea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

