var React = require('react');
var ReactDom = require('react-dom');

var Card = require('./card');

var List = function(props) {
	return (
		<div className="card-list">
			<Card text="This is card 1" />
			<Card text="This is card 2" />
			<Card text="This is card 3" />
			<form className="listForm" onSubmit={props.onAddSubmit}>
				<input className="textField" type="text" id="inputText" onChange={props.onAddInputChange} name="inputText" />
				<input className="formBtn" type="submit" value="Submit" />
			</form>
		</div>
	);
}



module.exports = List;