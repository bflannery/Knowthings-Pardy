import React from 'react';
import Backbone from 'backbone';


export default React.createClass({
  getInitialState() {

    return {

      modalStatus: this.props.stats.get('modalStatus')
    };
  },

  componentWillMount() {

    this.props.stats.on('change', () => {
      this.setState({
      modalStatus: this.props.stats.get('modalStatus')

      });
    });

  },

render() {

  let modalBox= <div className="modal-box"></div>;

    if (this.state.modalStatus) {
        modalBox = (
          <div className="modal">
            <div className="modal-question">
              <span>{this.props.stats.get('question').get('question')}</span>
                <input type="text" placeholder="Answer here" id="answer"/>
                <button type="button" name="button" className="button" onClick={this.handleClick}>Answer</button>
                <button type="button" name="button" className="button" onClick={this.handleClick}>Pass</button>
            </div>
          </div>
        );
      }

      return modalBox;
    },



handleClick(e){
  console.log(this.props.stats.get('question').get('answer'));
  e.preventDefault();
 let userInput = document.getElementById('answer').value;
 this.props.stats.checkAnswer(userInput);
 this.props.stats.handleModalBox();

},



});
