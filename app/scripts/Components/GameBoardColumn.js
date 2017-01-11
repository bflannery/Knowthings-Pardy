import React from 'react';
import QuestionBoxList from './questionBoxList';

export default React.createClass({
  render() {
    let singleCategory = this.props.category.map((category, i, arr) => {
      return (
        <div key={category.id} className="column">
          <h2>{category.title}</h2>
          <QuestionBoxList questions={category.clues} />
        </div>
      );
    });
    
    return (
      <div className="game-board">
        {singleCategory}
      </div>
    );
  },
});
