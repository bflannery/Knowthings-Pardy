import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';
import session from './session';
import Categories from '../Collections/categories';

export default Backbone.Model.extend({
  idAttribute: 'id',
    defaults: {

    answered: false

  },


  checkAnswer(userInput) {
    console.log(userInput)
      let theAnswer = (this.get('answer'));
    if(theAnswer === userInput){
      session.answerBox.set(this.answer);
    } else {
    return ('nope');
  }

}
});
