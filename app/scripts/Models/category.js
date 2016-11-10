import React from 'react'
import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        title: '',
        id: '',
        clues: []
    }
});
