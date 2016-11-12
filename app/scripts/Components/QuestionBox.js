import React from 'react';
import store from '../store';
import _ from 'underscore';
import Backbone from 'backbone';
import Modal from './Modal';


export default React.createClass({
  getInitialState(){
    return{
      clicked:false,
      answered:false,
      correct:false
    };
  },
  render(){

    if(this.state.clicked===false && this.state.answered===false){

    return(
      <li className="points-container" onClick={this.handleQuestion}>
      ${this.props.clue.get('value')}
      </li>
    );

  }else if(this.state.clicked===true && this.state.answered===false){

  return(
    <div>
        <li className="points-container" onClick={this.handleQuestion}>
          ${this.props.clue.get('value')}
        </li>
        <Modal clue={this.props.clue}/>
  </div>
);
}else if(this.state.clicked===true && this.state.answered===true && this.state.correct===false){
  return(
    <li className="empty-points"></li>
  );
}else if(this.state.clicked===true && this.state.answered===true && this.state.correct===true){
  return(
  <li className="empty-points">
  <span className="correct-answer">CORRECT!</span>
  </li>
);
}
},

handleQuestion(e){
  this.setState({
    clicked:true,
    answered:false
  });
}
});
