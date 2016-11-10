var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Board = require('../js/components/board');
var ListContainer = require('../js/components/list-container');

describe('List-container', function() {
    it('Renders list and title',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer key="listContain1" title="This is list container 1" />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('list-container');
        
        var title = result.props.children[0];
        title.type.should.equal('div');
        title.props.className.should.equal('list-container-title');
        title.props.children.should.equal('This is list container 1');


        var list = result.props.children[1];
        console.log(list.type.toString());
        list.props.cards.toString().should.equal('');
    });
});