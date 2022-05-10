import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Swipe from "./swipe";
import Swipemd from './swipemd';
import Swipesm from './swipesm';
import Swipevs from './swipevs';




class Slider extends Component {
  render() {
    return (
      <div>
        <section className='d-lg-block d-none p-4 m-3 bg-transparent'>
          <Swipe />
        </section>
        <section className='d-md-block d-lg-none d-none p-4 m-3 bg-transparent'>
          <Swipemd />
        </section>
        <section className='d-none d-sm-block d-md-none p-4 m-5 bg-transparent'>
          <Swipesm />
        </section>
        <section className='d-sm-none p-4 m-5 bg-transparent'>
          <Swipevs />
        </section>
      </div>
    );
  }
}

export default Slider;
