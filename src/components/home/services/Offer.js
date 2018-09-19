import React, {Component} from 'react';
import blueBg from '../../../assets/blue-background.jpeg'
import './offer.css'
class Offer extends Component{


    render(){
        
        return(
            <div className="services-outer" >
            <div id="services-layer">
            <span className='offer-heading'>FINANCIAL SECURITY</span>
            <p id="offer-text">When it comes to your finances you want a plan that will allow you to reach your goals and offer protection.  Gary Robinson specializes in products that provide security and income you can count on. </p>
            </div> 
            <div id="services-wrapper">
                <div className='services-containers'>
                    <span className="services-title">Life Insurance</span>
                    <p>Life Insurance is an important part of financial planning. Identifying if there is a need, what type of of insurance is best for your objectives and finding the right company is key to financial security.</p>
                </div>
                <div className='services-containers'>
                    <span className="services-title">Disability Insurance</span>
                    <p>Disability Insurance replaces lost income due to injury or illness and can help you achieve your retirement plans in the unfortunate event that you become sick or injured. </p>
                </div>
                <div className='services-containers'>
                    <span className="services-title">Assets Under Management</span>
                    <p>Managed Accounts and Mutual Funds account for a large percent of a typical retirees income.  With the right advisor these accounts can provide favorable returns and protection depending on your financial goals. </p>
                </div>
                <div className='services-containers'>
                    <span className="services-title">Lifetime Guaranteed Income</span>
                    <p>Retirement Income Planning has two phases. The Accumulation phase and the Distribution phase. The Distribution phase may be overlooked sometimes but is very important and, with the right approach, can provide Guaranteed Lifetime Income you can count on. </p>
                </div> 
 
            </div>
            </div> 
             
        )
    }
}
export default Offer;