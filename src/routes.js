import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../src/components/home/Home.js';
import Services from '../src/components/products/Products.js';
import About from '../src/components/about/About.js';
import Contact from '../src/components/contact/Contact.js';

export default (
 <div>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/Services" component={Services}/>
   <Route exact path="/About" component={About}/>
   <Route exact path="/Contact" component={Contact}/>
 
  </Switch>
 </div>
)

