import React from 'react';



export default React.createClass ({
  render () {

  window.console.log(this.props);

    return (
      <li> {this.props.clue.question}</li>
    );
  }
});
