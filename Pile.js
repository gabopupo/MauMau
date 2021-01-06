import { colors, kinds } from "./CardContent.js";
import Card from './Card.js';

export default class Pile {
    constructor() {
        this.cards = new Array();
        this.generatePileOfCards();
    }

    generatePileOfCards() {
        for (const kind of kinds) {
            for (let i = 0; i < kind.qtd; ++i) {
                if (kind.colored) {
                    for (const color of colors)
                        this.cards.push(new Card(color, kind.imprint));
                } else this.cards.push(new Card(null, kind.imprint));
            }
        }
        this.shufflePile();
    }

    shufflePile() {
        let p = this.cards.length, i, tmp;
        
        while (p) {
            i = Math.floor(Math.random() * p--);

            tmp = this.cards[p];
            this.cards[p] = this.cards[i];
            this.cards[i] = tmp;
        }
    }

    toString() {
        let message = `Current game pile:\n`;
        for (const card of this.cards)
            message += `\t${card.toString()}\n`;
        return message;
    }
}