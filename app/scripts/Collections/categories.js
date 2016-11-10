import Backbone from 'backbone';
import $ from 'jquery';
import category from '../Models/category';

export default Backbone.Collection.extend ({
  model: category,


getCategories() {

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=106',
  success: (response) => {
    this.add(response);
  }
});

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=103',
  success: (response) => {
    this.add(response);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=67',
  success: (response) => {
    this.add(response);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=561',
  success: (response) => {
    this.add(response);

  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=211',
  success: (response) => {
      this.add(response);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=793',
  success: (response) => {
    this.add(response);
  }
});

}
});
