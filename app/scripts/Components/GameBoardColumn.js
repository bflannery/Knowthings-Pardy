import React from 'react';
import CategoryBox from './CategoryBox';
import categories from '../Collections/categories';


export default React.createClass({
  render() {
    window.console.log(this);
  return(
    <div>
      <CategoryBox/>

    </div>

  );
}
});
