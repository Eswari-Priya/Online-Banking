import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Register extends Component {
    render() { 
        return (
            <div class="container-fluid bg-primary form">
            <div class="row border-dark">
                <div class="col-12">
               <form>
                <h3 class="user">User Registeration Form</h3>
                <label class="register" for="acc_no">Account Number:</label><br/>
                <input type="text" id="acc_no" name="acc_no"/><br/>
                <label class="register" for="ifsc_code">IFSC code:</label><br/>
                <input type="text" id="ifsc_code" name="ifsc_code"/><br/>
                <label class="register" for="CIF_no">CIF Number:</label><br/>
                <input type="text" id="CIF_no" name="CIF_no"/><br/>
                <label class="register" for="mobile">Registered Mobile No:</label><br/>
                <input type="tel" id="mobile" name="mobile"/><br/>
                <label class="register" for="Email">Registered Email:</label><br/>
                <input type="email" id="Email" name="Email"/><br/>
                <label class="register" for="username">Username:</label><br/>
                <input type="text" id="Username" name="Username"/><br/>
                <label class="register" for="password">password:</label><br/>
                <input type="password" id="password" name="password"/><br/>
               </form>
               </div>
            </div>
            </div>
        );
    }
}
