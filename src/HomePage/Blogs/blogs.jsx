import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './blogs.css'
class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='container'>
            <div className='row d-flex flex-row'>
                <div className='d-flex flex-column col-lg-3 col-md-6 col-sm-12'>
                <div className='d-flex icon m-auto align-self-center' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/external-others-iconmarket/64/000000/external-smiley-valentines-day-others-iconmarket-5.png"/>
                    
                </div>
                <div style={{"text-align":"center"}} className="mb-5">Compliments</div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/ios/50/000000/talk-male.png"/>
                    
                </div>
                <div style={{"text-align":"center"}} className="mb-5">Services</div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/ios/50/000000/sad.png"/>
                    
                </div>
                <div style={{"text-align":"center"}} className="mb-5">Complaints</div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='d-flex icon m-auto' id='icon'>
                    <img className=' m-auto' src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-google-maps-social-media-justicon-flat-justicon.png"/>
                    
                </div>
                <div style={{"text-align":"center"}} className="mb-5">Locator</div>
                </div>
                
            </div>
            </div>
        );
    }
}
 
export default Blog;