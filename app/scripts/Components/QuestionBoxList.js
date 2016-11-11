import React from 'react';
import _ from'underscore';
import QuestionBox from './QuestionBox';


export default React.createClass ({
  render () {

  let question1 = this.props.questions.filter((question, i ,arr) => {
    if(question.value === 200) {
      return question;

    }
  });

  let question2 = this.props.questions.filter((question, i ,arr) => {
    if(question.value === 400) {
      return question;
    }
  });

  let question3 = this.props.questions.filter((question, i ,arr) => {
    if(question.value === 600) {
      return question;
    }
  });

  let question4 = this.props.questions.filter((question, i ,arr) => {
    if(question.value === 800) {
        return  question;
    }
  });

  let question5 = this.props.questions.filter((question, i ,arr) => {
    if(question.value === 1000) {

      return question;
    }
  });

return (
  <ul>
    <QuestionBox question = {question1}/>
    <QuestionBox question = {question2}/>
    <QuestionBox question = {question3}/>
    <QuestionBox question = {question4}/>
    <QuestionBox question = {question5}/>
  </ul>
);
}
});
