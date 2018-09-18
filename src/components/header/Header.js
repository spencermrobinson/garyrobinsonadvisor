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
            <div className="gr-logo-container">
                <span className=
                'gr-logo-letter'>Gary Robinson</span>
                <div>
                    <span className='gr-sub-logo'
                    >FINANCIAL ADVISOR</span>
                </div> 
            </div>
            <div>  
                <Hamburger className="ham-container"/>
            </div>
        </div> 
    )}
}
export default Header;