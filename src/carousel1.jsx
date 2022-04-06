import React, { Component } from "react";
import ReactDOM from "react-dom";
import './style.css'
import pic from './credit.jpg';
import pic3 from './online.jpg';
import pic1 from './banking.jpg';
import pic4 from './digital.jpg';
import pic5 from './transactions.jpg';
import pic2 from './uses.jpg';
import pic6 from './personal.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css'
export default class Car1 extends Component {
  render() {
    return (
      <Carousel className="item" variant="dark">
        <Carousel.Item interval={1500} className="image">
          <img
            className="d-block w-100 head"
            src={pic4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 head"
            src={pic1}
            alt="First slide"cd 
          />
        </Carousel.Item>
        {/* <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 head"
            src={pic2}
            alt="First slide"
          />
        </Carousel.Item> */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 head"
            src={pic3}
            alt="First slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 head"
            src={pic6}
            alt="Second slide"
          /> */}
        {/* </Carousel.Item> */}
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 head"
            src= {pic} alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}