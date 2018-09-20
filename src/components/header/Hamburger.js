import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Hamburger.css'


class Hamburger extends Component{


    render(){
        return(
            <div className="ham-nav">
                <label for="toggle"><div className="bar" id="a"></div><div className="bar" id="b"></div><div className="bar" id="c"></div></label>
                <input type='checkbox' id='toggle'/>
                <div className="ham-menu">
                <Link to="/"><button type='' className='bluey'>HOME</button></Link>
                <Link to="/about"><button type='' className='bluey'>ABOUT</button></Link>
                <Link to="/services"><button type='' className='bluey'>SERVICES</button></Link>
                <Link to="/contact"><button type='' className='bluey'>CONTACT</button></Link>
                </div> 
            </div> 
        )
    }
}
export default Hamburger;