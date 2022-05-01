import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Transactions from './Transactions';
import Blog from './HomePage/Blogs/blogs'
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Footer from './HomePage/Footer/footer.js';
import Transactions from './UserPage/TransactionHistory/Transactions';
import Slider from './slider';
import Offer from './offer';
import Car1 from './carousel1'; 
import Stat from './stat';
import Header from './navbar';
ReactDOM.render(
  <div><Header/><Car1/><div className="body mt-5">
  <h1 className="welcome-head text-center">Welcome to our bank</h1>
  <div>
    <Slider />
  </div>
  <div>
    <Offer />
  </div></div><Stat/><Blog/><Footer /></div>,
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
