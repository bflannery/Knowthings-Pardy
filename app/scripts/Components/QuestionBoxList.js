import Backbone from 'backbone';
import React from 'react';
import QuestionBox from './QuestionBox';
import _ from 'underscore';

export default React.createClass ({
  render () {
// window.console.log(this.props.questions.clues);


//
let copyArr = this.props.questions.clues.map((clue)=> {
  return clue;
}
);

let randomQuestion = _.times(5, (i) => {
       var random = Math.floor(Math.random()*(copyArr.length + 1 -1)) + 1;
       var question = copyArr[random];
       copyArr = _.without(copyArr, question);
       return question;
   }).map((clue,id)=> {
       return <QuestionBox key={id} clue={clue}/>;
   });


// let clue = this.props.questions.clues[];

 return (
   <ul>
    {randomQuestion}
    </ul>
  //
  // <ul>
  // <QuestionBox  clue={clue}/>
  // <QuestionBox  clue={clue}/>
  // <QuestionBox  clue={clue}/>
  // <QuestionBox  clue={clue}/>
  // <QuestionBox  clue={clue}/>
  // </ul>

);
}
});
