const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function(){
    let player;
    let card;

    this.beforeEach(function(){
        card = new Card("Superman", 6, 9, 7);
        player = new Player("Robbie");
    });

    it('should have a name', function(){
        const actual = player.name;
        assert.strictEqual(actual, "Robbie");
    });

    it('should start with empty hand', function(){
        const actual = player.hand;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add card to hand', function(){
        player.addCard(card);
        const actual = player.hand;
        assert.deepStrictEqual(actual, [card]);
    });

    it('should pick top card from hand', function(){
        player.addCard(card);
        assert.deepStrictEqual(player.hand, [card]);
        const takenCard = player.takeTopCard();
        assert.deepStrictEqual(player.hand, []);
        assert.deepStrictEqual(takenCard, card);
    });

    // it('should return name of category chosen', function(){
    //     player.addCard(card);
    //     const actual = player.chooseCardCategory(card, "strength");
    //     assert.strictEqual(actual, "strength");
    // });

    it('should return value of chosen category of top card', function(){
        player.addCard(card);
        const actual = player.returnValueOfCategoryChosen("strength");
        assert.strictEqual(actual, 9);
    })

})