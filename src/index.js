import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/Styles.css'
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALBbhfZc3lOLDU26gxPmiCoQCkPcNCZyk",
  authDomain: "radiadoresgm-13a43.firebaseapp.com",
  projectId: "radiadoresgm-13a43",
  storageBucket: "radiadoresgm-13a43.appspot.com",
  messagingSenderId: "179592283999",
  appId: "1:179592283999:web:2d2dbc659d17ebd4c358ea",
  measurementId: "G-DW7QVRBMR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
