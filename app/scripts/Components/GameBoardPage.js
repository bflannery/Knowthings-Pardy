import React from 'react';
import GameBoard from './GameBoard';
import PlayerContainer from './PlayerContainer';
import store from '../store';

export default React.createClass({

  getInitialState(){
    return {
      categories: store.categories.toJSON()

    };
  },

  componentWillMount(){
    store.categories.getCategories();
    store.categories.on('update change', ()=>{
      this.setState({
        categories: store.categories.toJSON()

      });
    });

  },
  render() {
  return(
    <div className = "game-board">
    <GameBoard categories = {this.state.categories}/>
    <PlayerContainer answers = {this.state.categories}/>
    </div>

  );
}
});
