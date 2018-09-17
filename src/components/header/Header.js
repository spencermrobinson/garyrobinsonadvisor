import React, {Component} from 'react';
import gary from '../../assets/gr-logo.png';
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
            <img className="gr-logo" src={gary} alt=""/>
            <Hamburger/>
        </div> 
    )}
}
export default Header;