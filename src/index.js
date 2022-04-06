import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Transactions from './Transactions';
import Blog from './blogs'
// import Navbar from './navbar'
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Footer from './footer.js';
// import Transactions from './Transactions';
import Navbar from './navbar';
ReactDOM.render(
  <div><Navbar/><Blog/><Footer /></div>,
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
