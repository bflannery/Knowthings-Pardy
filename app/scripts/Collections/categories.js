import Backbone from 'backbone';
import $ from 'jquery';
import Category from '../Models/category';

export default Backbone.Collection.extend ({
  model: Category,


getCategories() {
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=306',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);
  }
});

$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=136',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=42',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=253',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);

  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=25',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);
  }
});
$.ajax({
  type: 'GET',
  url: 'http://jservice.io/api/category?id=793',
  success: (response) => {
    let category = new Category(response);
    category.shuffleClues();
    this.add(category);
  }
});

}
});
