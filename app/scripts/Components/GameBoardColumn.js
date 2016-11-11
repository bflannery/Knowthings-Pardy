import React from 'react';
import CategoryBox from './CategoryBox';
import QuestionBoxList from './QuestionBoxList';


export default React.createClass({


  render() {

  return(

    <ul className = "column">
      <CategoryBox title={this.props.category.title}/>
      <QuestionBoxList questions={this.props.category.clues}/>
    </ul>
  );
}
});
