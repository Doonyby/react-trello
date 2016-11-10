var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var List= require('../js/components/list');


describe('List', function() {
    it('Renders card and a form',  function() {
        var title="This is list container 1";
        var card=[1,2,3];
        var renderer = TestUtils.createRenderer();
        renderer.render(<List key={title} cards={card}/>);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card-list');
        
        var cards = result.props.children[0];
        cards.should.be.a('array');
        cards[0].props.text.should.equal['1'];
        cards.length.should.equal(3);

        var form = result.props.children[1];
        form.type.should.equal('form');
    });
});