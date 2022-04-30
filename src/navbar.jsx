import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import '../node_modules/jquery/dist/jquery.min.js';
import './navbar.css';
import 'font-awesome/css/font-awesome.min.css';
export default class Navbar extends Component {
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div className="navbar-brand">
                       <i className="fa fa-globe"></i>
                    <span><a class="brand" href="#">Nesla Bank</a></span>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">New User/Registeration</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Account Creation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Complaints/Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
