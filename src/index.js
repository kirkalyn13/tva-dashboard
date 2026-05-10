import React from 'react';
import ReactDOM from 'react-dom';
import ApexCharts from 'apexcharts'
import PropTypes from 'prop-types'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.React = React
window.ReactDOM = ReactDOM
window.ApexCharts = ApexCharts
window.PropTypes = PropTypes

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
