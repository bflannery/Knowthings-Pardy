import React from 'react';
import GameBoard from './GameBoard';
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
    <div>
    <GameBoard categories = {this.state.categories}/>
    </div>

  );
}
});
