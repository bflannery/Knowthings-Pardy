import React from 'react';
import Backbone from 'backbone';
import GameBoard from './GameBoard';

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
