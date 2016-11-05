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
		document.getElementsByClassName('textField')[0].value = '';
		document.getElementsByClassName('textField')[1].value = '';
		document.getElementsByClassName('textField')[2].value = '';
	},
	render: function() {
		return (
			<div className="list-container" key="listContainDiv" onChange={this.onAddInputChange} onSubmit={this.onAddSubmit}>
				<div className="list-container-title">{this.props.title}</div>
				<List key="this.props.title" cards={this.state.cardsContained}/>
			</div>
		);
	}
});



module.exports = ListContainer;