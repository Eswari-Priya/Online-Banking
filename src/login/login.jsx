import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component{
    render()
    {
        return (
            <div className='login_bg text-center d-inline-block container-fluid align-middle pt-5'>
                <div className='row'>
                    <h1>Welcome to Nesla Bank</h1>
                    <p>Your choice our priority</p>
                </div>
                <div >
                    {/* <div className='col-5'></div> */}
                    <div className='border border-dark'> 
                <img className='userIcon' src="https://ps.w.org/userswp/assets/icon-128x128.png?rev=2183166" />
                </div>
                </div>
                <div className='row mt-5 align-middle'>
                    <div className='d-none d-md-block col-md-4'></div>
                    <div className='col-12 col-md-4 card p-4 bg-light bg-opacity-25'>
                        <div>
                            <form>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="Email">Registered Email Address</label>
                                    <input className='form-control' id='Email' type="email"></input>
                                </div>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="Password">Password</label>
                                    <input className='form-control' id='Password' type="password"></input>
                                </div>
                                <div className='text-center mb-2 mt-3'>
                                    <button className='btn btn-primary' type='submit'>Login</button>
                                </div>
                                <a className='text-left'><span className='text-danger'>Forgot Password?</span></a>
                            </form>
                        </div>
                        <div>
                            <h5 className='text-dark'>New User? <a className='text-info'>Sign Up here</a></h5>
                        </div>
                    </div>
                    <div className='d-none d-md-block col-md-4'></div>
                </div>
            </div>
        );
    }
}

export default Login;