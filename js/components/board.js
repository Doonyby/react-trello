var React = require('react');
var ReactDom = require('react-dom');

var ListContainer = require('./list-container');

var Board = function() {
	var boardTitle = "This is my board."
	return (
		<div className="list-board">
			<div className="board-title">{boardTitle}</div>
			<ListContainer title="This is list container 1" />
			<ListContainer title="This is list container 2" />
			<ListContainer title="This is list container 3" />
		</div>
	);
}


module.exports = Board;