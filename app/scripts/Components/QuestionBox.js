import React from 'react';

import ModalBox from './modalBox';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      question: this.props.question
    };
  },
  componentWillMount() {
    this.props.question.on('change', () => {
      this.setState({
        question: this.props.question
      });
    });
  },

  render() {
    let singleQuestion;
    let answered = this.state.question.get('answered');
    let pointValue = this.state.question.get('value');


    if(!answered) {
      singleQuestion = (
        <h3 onClick={this.handleClick}>
            ${pointValue}
        </h3>
      );
    } else {
      singleQuestion = <h3></h3>;
    }

    return (

      <li className = "value-box">
      {singleQuestion}
      </li>


    );
  },
  handleClick(e) {
    console.log(this.props.question.get('answer'));
    e.preventDefault();
    this.props.question.changeStatus();
    store.session.handleModalBox(this.props.question);
  }
});
