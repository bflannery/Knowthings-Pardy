import React from 'react';
import GameBoard from './GameBoard';
import categories from '../Collections/categories';
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
    window.console.log(this.state);
  return(
    <div>
    <GameBoard categories = {this.state.categories}/>
    </div>

  );
}
});
