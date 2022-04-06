import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  CountUp from 'react-countup';
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Stat extends Component {
  render() {
    return (
      <div class="container-fluid stats">
        <div class="row m-5 counter">
              <div class="col-lg-4 col-md-6 col-sm-12 column">         
              <h2>No of Users</h2>
                <div className="icon">
                   <i className="fa fa-users"></i>
                </div>
                <div class="counter">
                  <CountUp begin={0} end={10000} duration={5} /><span>+</span>
                </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 column">         
                <h2>Transactions/day</h2>
                <div className="icon">
                   <i className="fa fa-bank"></i>
                </div>
                <div class="counter">
                  <CountUp begin={0} end={5000} duration={3} /><span>+</span>
                </div>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12 column text-center">         
              <h2>Avg Rating</h2>
                <div className="icon1">
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star checked"></i>
                <i className="fa fa-star"></i>
              </div>
              <div class="counter">
                  <CountUp begin={0} end={4} duration={5} /><span>+</span>
                </div>
          </div>
        </div>
      </div>
    );
  }
}