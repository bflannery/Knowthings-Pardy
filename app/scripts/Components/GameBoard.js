import React from 'react';
import GameBoardColumn from './GameBoardColumn';


export default React.createClass({
  render() {
    // window.console.log(this.props.categories);
    let allTheColumns = this.props.categories.map(function(category, i, arr){
      return <GameBoardColumn key={category.title} category={category}/>;
    });


  return(

    <ul className="column-list">{allTheColumns}</ul>

  );
}
});
