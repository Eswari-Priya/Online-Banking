import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FollowList} from './followlist';
import './footer.css';
// import {gmail} from './footer';
class FooterList extends Component {
    state = {  } 
    renderlist = (li) =>{
        return(
            <li><a href={li.href}>{li.heading}</a></li>
        )
    }
    renderObject = (ob) =>{
        return(
            <div className='col-lg-4 col-md-6 col-sm-12' id="footer">
                <h4>{ob.title}</h4>
                <ul>
                    {ob.list.map((li) => this.renderlist(li))}
                </ul>
            </div>
        )

    }
    render() { 
        return (<div className='container'>
        <div className='row'>{this.props.ob.map((obj) => this.renderObject(obj))}
        <FollowList follow={this.props.follow}/>
        
        </div></div>)
    }
}
 
export default FooterList;