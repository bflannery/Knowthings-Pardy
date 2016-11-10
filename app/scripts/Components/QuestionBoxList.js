import React from 'react';
import QuestionBox from './QuestionBox';

export default React.createClass ({
  render () {
window.console.log(this.props.questions.clues);

let allTheQuestions = this.props.questions.clues.map(function(clue, i, arr){
  return <QuestionBox key={clue.id} clue={clue}/>;
});

 return (
  <ul>{allTheQuestions}</ul>

);
}
});
