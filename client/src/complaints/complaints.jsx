import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import complaints from './complaints.png';
import Axios from 'axios';


class Complaints extends Component
{
    onsubmit=(e)=>{
        e.preventDefault();
        var firstName = document.getElementById("FirstName").value
        var lastName = document.getElementById("LastName").value
        var mobileNumber = document.getElementById("Mobile").value
        var emailid = document.getElementById("EmailId").value
        var msg = document.getElementById("Complaint").value
        Axios.post("http://localhost:3001/complaints",{FirstName:firstName, LastName:lastName, MobileNumber: mobileNumber, Emailid:emailid, message:msg})
        .then(data=>{window.alert("We are extremely sorry for the inconvenience. We raised a ticket with the number "+data.data[0].lastind+". Our team is working on resolving your issue. Thank you for your patience!");window.location.reload(false)})
        .catch(err=>{console.log(err);window.alert("Make sure you didn't leave the Emailid field empty and retry!")})
    }
    render()
    {
        return (
            <div className='container-fluid contactUsBg mb-4 pt-2'>
                <h1 className='welcome-head text-center pb-4'>Convey your Problems with Us</h1>
                <div className='row d-flex justify-content-between p-5 pt-2'>
                    
                    <div className='col-12 col-md-6'>
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
                                    <label className='text-dark' for="Complaint">Complaint</label>
                                    <textarea className='form-control' id='Complaint' type="text" placeholder='Type here'></textarea>
                                </div>
                                <div className='text-center mb-2 mt-3'>
                                <button className='btn btn-info' type='submit' onClick={this.onsubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className='col-1'></div> */}
                    <div className='col-12 col-md-6'>
                        <div>
                        
                        <h3 className='welcome-head text-center'>Let us know how we can help you</h3>
                        <p className='text-center'>Get your problem solved with us</p>
                        </div>
                        <div>
                            <img src={complaints} alt="complaint form" width="600" height="450"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Complaints;