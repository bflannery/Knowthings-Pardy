import React from 'react';
import Backbone from 'backbone';
import CategoryBox from './CategoryBox';
import categories from '../Collections/categories';
import QuestionBoxList from './QuestionBoxList';


export default React.createClass({


  render() {
      // window.console.log(this.props);
  return(

    <ul>
      <CategoryBox title={this.props.category.title}/>
      <QuestionBoxList questions={this.props.category}/>
    </ul>


  );
}
});
