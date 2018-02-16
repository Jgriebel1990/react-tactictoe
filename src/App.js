import React, { Component } from 'react';
import Tile from './Tile';


class App extends Component {
  constructor(){
    super();
      this.state = {
        currentPlayer: 'x',
        tiles: [
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          },
          {
            status: 'blank',
          }
          
        ]
       
      }
      this.tileClick = this.tileClick.bind(this);

  }

tileClick (e){
  console.log('hello world it is i');
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
    const { tiles } = this.state;
    const gameBoard = tiles.map((status, index) => <Tile key={index} 
                                                         tileSelect={() => this.tileClick(index)}/>)
    return (
      <div className='container'>
      <p className='header-font'>
      Tic Tac Toe
      
      </p>
        <div className="row">
          { gameBoard }
        </div>
        {/* <div className='row'>
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
        </div> */}
        <button className="btn button" onClick={this.resetGame}>RESET</button>
      </div>
    );
  }
}

export default App;
