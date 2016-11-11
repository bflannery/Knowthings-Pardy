import React from 'react';



export default React.createClass ({
  render () {

  // window.console.log(this.props.clue);

    return (
      //
      <li>
      <h5>{this.props.clue.question}</h5>
      </li>



    );
  }
});
