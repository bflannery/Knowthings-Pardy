import React from 'react';

import QuestionBox from './QuestionBox';

export default React.createClass({

  render() {

    let randomQuestions = this.props.questions.map((question, i, arr) => {
      return <QuestionBox key={question.get('id')} question={question} />
    });
    return <ul>{randomQuestions}</ul>;
  }
});
