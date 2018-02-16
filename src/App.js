import React, { Component } from 'react';
import './App.css';
import './Tile';

class App extends Component {
  constructor(){
    super();
      this.state = {
        
      }
      this.tileClick = this.tileClick.bind(this);
      
  }

tileClick (e){
  e.target.innerHTML = 'x';
  console.log(e.target);
}
  render() {
    return (
      <div className='container'>
      <p>TTT</p>
        <div className='row'>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
        </div>
        <div className='row'>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
        </div>
        <div className='row'>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
          <div className='col-md-1 square' onClick={this.tileClick}></div>
        </div>
        <button className="btn-danger">poop</button>
      </div>
    );
  }
}

export default App;
