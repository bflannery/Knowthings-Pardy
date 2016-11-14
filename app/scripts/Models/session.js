import React from 'react';
import Backbone from 'backbone';

export default Backbone.Model.extend({
    idAttribute: 'id',
    defaults: {
      modalStatus: false,
      answerBox: '',
      score: 0
    },



handleModalBox(question) {
  if (question) {
    this.set({question});
  }

  if(!this.get('modalStatus')){
    this.set({modalStatus: true});
  }
  else {
    this.set({modalStatus: false});
  }
},

checkAnswer(userInput) {

  let theAnswer = this.get('question').get('answer');
  if(theAnswer === userInput){
      this.calculateScore();
    }
      this.updateAnswer(theAnswer);


},
updateAnswer(newAnswer){
  this.set({answerBox: newAnswer});

},

calculateScore() {

    let playerScore = this.get('score');
    let questionValue = this.get('question').get('value');
    playerScore += questionValue;
    this.set({score: playerScore});

}

});
