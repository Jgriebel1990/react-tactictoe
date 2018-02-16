import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
      this.state = {
        currentPlayer: 'x',
       
      }
      this.tileClick = this.tileClick.bind(this);

  }

tileClick (e){
  if(this.state.currentPlayer === 'x'){
    e.target.innerHTML = 'x'
    this.setState({currentPlayer: 'o'});
  }else {
    this.setState({currentPlayer: 'x'});
    e.target.innerHTML = 'o'
  }
}
resetGame(e){
  console.log(e.target);
}
  render() {
    return (
      <div className='container'>
      <p className='header-font'>Tic Tac Toe</p>
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
        <button className="btn button" onClick={this.resetGame}>RESET</button>
      </div>
    );
  }
}

export default App;
