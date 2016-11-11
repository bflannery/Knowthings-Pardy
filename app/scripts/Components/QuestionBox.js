import React from 'react';
import store from '../store';


export default React.createClass ({

  getInitialState(){
    return{
    clicked: false,
    answered: false
};
  },
  render () {
      if(this.state.clicked===false && this.state.answered===false){

    return (
      <li onClick={this.handleQuestion}>
      ${this.props.question[0].value}
      </li>

    );
  } else if(this.state.clicked===true && this.state.answered ===false){
    return (
      <div>
    <li onClick={this.handleQuestion}>
      ${this.props.question[0].value}
    </li>
    <div className="modal">
      <span>${this.props.question[0].question}</span>
    <form>
    <input id="answer" type="text" placeholder="Answer Here"/>
    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
    </form>
    </div>
    </div>
  );
} else if(this.state.clicked === true && this.state.answered === true) {
  return (
    <li></li>
  );
}
  },


  handleQuestion(e) {
    this.setState({
      clicked: true,
      answered: false
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      clicked: true,
      answered: true
    });
  }
});
