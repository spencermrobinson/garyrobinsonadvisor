import React, {Component} from 'react';
import {Parallax, Background} from 'react-parallax';
import retireMan from '../../../assets/retirement-lake.jpg';
import './lax.css'

 
const Lax = () => (
    <div className="lax-container">
        {/* -----basic config-----*/}
        <Parallax
            className="home-lax"
            blur={0}
            bgImage={require('../../../assets/retirement-lake-small.jpg')}
            bgImageAlt="the cat"
            strength={250}
        >
            
            Realizing Your Financial Objectives Since 1985
                <div style={{ height: '20%' }}/>
            
        </Parallax>
 
        
    </div>
);
export default Lax;

    

    