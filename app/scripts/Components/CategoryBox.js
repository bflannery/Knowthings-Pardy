import React from 'react';


export default React.createClass({
    render() {
        return (
            <li className= "category-box">{this.props.title}</li>
        );
    }
});
