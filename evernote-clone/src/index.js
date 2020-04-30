import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');


const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: "evernote-clone-84a2a.firebaseapp.com",
  databaseURL: "https://evernote-clone-84a2a.firebaseio.com",
  projectId: "evernote-clone-84a2a",
  storageBucket: "evernote-clone-84a2a.appspot.com",
  messagingSenderId: "990588520836",
  appId: "1:990588520836:web:9b3d1f20eb3611e2cf35d1",
  measurementId: "G-FC428RSTJ4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


