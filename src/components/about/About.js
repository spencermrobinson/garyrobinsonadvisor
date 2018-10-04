import React, {Component} from 'react';
import Header from '../header/Header.js';
import AboutPhoto from './about-photo.js'


class About extends Component{


    render(){
        return(
            <div>
                <div><Header/></div>
                <div className="about-container">
                <AboutPhoto/>
                </div> 
            </div> 
        )
    }
}
export default About;