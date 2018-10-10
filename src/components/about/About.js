import React, {Component} from 'react';
import Header from '../header/Header.js';
import AboutPhoto from './about-photo.js';
import './about.css';


class About extends Component{


    render(){
        return(
            <div>
                <div><Header/></div>
                <div className="about-container">
                <AboutPhoto/>
                <div id="about-content">
                <span className='about-title'
                >Gary R. Robinson, CLU</span>
                <span className='about-text' id="about-par-1"
                >Gary Robinson has over 31 years of experience in Financial Services and Retirement Income Planning. He holds a degree in Financial and Retirement Planning from the American College. Gary has helped hundreds of Utah retirees and pre-retirees while emphasizing the protection of assets from stock market loss, minimizing excessive investment fees, and creating income during retirement that you cannot outlive. He has a passion for protecting the assets of his clients and helping them reach their retirement and income planning goals.
                </span>
                <br/>
                <span className='about-text' id="about-par-2"
                >Gary has lived in Provo, Utah for 30 years and is happily married with 8 children and 20 grandchildren. Gary’s hobbies include hiking with his wife in the beautiful Utah mountains, playing with the grandkids, riding horses and playing golf. He also enjoys volunteering and helping local communities anyway that he can.</span>
                </div>
                </div> 
            </div> 
        )
    }
}
export default About;