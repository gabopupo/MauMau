export default class Pile {
    constructor() {
        this._cards = new Array();
        this.instantiate();
    }

    get cards() {
        return this._cards;
    }

    get element() {
        return this._element;
    }

    set cards(cards) {
        this._cards = cards;
    }

    set element(element) {
        this._element = element;
    }

    toString() {
        let message = `Pile contents:\n`;
        for (const card of this.cards)
            message += `\t${card.toString()}\n`;
        return message;
    }

    instantiate() {
        let pile = document.createElement('div');
        
        this._element = pile;
    }
}