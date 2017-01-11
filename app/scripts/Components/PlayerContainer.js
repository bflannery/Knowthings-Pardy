import React from 'react';

import Answer from './answer';
import ScoreBoard from './ScoreBoard';

export default React.createClass({
  getInitialState() {
    return {
      session: this.props.stats
    };
  },

  componentWillMount() {
    this.props.stats.on('update change', () => {
      this.setState({
        session: this.props.stats
      });
    });
  },

  render() {
    return (
      <div className="score-board">
        <Answer stats={this.state.session} />
        <ScoreBoard stats={this.state.session} />
      </div>
    );
  }
});
