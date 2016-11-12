import Backbone from 'backbone';
import Categories from './Collections/categories';
import Session from './Models/session';

export default {
  categories: new Categories(),
  session: new Session(),

};
