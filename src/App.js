import React, { Component } from 'react';
import './App.css';
import './Tile';

class App extends Component {
  constructor(){
    super();
      this.state = {
        currentPlayer: 'x'
      }
      this.tileClick = this.tileClick.bind(this);

  }

tileClick (e){
  if(this.state.currentPlayer === 'x'){
    this.setState({currentPlayer: 'o'});
    e.target.innerHTML = 'x'
  }else {
    this.setState({currentPlayer: 'x'});
    e.target.innerHTML = 'o'
  }
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
