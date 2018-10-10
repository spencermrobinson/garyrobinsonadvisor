import React from 'react';
import grPhoto from '../../assets/gary-photo.jpg';
import './about.css'

export default function aboutPhoto(){
    return(
        <div>
        <img src={grPhoto} alt="" id="gary-photo"/>
        </div> 
    )
}