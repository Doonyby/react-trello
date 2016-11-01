require('babel-polyfill');
var React = require('react');
var ReactDom = require('react-dom');

var Card = require('./components/card');
var List = require('./components/list');
var Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
	ReactDom.render(<Board />, document.getElementById('app'));
})

