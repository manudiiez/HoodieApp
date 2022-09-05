import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { BrowserRouter } from 'react-router-dom';
/* -------------------------------- FIREBASE -------------------------------- */
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCW9mkWLBLw37DuJCPcsmgOGcVqd4WhuKw",
  authDomain: "coderhouse-ecommerce-237e0.firebaseapp.com",
  projectId: "coderhouse-ecommerce-237e0",
  storageBucket: "coderhouse-ecommerce-237e0.appspot.com",
  messagingSenderId: "889882184272",
  appId: "1:889882184272:web:894281c904232249a01f55"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='HoodieApp/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


