import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Transactions from './Transactions';
import Blog from './blogs'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './footer.js';
import Transsactions from './Transactions';
import Car1 from './carousel1'; 
import Stat from './stat';
import Header from './navbar';
ReactDOM.render(
  <div><Header/><Car1/><Stat/><Blog/><Footer /></div>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Transactions />,
//   document.getElementById('root')
// );
// console.log()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
