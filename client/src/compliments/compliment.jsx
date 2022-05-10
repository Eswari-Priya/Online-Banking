import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './compliment.css'
import pic from './home-bg.png'
export default class  Compliment extends Component { 
    onsubmit=(e)=>{
        e.preventDefault();
        console.log("hello");
        var firstName = document.getElementById("FirstName").value
        var lastName = document.getElementById("LastName").value
        var mobileNumber = document.getElementById("Mobile").value
        var emailid = document.getElementById("EmailId").value
        var msg = document.getElementById("Message").value
        console.log(firstName,lastName, "raising request")
        
        // Axios.post("http://localhost:3001/contactUs",{FirstName:firstName, LastName:lastName, MobileNumber: mobileNumber, Emailid:emailid, message:msg})
        // .then(data=>{window.alert("Successfully took your input. You will hear back from one of our company executive soon! Thank you for your response");window.location.reload(false)})
        // .catch(err=>{window.alert("Make sure you didn't leave email field empty or hadn't filed any previous requests and try again!")})
    }
    render() { 
        return (
            <div class="container-fluid compliment">
            <div class="row tex-center">
                <div class="col-sm-12 col-md-6 col-lg-6 p-5 m-auto">
                 <h2>Your Appreciation means a lot to us</h2>
                 <h3>We appreciate all your compliments and kind words</h3>
                 <div className="icon1">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                </div>
                <img src={pic}/>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 p-5">
                <h3>Write a new compliment</h3>
                <form>
                    <p>Full Name:</p>
                    <input type="text" class="comp" placeholder='Full Name'></input><br/><br/>
                    <p>Mobile No:</p>
                    <input type="text" class="comp" placeholder='Mobile No'></input><br/><br/>
                    <p>Message Title:</p>
                    <input type="text" class="comp" placeholder='Message Title'></input><br/><br/>
                    <p>Your Message</p><textarea placeholder='Write your message here'></textarea>
                </form>
                <div class="submit">
                <button class='btn btn-secondary' onClick={this.onsubmit}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}