import React, {Component} from 'react';
import gary from '../../assets/gary-logo.png';
import {Link} from 'react-router-dom';
// import {slide as Menu} from 'react-burger-menu';
import Hamburger from './Hamburger'
import './Header.css';

class Header extends Component{
    // showSettings (event) {
    //     event.preventDefault();
        
    //   }
    render(){
    return(
        <div className="header-container">
            <Link to="/Home"><div className="gr-logo-container">
                <img id="gary-logo" src={gary} alt="gary-logo"/> 
            </div></Link>
            <div className="header-ham-container">  
                <Hamburger className="ham-container"/>
            </div>
        </div> 
    )}
}
export default Header;