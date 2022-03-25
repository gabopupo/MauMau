import GameArea from "./GameArea.js";

export default class Player {
    constructor(name, me) {
        this._name = name;
        this._me = me;
        this.deckSize = 7;
        this.deck = GameArea.drawPile.takeTopCards(this.deckSize);
        this._deckElement = document.createElement('div');
        this._deckElement.classList.add('deck');
        document.body.appendChild(this._deckElement);

        this.instantiateDeck();

        GameArea.addPlayer(this);
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set deckElement(deckElement) {
        this._deckElement = deckElement;
    }

    get deckElement() {
        return this._deckElement;
    }

    set me(me) {
        this._me = me;
    }

    get me() {
        return this._me;
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
            this._deckElement.appendChild(card.instantiate(this._me));
        }
    }
}