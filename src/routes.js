import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../src/components/home/Home.js';
import Services from '../src/components/products/Products.js';
import About from '../src/components/about/About.js';
import Contact from '../src/components/contact/Contact.js';

export default function Routes (){
    return(
        <div>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route path="/services" component={Services}/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
 
  </Switch>
 </div>
    )
}

