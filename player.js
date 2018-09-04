const Player = function(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.addCard = function(card){
    this.hand.push(card);
}

Player.prototype.takeTopCard = function(){
    return this.hand.shift();
}



// Player.prototype.chooseCardCategory = function(card, cardCategory){
//     const cardCategories = Object.getOwnPropertyNames(card);

//     for (let category of cardCategories){
//         if (category === cardCategory){
//             return cardCategory;
//         }
//     }
// }

Player.prototype.returnValueOfCategoryChosen = function(cardCategory){
    return this.takeTopCard()[cardCategory];
}

module.exports = Player;

