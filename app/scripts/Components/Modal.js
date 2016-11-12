import React from 'react';
import store from '../store';
import _ from 'underscore';
import Backbone from 'backbone';


export default React.createClass({

render() {

let realAnswer = (this.props.clue.get('answer'));
let question =(this.props.clue.get('question'));

  return (


    <div className="modal">
      <div className="question">
        <h3>{question}</h3>
        <form>
          <input id="answer" type="text" placeholder="Answer Here"/>
          <input id="submit" type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    </div>
  );
},



handleSubmit(e){
 let userInput = document.getElementById('answer').value;
  e.preventDefault();
  this.setState({
    // clicked:true,
    // answered:true,
  });
this.props.clue.checkAnswer(userInput);

},



});
