import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';
import Question from './question';

export default Backbone.Model.extend({
    defaults: {
        title: '',
        id: '',
        clues: []
    },

shuffleClues() {
  let oldClueList = this.get('clues');
  let newClueList = _.take(_.shuffle(oldClueList), 5).map((clue,i)=> {
    clue.value = (i+1) * 200;
    let x = new Question(clue);
    return x;
  });

this.set('clues', newClueList);
    }

  });
