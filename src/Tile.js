import React, { Component } from 'react';

class Tile extends Component{
    render(){
        
        return(
            <div className='col-md-4 square' 
                 onClick={() => this.tileClick}></div>
        );
    }

}

export default Tile;