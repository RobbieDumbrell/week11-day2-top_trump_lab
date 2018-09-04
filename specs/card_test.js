const assert = require('assert');
const Card = require('../card.js');

describe('Card', function(){

    let card;

    this.beforeEach(function(){
        card = new Card("Superman", 6, 9, 7);
    });

    it('should have a name', function(){
        const actual = card.name;
        assert.strictEqual(actual, "Superman");
    });

    it('should have intellgience', function(){
        const actual = card.intelligence;
        assert.strictEqual(actual, 6);
    });

    it('should have strength', function(){
        const actual = card.strength;
        assert.strictEqual(actual, 9);
    });

    it('should have agility', function(){
        const actual = card.agility;
        assert.strictEqual(actual, 7);
    });

})