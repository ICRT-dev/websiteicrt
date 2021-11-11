import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/tailwind.css';
import reportWebVitals from './reportWebVitals';
import Index from './views/Index'

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
