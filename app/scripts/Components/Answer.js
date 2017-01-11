import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      answer: this.props.stats.get('answerBox')
    };
  },

  componentWillMount() {
      this.props.stats.on('change', () => {
        this.setState({
          answer: this.props.stats.get('answerBox')
        });
      });
  },
  render() {

    return (
      <div className="answer">
        <h3> Correct Answer: {this.state.answer}</h3>
      </div>

    );
  }
});
