import React from 'react';
import Backbone from 'backbone';


export default Backbone.Model.extend({
  idAttribute: 'id',
    defaults: {
    question: '',
    value: '',
    answer: '',
    answered: false

},

changeStatus() {
  this.set({answered: true});
}
});
