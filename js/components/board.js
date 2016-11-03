var React = require('react');
var ReactDom = require('react-dom');

var ListContainer = require('./list-container');

var Board = function() {
	var boardTitle = "This is my board."
	return (
		<div className="list-board" key="listBoardDiv">
			<div className="board-title" key={boardTitle}>{boardTitle}</div>
			<ListContainer key="listContain1" title="This is list container 1" />
			<ListContainer key="listContain2" title="This is list container 2" />
			<ListContainer key="listContain3" title="This is list container 3" />
		</div>
	);
}


module.exports = Board;