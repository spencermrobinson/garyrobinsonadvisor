import React, { Component } from 'react';
import Header from '../header/Header.js';
import './home.css';

class Home extends Component{

    render(){
        return(
            <div className="home-page" id="background">
             <Header/>
            </div> 
        )
    }

}
export default Home;