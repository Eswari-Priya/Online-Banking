import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
export default class Register extends Component {
    onsubmit=(e)=>{
        e.preventDefault();
        var acc_no = document.getElementById("acc_no").value
        var ifsc_code = document.getElementById("ifsc_code").value
        var cIF_no = document.getElementById("CIF_no").value
        var mobile = document.getElementById("mobile").value
        var Email = document.getElementById("Email").value
        var username = document.getElementById("Username").value
        var password = document.getElementById("password").value
        var obj = {
            Acc_no:acc_no,
            Ifsc_code:ifsc_code,
            CIF_no:cIF_no,
            Mobile:mobile,
            Emailid:Email,
            Username:username,
            Password:password
        }
        Axios.post("http://localhost:3001/newuser",obj)
        .then(data=>{console.log(data);window.alert("Your online banking account is created. You can head to login page")})
        .catch(err=>{window.alert("The details given aren't correct. Make sure you give the right details and try again!")})
    }
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
                <div className='text-center mb-2 mt-3'>
                    <button className='btn btn-info' type='submit' onClick={this.onsubmit}>Submit</button>
                    </div>
               </form>
               </div>
            </div>
            </div>
        );
    }
}
