var React = require('react');
var ReactDom = require('react-dom');

var Card = require('./card');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			inputText: 'This is state text',
			cardsContained: [1,2,3]
		}	
	},
	onAddInputChange: function() {
		console.log(this.state.inputText);
		console.log('changing');
		// this.setState({
		// 	inputText: document.getElementById('inputText').value;
		// });

	},
	onAddSubmit: function(event) {
		event.preventDefault();
		console.log('form is submitting');
	},
	render: function() {
		return (
			<div className="list-container">
				<div className="list-container-title">{this.props.title}</div>
				<List onChange={this.onAddInputChange} onSubmit={this.onAddsubmit}/>
			</div>
		);
	}
});



module.exports = ListContainer;