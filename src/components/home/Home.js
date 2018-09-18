import React, { Component } from 'react';
import Header from '../header/Header.js';
import Lax from './Lax-Section/Lax.js'
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-page" id="background">
                <div className="home-header-container">
                    <Header/>
                </div>
                <div className="content">
                    <div className="home-lax-container">
                        <Lax/>
                    </div>  
                </div> 
                
                 
            </div> 
        )
    }

}
export default Home;