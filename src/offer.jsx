import React,{ Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';


class Offer extends Component {
    render()
    {
        return (
            <div className="card m-4 p-4 bg-transparent">
                <h2 className="welcome-head text-center">
          Enjoy the best benefits with NESLA savings bank account
        </h2>
        <div className="container m-4">
          <div className="row d-flex justify-content-between">
            <div className="bg-transparent col-12 col-sm-6 col-md-3 col-lg-3 p-2">
              <div className="card card-bg">
                <h2>8%</h2> <span>interest rate* p.a.</span>
              </div>
            </div>
            <div className=" bg-transparent col-12 col-sm-6 col-md-3 col-lg-3 p-2">
              <div className="card card-bg">
                <h2>₹2Cr</h2> <span>Air Accidental Insurance Cover</span>
              </div>
            </div>
            <div className="bg-transparent col-12 col-sm-6 col-md-3 col-lg-3 p-2">
              <div className="card card-bg">
                <h2>₹40L</h2> <span>Personal Accidental Insurance Cover</span>
              </div>
            </div>
            <div className="bg-transparent col-12 col-sm-6 col-md-3 col-lg-3 p-2">
              <div className="card card-bg">
                <h2>₹500</h2>
                <span>Cashback on your first debit card transaction*</span>
              </div>
            </div>
            <div className="mt-4 p-2 text-center">
              <button className="btn btn-primary">Know more..</button>
            </div>
          </div>
            </div>
            </div>
        );
    }
}

export default Offer;