import React from 'react';
import Backbone from 'backbone';
import GameBoard from './GameBoard';
import categories from '../Collections/categories';

export default React.createClass({
  render() {
    window.console.log(this);
  return(
    <div>
    <GameBoard/>
    </div>

  );
}
});
