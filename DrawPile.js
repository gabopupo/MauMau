import { colors, kinds } from "./CardContent.js";
import Card from './Card.js';
import Pile from "./Pile.js";
import GameArea from "./GameArea.js";
import MyPlayer from "./MyPlayer.js";

export default class DrawPile extends Pile {
    constructor() {
        super();
        this.generatePileOfCards();
        this.instantiate();
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

    takeTopCards(num) {
        const tookCards = this.cards.splice(0, num);
        this.instantiate();
        GameArea.element.replaceChild(
            this.element, document.getElementById('draw-pile')
        );

        if (tookCards.length === 1) return tookCards[0];

        return tookCards;
    }

    instantiate() {
        super.instantiate();

        this.element.classList.add('card-back');
        this.element.setAttribute('id', 'draw-pile');

        let pileCounter = document.createElement('span');
        pileCounter.innerHTML = this.cards.length;
        this.element.appendChild(pileCounter);

        this.element.addEventListener('click', () => {
            const tookCard = this.takeTopCards(1);
            tookCard.deckPosition = MyPlayer.deck.length;
            MyPlayer.deck.push(tookCard);
            MyPlayer.deckElement.appendChild(tookCard.instantiate(true));
        });
    }
}