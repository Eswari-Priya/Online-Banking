import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import pic1 from './Fixed_deposit.jpg'
import pic2 from './customer_care.jpg'
import pic3 from './Business_loan.jpg'
import pic4 from './creditcard_loan.jpg'
import pic5 from './gold_loan.jpg'
import pic6 from './Home_loan.jpg'
import pic7 from './internet_banking.jpg'
import pic8 from './personal_loan.jpg'
import pic9 from './savings_account.jpg'
import pic10 from './vehicle_loan.jpg'
import pic11 from './investment.jpg'
import pic12 from './atm.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './service.css'
export default class Service extends Component {
    render() { 
        return (
            <div class="container-fluid">
                 <div class="row text-center">
                     <h1 class="banking">Banking Services</h1>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic1}/>
                     <h2 class="ser">Fixed deposit</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic2}/>
                     <h2 class="ser">Customer Care</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic3}/>
                     <h2 class="ser">Business Loan</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic4}/>
                     <h2 class="ser">Credit/debit cards</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic5}/>
                     <h2 class="ser">Gold Loan</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic6}/>
                     <h2 class="ser">Home loan</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic7}/>
                     <h2 class="ser">Internet Banking</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic8}/>
                     <h2 class="ser">Personal Loan</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic9}/>
                     <h2 class="ser">Savings/Current account</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic10}/>
                     <h2 class="ser">Vehicle Loan</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic11}/>
                     <h2 class="ser">Investment</h2>
                     </div>
                     <div class="col-sm-12 col-md-4 col-lg-2">
                     <img class="service" src={pic12}/>
                     <h2 class="ser">Atm</h2>
                     </div>
                </div>
            </div>
        );
    }
}
