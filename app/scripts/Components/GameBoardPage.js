import React from 'react';
import ModalBox from './ModalBox';
import GameBoardColumn from './GameBoardColumn';
import PlayerContainer from './PlayerContainer';
import store from '../store';

export default React.createClass({

  getInitialState(){
    return {
      categories: store.categories.toJSON(),
      session: store.session

    };
  },

  componentWillMount(){
    store.categories.getCategories();
    store.categories.on('update change', ()=>{
      this.setState({
        categories: store.categories.toJSON()

      });
    });
    store.session.on('update change', () => {
      this.setState({
        session: store.session
      });
    });

  },
  render() {

  return(
    <div className = "game-page">
    <h1> Random Knowledge Game </h1>
    <GameBoardColumn category = {this.state.categories}/>
    <ModalBox stats = {this.state.session}/>
    <PlayerContainer stats = {this.state.session}/>
    </div>

  );
}
});
