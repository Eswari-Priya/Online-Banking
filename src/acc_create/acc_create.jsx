import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

class Newreg extends Component
{
    render()
    {
        return (
            <div className='newreg_bg container bg-opacity-25'>
                <div className='row text-center'> 
                    <h1>Account Creation Form</h1>
                </div>
                <div className='row'>
                    <div className='d-none d-md-block col-md-3'></div>
                    <div className='col-12 col-md-6'>
                        <form>
                            <div className='form-group m-2'> 
                                <label for="FirstName">First Name<span className='text-danger'>*</span></label>
                                <input className='form-control' id='FirstName' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="LastName">Last Name<span className='text-danger'>*</span></label>
                                <input className='form-control' id='LastName' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Dob">Date of Birth<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Dob' type="date" placeholder='DD-MM-YYYY'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Age">Age<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Age' type="number" placeholder='age'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label  for="Gaurdian">Father/Husband/Gaurdian Name<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Guardian' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label  for="Mother">Mother Name</label>
                                <input className='form-control' id='Mother' type="text"></input>
                            </div>
                            <div className='label form-group m-2'>
                                Gender:<span className='text-danger'>*</span><br/>
                                <input type="radio" id="male" name="gender" value="Male"></input>
                                <label for="male">Male</label><br/>
                                <input type="radio" id="female" name="gender" value="Female"></input>
                                <label for="female">Female</label><br/>
                            </div>
                            <div className='label form-group m-2'>
                                Marital Status:<span className='text-danger'>*</span><br/>
                                <input type="radio" id="married" name="Marital" value="Married"></input>
                                <label for="married">Married</label><br/>
                                <input type="radio" id="unmarried" name="Marital" value="Unmarried"></input>
                                <label for="unmarried">Unmarried</label><br/>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Mobile">Mobile number<span className='text-danger'>*</span></label>
                                mobile<input className='form-control' id='Mobile' type="tel" placeholder='1234567890'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Occupation">Occupation<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Occupation' type="text" placeholder='occupation/education'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="EmailId">Email Id<span className='text-danger'>*</span></label>
                                <input className='form-control' id='EmailId' type="email" placeholder='abc@gmail.com'></input>
                            </div>
                            <div className='label form-group m-2'>
                                Type of Account:<span className='text-danger'>*</span><br/>
                                <input type="radio" id="savings" name="Savings" value="Savings"></input>
                                <label for="savings">Savings Account</label><br/>
                                <input type="radio" id="current" name="Current" value="Current"></input>
                                <label for="current">Current Account</label><br/>
                                <input type="radio" id="business" name="Business" value="Business"></input>
                                <label for="business">Business Account</label><br/>
                                <input type="radio" id="fixed" name="Fixed" value="Fixed"></input>
                                <label for="fixed">Fixed deposit Account</label><br/>
                                <input type="radio" id="loan" name="Loan" value="Loan"></input>
                                <label for="loan">Loan Account</label><br/>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Minbal">Minimum Balance{"("}min Rs.500{")"}<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Minbal' type="number" placeholder='500' min='500'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Aadhar">Aadhar Number<span className='text-danger'>*</span></label>
                                <input className='form-control' id='Aadhar' type="number" placeholder='XXXX-XXXX-XXXX'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="Pan">PAN Number</label>
                                <input className='form-control' id='Pan' type="text" placeholder='XXXX-XXXX-XXXX'></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="PAddress">Permanent Address<span className='text-danger'>*</span></label>
                                <input className='form-control' id='PAddress' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="RAddress">Residential Address<span className='text-danger'>*</span></label>
                                <input className='form-control' id='RAddress' type="text"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myFile">Upload your recent image<span className='text-danger'>*</span></label>
                                <input className='form-control'type="file" id="myFile" name="filename"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myAadhar">Upload Aadhar<span className='text-danger'>*</span></label>
                                <input className='form-control' type="file" id="myAadhar" name="myAadhar"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myPan">Upload your PAN card{" "}</label>
                                <input className='form-control' type="file" id="myPan" name="myPan"></input>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="eSign">Upload your E-Signature<span className='text-danger'>*</span>{" "}</label>
                                <input className='form-control' type="file" id="eSign" name="eSign"></input>
                            </div>
                            <div className='text-center mb-2 mt-3'>
                                <button className='btn btn-info' type='submit'>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newreg;