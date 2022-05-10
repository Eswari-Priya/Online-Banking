import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
// import {Links} from './imagelinks';
export class FollowList extends Component {
    state = {  } 
    renderlist = (li) =>{
        return(
            <div className='p-2'><a href={li.href}><span><img className="social" src={li.icon}></img>{li.title}</span></a></div>
        )
    }
    renderfollow = (ob) =>{
        console.log(ob.slice(0,3))
        return(
            <div className='col-lg-4 col-md-6 col-sm-12 m-auto' id='footer'>
                <h4>Follow Us</h4>
                <div className='d-flex flex-row justify-content-center'>
                    {ob.slice(0,3).map((li) => this.renderlist(li))}
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    {ob.slice(3,ob.length).map((li) => this.renderlist(li))}
                </div>
            </div>
        )
    }
    render() { 
        return (
            <React.Fragment>
                {this.renderfollow(this.props.follow)}
                {/* <img src={Links.FollowUs[0].icon}></img> */}
            </React.Fragment>
        );
    }
}
 
// export default FollowList;