import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import contactUs from './contactus.png'
import Axios from 'axios';

class Contactus extends Component
{
    onsubmit=(e)=>{
        e.preventDefault();
       
        var firstName = document.getElementById("FirstName").value
        var lastName = document.getElementById("LastName").value
        var mobileNumber = document.getElementById("Mobile").value
        var emailid = document.getElementById("EmailId").value
        var msg = document.getElementById("Message").value
        
        Axios.post("http://localhost:3001/contactUs",{FirstName:firstName, LastName:lastName, MobileNumber: mobileNumber, Emailid:emailid, message:msg})
        .then(data=>{window.alert("Successfully took your input. You will hear back from one of our company executive soon! Thank you for your response");window.location.reload(false)})
        .catch(err=>{window.alert("Make sure you didn't leave email field empty or hadn't filed any previous requests and try again!")})
    }
    render()
    {
        return (
            <div className='container-fluid contactUsBg mb-4 pt-2'>
                <h1 className='welcome-head text-center pb-4'>Contact Us</h1>
                <div className='row d-flex justify-content-between p-5 pt-2'>
                    
                    <div className='col-6'>
                        <div className='bg-transparent pb-3 h-100'>
                            <form>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="FirstName">First Name</label>
                                    <input className='form-control' id='FirstName' type="text"></input>
                                </div>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="LastName">Last Name</label>
                                    <input className='form-control' id='LastName' type="text"></input>
                                </div>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="Mobile">Mobile number</label>
                                    <input className='form-control' id='Mobile' type="tel" placeholder='1234567890'></input>
                                </div>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="EmailId">Email Id</label>
                                    <input className='form-control' id='EmailId' type="email" placeholder='abc@gmail.com'></input>
                                </div>
                                <div className='form-group m-2'> 
                                    <label className='text-dark' for="Message">Message</label>
                                    <textarea className='form-control' id='Message' placeholder='Type here' type="text"></textarea>
                                </div>
                                <div className='text-center mb-2 mt-3'>
                                <button className='btn btn-info' onClick={this.onsubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-5'>
                        <div>
                        <h2 className='welcome-head text-center'>Get in touch with us</h2>
                        <p className='text-center'>Let us know how we can help and set up a time to chat with us</p>
                        </div>
                        <div>
                            <img src={contactUs} alt="contact us form" width="450" height="450"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contactus;