var React = require('react');
var ReactDom = require('react-dom');

var Card = function(props) {
	return (
		<div className="cardContent">{props.text}</div>
	);
};

module.exports = Card;