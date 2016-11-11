import React from 'react';
import store from '../store';
import _ from 'underscore';


export default React.createClass({
  getInitialState(){
    return{
      clicked:false,
      answered:false,
      correct:false
    };
  },
  render(){
  console.log(this.props.clue);

    if(this.state.clicked===false && this.state.answered===false){

    return(
      <li className="points" onClick={this.handleQuestion}>
      ${this.props.clue.value}
      </li>
    );

  }else if(this.state.clicked===true && this.state.answered===false){

  return(
    <div>
        <li className="points" onClick={this.handleQuestion}>
          ${this.props.clue.value}
        </li>
      <div className="modal">
        <div className="question">
          <h3>{this.props.clue.question}</h3>
          <form>
            <input id="answer" type="text" placeholder="Answer Here"/>
            <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
        </div>
      </div>
  </div>
);
}else if(this.state.clicked===true && this.state.answered===true && this.state.correct===false){
  return(
    <li className="empty-points">
    <span className="answer">{questions.answer.replace(/\<[\/]?i\>/, '')}</span>
    </li>
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
},
handleSubmit(e){
  e.preventDefault();
  this.setState({
    clicked:true,
    answered:true,
  });
}
});
