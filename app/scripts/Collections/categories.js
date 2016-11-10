import Backbone from 'backbone';
import $ from 'jquery';
import category from '../Models/category';

export default Backbone.Collection.extend ({
  model: category,


getCategories () {

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=105',
  succes: (response) => {
    window.console.log(this);
    this.setState({categories: response});
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=103',
  succes: (response) => {
    this.setState({categories: response});
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=67',
  succes: (response) => {
    this.setState({categories: response});
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=561',
  succes: (response) => {
    this.setState({categories: response});

  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=211',
  succes: (response) => {
    this.setState({categories: response});
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=793',
  succes: (response) => {
    this.setState({categories: response});
  }
});
}
});
