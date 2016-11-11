import Backbone from 'backbone';
import React from 'react';
import QuestionBox from './QuestionBox';
import _ from 'underscore';


export default React.createClass({
  render() {
    let randomQuesion = this.props.clues.map((clue,id)=> {
           return <QuestionBox key={id} clue={clue}/>;
         });


    return (
   <ul>{randomQuestion}</ul>


 );
  }
});
