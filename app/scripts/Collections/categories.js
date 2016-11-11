import Backbone from 'backbone';
import $ from 'jquery';
import category from '../Models/category';

export default Backbone.Collection.extend ({
  model: category,


getCategories() {

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=306',
  success: (response) => {
    this.add(response);
  }
});

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=136',
  success: (response) => {
    this.add(response);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=42',
  success: (response) => {
    this.add(response);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=253',
  success: (response) => {
    this.add(response);

  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=25',
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
