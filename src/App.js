import React, { Component } from 'react';
import Tile from './Tile';


class App extends Component {
  constructor(){
    super();
      this.state = {
        currentPlayer: 'x',
        tiles: [
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          },
          {
            status: '',
          }
          
        ]
       
      }
      this.tileSelect = this.tileSelect.bind(this);

  }

  tileSelect (position){
    console.log('please work');
    const clickedTile = this.state.tiles[position];
    const first = this.state.tiles.slice(0, position);
    const last = this.state.tiles.slice(position + 1);
    const newTiles = [
      ...first,
      {...clickedTile, status: this.state.currentPlayer},
      ...last
    ];
    this.setState({tiles: newTiles, currentPlayer: this.state.currentPlayer === 'x' ? 'o' : 'x'  });
    
//   console.log('hello world it is i');
    // if(this.state.currentPlayer === 'x'){
    //   e.target.innerHTML = 'x'
    //   this.setState({currentPlayer: 'o'});
    // }else {
    //   this.setState({currentPlayer: 'x'});
    //   e.target.innerHTML = 'o'
    // }
  }
  resetGame(e){
    console.log(e.target);
  }
  render() {
    const { tiles } = this.state;
    const gameBoard = tiles.map((tile, index) => <Tile key={index} 
                                                       tileClick={() => this.tileSelect(index)}
                                                       status={tile.status}
                                                       />)
    return (
      <div className='bg-color'>
        <div className='container bg-color'>
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
      </div>
    );
  }
}

export default App;
