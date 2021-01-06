
export default class Player {
    constructor(name, pile) {
        this._name = name;
        this.deckSize = 7;
        this.deck = pile.splice(0, this.deckSize);
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
}