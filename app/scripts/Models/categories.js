import Backbone from 'backbone';

export default Backbone.Model.extend({
    rootUrl: 'http://jservice.io/api/categories?count=100',
    defaults: {
        title: '',
        id: '',
        questions: [];
    }
})
