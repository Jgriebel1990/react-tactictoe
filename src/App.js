import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state = {
        box = []
        
      }
  }
  render() {
    return (
      <div className='container'>
      <h1>tic tac toad</h1>
        <div className='box'></div>
      <button type='reset' className='btn btn-primary'>Reset</button>
      </div>
    );
  }
}

export default App;
