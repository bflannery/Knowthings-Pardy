import React from 'react';
import Backbone from 'backbone';
import _ from 'underscore';

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
    return clue;
  });
  console.log(newClueList);


this.set('clues', newClueList);
    }

  });


  // .map((clue, i)=> {
  //       clue.value = (i +1) * 200;
  //       return clue;
  //       });
