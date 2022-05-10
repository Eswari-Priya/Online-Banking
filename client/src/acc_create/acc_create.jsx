import React, { Component } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
class Newreg extends Component
{
    onsubmit = (e)=>{
        e.preventDefault();
        var firstName=document.getElementById("FirstName").value;
        var lastName= document.getElementById("LastName").value;
        var dob= document.getElementById("Dob").value;
        var age= document.getElementById("Age").value;
        var gaurdian= document.getElementById("Guardian").value;
        var mother= document.getElementById("Mother").value;
        var gender;
        if (document.getElementById("male").checked)
          gender= "M";
        else
            gender = "F";
        var maritalstatus;
        if (document.getElementById("married").checked)
          maritalstatus= "Y";
        else
          maritalstatus="N";
        var mobileNumber= document.getElementById("Mobile").value;
        var occupation= document.getElementById("Occupation").value;
        var mail= document.getElementById("EmailId").value;
        var accttype;
        if (document.getElementById("savings").checked)
          accttype= "Savings";
        else if (document.getElementById("current").checked)
            accttype= "Current";
        else if (document.getElementById("business").checked)
            accttype= "Business";
        else if (document.getElementById("fixed").checked)
            accttype= "Fixed";
        else
            accttype="Loan";
        
        var balance= document.getElementById("Minbal").value;
        var aadharNum= document.getElementById("Aadhar").value;
        var panNum= document.getElementById("Pan").value;
        var paddr= document.getElementById("PAddress").value;
        var raddr= document.getElementById("RAddress").value;
        var picture= document.getElementById("myFile").files[0];
        
        var aadhar= document.getElementById("myAadhar").files[0];
        var pan= document.getElementById("myPan").files[0];
        var eSign= document.getElementById("eSign").files[0];
        console.log(picture,aadhar,pan,eSign);

        var obj = {
            FirstName: firstName,
            LastName: lastName,
            Dob:dob,
            Age:age,
            Gaurdian:gaurdian,
            Mother:mother,
            Gender:gender,
            Maritalstatus:maritalstatus,
            MobileNumber:mobileNumber,
            Occupation:occupation,
            Emailid:mail,
            TypeOfAccount:accttype,
            MinimumBalance:balance,
            AadharNumber:aadharNum,
            PANNumber:panNum,
            PermanentAddress:paddr,
            ResidentialAddress:raddr,
            Picture:picture,
            Aadhar_img:aadhar,
            PAN_Card:pan,
            E_Signature:eSign
        }
        console.log(obj);
        Axios.post("http://localhost:3001/accountCreation",obj)
        .then(data=>{console.log(data);window.alert("Thank you for choosing us. Your account number is "+data.data[0]+" and your cif number is "+data.data[1]+ ".Please note your account number and cif number for further reference. Bank account creation is successful. Head over to New user tab to create a password!");window.location.reload(false)})
        .catch(err=>{console.log(err);window.alert("Make sure you didn't leave fields marked with * empty.")})
    }

    handlepic=(e)=>{
        // console.log(document.getElementById("myFile").files);
        // console.log(e.target.files);
        // this.setState({pic:e.target.files[0]})
        const img = document.getElementById(e.target.id+"1");
        img.style.display="block";
        img.src=e.target.files[0];
        img.src = URL.createObjectURL(e.target.files[0]);
        img.style.height="150px";
        img.style.width="150px";
      }
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
                                Gender:<span className='text-danger' >*</span><br/>
                                <input type="radio" id="male" name="gender" value="Male"></input>
                                <label for="male">Male</label><br/>
                                <input type="radio" id="female" name="gender" value="Female"></input>
                                <label for="female">Female</label><br/>
                            </div>
                            <div className='label form-group m-2'>
                                Marital Status:<span className='text-danger' >*</span><br/>
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
                                <input className='form-control'type="file" id="myFile" name="filename" onChange={this.handlepic}></input>
                                <img src="" id="myFile1" style={{display:"none"}}></img>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myAadhar">Upload Aadhar<span className='text-danger'>*</span></label>
                                <input className='form-control' type="file" id="myAadhar" name="myAadhar"  onChange={this.handlepic}></input>
                                <img src="" id="myAadhar1" style={{display:"none"}}></img>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="myPan">Upload your PAN card{" "}</label>
                                <input className='form-control' type="file" id="myPan" name="myPan" onChange={this.handlepic}></input>
                                <img src="" id="myPan1" style={{display:"none"}}></img>
                            </div>
                            <div className='form-group m-2'> 
                                <label for="eSign">Upload your E-Signature<span className='text-danger'>*</span>{" "}</label>
                                <input className='form-control' type="file" id="eSign" name="eSign" onChange={this.handlepic}></input>
                                <img src="" id="eSign1" style={{display:"none"}}></img>
                            </div>
                            <div className='text-center mb-2 mt-3'>
                                <button className='btn btn-info' type='submit' onClick={this.onsubmit}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newreg;