import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';
// import Transactions from './Transactions';
import Blog from './HomePage/Blogs/blogs'
import Newreg from './acc_create/acc_create';
import Login from './login/login';
import Complaints from './complaints/complaints'
import Contactus from './contact_us/contactus';
// import App from './App';
import Service from './services/service'
import Compliment from './compliments/compliment';
import Compliment1 from './compliments/compliments1';
import Register from './user_registeration/register'
import Footer from './HomePage/Footer/footer.js';
import Transactions from './UserPage/TransactionHistory/Transactions';
import Slider from './slider/slider';
import Offer from './offer/offer';
import Car1 from './carousel/carousel1'; 
import Stat from './stat/stat';
import Header from './navbar/navbar';

class Home extends Component{
    render()
    {
        return (
            // <BrowserRouter>
                <div>
                    {/* <Header/> */}
                    <Car1/>
                    <div className="body mt-5">
                        <h1 className="welcome-head text-center">Welcome to our bank</h1>
                        <div>
                            <Slider />
                        </div>
                        <div>
                            <Offer />
                        </div>
                    </div>
                    <Stat/>
                    <Blog/>
                    <Footer />
                    {/* <Login />
                    <Newreg />
                    <Compliment />
                    <Compliment1 />
                    <Register />
                    <Service/>
                    <Complaints/>
                    <Contactus/> */}
                </div>
                /* <Route path="/" component={Complaints} exact />
                <Route path="/newreg" component={Newreg} />
                <Route path="/login" component={Login} /> 
             </BrowserRouter>  */
        );
    }
}

export default Home;