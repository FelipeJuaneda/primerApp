import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAmgXYY4oaj6eTpJ2xsbaq-8KfStdQOEl4",
  authDomain: "heladeriaartesanal-18e56.firebaseapp.com",
  projectId: "heladeriaartesanal-18e56",
  storageBucket: "heladeriaartesanal-18e56.appspot.com",
  messagingSenderId: "407982578556",
  appId: "1:407982578556:web:f82e0440bd14d94b5c22f9",
  measurementId: "G-R1FSB22THW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
