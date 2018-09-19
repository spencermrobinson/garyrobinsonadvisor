import React, { Component } from 'react';
import Header from '../header/Header.js';
import Lax from './Lax-Section/Lax.js';
import Why from './why/Why.js';
import Offer from './services/Offer.js'
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-page" id="background">
                <div className="home-header-container">
                    <Header/>
                </div>
                <div className="content-container">
                    <div className="home-lax-container">
                        <Lax/>
                        
                    </div>
                </div> 
                <div className="home-why-container">
                    <Why/>
                    
                </div>
                 <div id="home-offer">
                    <Offer/>
                 </div> 
                 
            </div> 
        )
    }

}
export default Home;