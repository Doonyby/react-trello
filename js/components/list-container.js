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
	onAddInputChange: function(event) {
		this.setState({
			inputText: event.target.value
		});
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		var cardText = this.state.cardsContained.concat(this.state.inputText);
		this.setState({
			cardsContained: cardText
		});
		document.getElementById('inputText').value = '';
	},
	render: function() {
		return (
			<div className="list-container" onChange={this.onAddInputChange} onSubmit={this.onAddSubmit}>
				<div className="list-container-title">{this.props.title}</div>
				<List cards={this.state.cardsContained}/>
			</div>
		);
	}
});



module.exports = ListContainer;