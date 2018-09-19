import React from 'react';
import Clients from '../../../assets/clients.jpg'
import './why.css'

export default function Why(){
    return (
    <div className='why-container'>
        <div id="why-1">
            
        </div>
        <div id="why-2">
        <span className='why-title'>AN INDEPENDENT ADVISOR</span>
            <p>When it comes to your financial security it is important to find the right investment for your needs and objectives as well as the right company. As an Independent Financial Advisor, Gary is able to offer many different products and companies to best help your reach your goals.</p>
        </div>
        <div id="why-3">
            <img src={Clients} alt="clients" id='clients-img'/>
        </div>  
    </div> 
    )}