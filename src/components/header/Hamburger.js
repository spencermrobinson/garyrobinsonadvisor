import React, {Component} from 'react';
import './Hamburger.css'


class Hamburger extends Component{


    render(){
        return(
            <div className="ham-nav">
                <label for="toggle"><div className="bar" id="a"></div><div className="bar" id="b"></div><div className="bar" id="c"></div></label>
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