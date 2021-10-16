import GameArea from "./GameArea.js";

export default class Player {
    constructor(name) {
        this._name = name;
        this.deckSize = 7;
        this.deck = GameArea.drawPile.takeTopCards(this.deckSize);
        this.deckElement = document.createElement('div');
        this.deckElement.classList.add('deck');
        document.body.appendChild(this.deckElement);

        this.instantiateDeck();
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    toString() {
        let message = `${this._name} has a deck of ${this.deckSize} cards:\n`;
        for (const card of this.deck)
            message += `\t${card.toString()}\n`;
        return message;
    }

    instantiateDeck() {
        let iterator = 0;

        for (const card of this.deck) {
            card.deckPosition = iterator++;
            this.deckElement.appendChild(card.instantiate());
        }
    }
}