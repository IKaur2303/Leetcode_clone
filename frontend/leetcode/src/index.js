
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>);
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();
// Measuring Performance | Create React App
// By default, Create React App includes a performance relayer that allows you to measure and analyze

reportWebVitals()


