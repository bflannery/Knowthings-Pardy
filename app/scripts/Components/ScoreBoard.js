import React from 'react';

export default React.createClass({

  getInitialState() {
    return {
      score: this.props.stats.get('score')
    };
  },
  componentWillMount() {
    this.props.stats.on('change', () => {
      this.setState({
        score: this.props.stats.get('score')
      });
    });
  },
  render() {
    return (
      <div className="score">
        <h3> Player Score: $ {this.state.score} </h3>
      </div>
    );
  }
});
