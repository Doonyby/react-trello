var React = require('react');
var ReactDom = require('react-dom');

var Card = require('./card');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			inputText: '',
			cardsContained: []
		}	
	},
	onAddInputChange: function() {
		this.setState({
			inputText: document.getElementById('inputText').value
		});
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		console.log(this.state.cardsContained);
		console.log(this.state.inputText);
		this.setState({
			cardsContained: this.state.cardsContained.push(this.state.inputText)
		});
		document.getElementById('inputText').value = '';
		console.log(this.state);
	},
	render: function() {
		return (
			<div className="list-container" onChange={this.onAddInputChange} onSubmit={this.onAddSubmit}>
				<div className="list-container-title">{this.props.title}</div>
				<List />
			</div>
		);
	}
});



module.exports = ListContainer;