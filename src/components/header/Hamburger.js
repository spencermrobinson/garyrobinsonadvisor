import React, {Component} from 'react';
import './Hamburger.css'


class Hamburger extends Component{


    render(){
        return(
            <div className="ham-nav">
                <label for="toggle">&#9776;</label>
                <input type='checkbox' id='toggle'/>
                <div className="ham-menu">
                <a href="">ABOUT</a>
                <a href="">SERVICES</a>
                <a href="">CONTACT</a>
                </div> 
            </div> 
        )
    }
}
export default Hamburger;