import React, { Component } from 'react';
import Home from '../src/components/home/Home';
import Background from './assets/blue-background.jpeg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
