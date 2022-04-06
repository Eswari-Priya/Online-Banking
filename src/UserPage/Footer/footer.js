import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FooterList from './footerlist';
import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';
 class Footer extends Component {
    state = {
        objects:[
            {title: "Home",list:[
                {heading:"A little abour us",href:"#"},
                {heading:"Welcome",href:"#"},
                {heading:"Our Customer Stats",href:'#'},
                {heading:"Our Offers",href:"#"},
                {heading:"Services",href:"#"}
            ]},
            {title:"Others",list:[
                {heading:"New User",href:"#"},
                {heading:"Create Account",href:"#"},
                {heading:"User Manual",href:"#"},
                {heading:"Complaints",href:"#"},
                {heading:"Contact Us",href:"#"}
            ]}
        ],
        FollowUs:[
            {title:"Facebook",icon:"https://img.icons8.com/color/48/000000/facebook-new.png",href:"#"},
            {title:"Linkedin",icon:"https://img.icons8.com/fluency/48/000000/linkedin.png",href:"#"},
            {title:"Discord",icon:"https://img.icons8.com/color-glass/48/000000/discord-logo.png",href:"#"},
            {title:"YouTube",icon:"https://img.icons8.com/color/48/000000/youtube-squared.png",href:"#"},
            {title:"Twitter",icon:"https://img.icons8.com/color/48/000000/twitter--v1.png",href:"#"},
            {title:"Gmail",icon:"https://img.icons8.com/color/48/000000/gmail-new.png",href:"#"},
        ]
    } 
    render() { 
        console.log(typeof(this.state.FollowUs[0].icon));
        return (
        <div>
            <div className='' id='footer'>
                <FooterList ob={this.state.objects} follow={this.state.FollowUs}/>  
            </div> 
            <div id="copyright">
                All the copyrights are limited to Nesla Bank
            </div>
        </div>);
    }
}
// const gmail = "./images/gmail.png";
export default Footer;