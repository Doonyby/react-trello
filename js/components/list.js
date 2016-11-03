var React = require('react');
var ReactDom = require('react-dom');

var Card = require('./card');

var List = function(props) {
	var card = props.cards.map(function(item) {
        return <Card key={item.id} text={item} />;
    });
	return (
		<div className="card-list">
			{card}
			<form className="listForm" onSubmit={props.addSubmit}>
				<input className="textField" type="text" id="inputText" onChange={props.addInputChange} name="inputText" />
				<input className="formBtn" type="submit" value="Submit" />
			</form>
		</div>
	);
}



module.exports = List;