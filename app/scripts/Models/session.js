import React from 'react';
import Backbone from 'backbone';


export default Backbone.Model.extend({
    idAttribute: 'id',
    defaults : {
      answerBox: '',
      points: 0
    }



});
