import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './home';
import Newreg from './acc_create/acc_create';
import Login from './login/login';
import Complaints from './complaints/complaints';
import Contactus from './contact_us/contactus';
import Header from './navbar/navbar';
import Register from './user_registeration/register';
import Compliment from './compliments/compliment';
import Service from './services/service';
import Compliment1 from './compliments/compliments1';
class App extends Component{
    render()
    {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account_creation" element={<Newreg/>} />
                <Route path="/new_registration" element={<Register/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/complaints" element={<Complaints />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/compliments" element={<div><Compliment /><Compliment1/></div>} />
                <Route path="/services" element={<Service/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;