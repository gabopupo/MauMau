import GameArea from "./GameArea.js";
import MyPlayer from "./MyPlayer.js";

export default class Card {
    constructor(color, kind) {
        this._color = color;
        this._kind = kind;
        this._deckPosition = -1;
        this._isMine = false;
    }

    get color() {
        return this._color;
    }

    get kind() {
        return this._kind;
    }

    get deckPosition() {
        return this._deckPosition;
    }

    get isMine() {
        return this._isMine;
    }

    set color(color) {
        this._color = color;
    }

    set kind(kind) {
        this._kind = kind;
    }

    set deckPosition(deckPosition) {
        this._deckPosition = deckPosition;
    }

    set isMine(isMine) {
        this._isMine = isMine;
    }

    toString() {
        let message = this._color ? `${this._color} `: ``;
        message += `${this._kind} card`;
        return message;
    }

    createAnyColorDiv() {
        let cardAnyColor = document.createElement('div');
        cardAnyColor.classList.add('card-any');

        let cardAnyColorRed = document.createElement('div');
        cardAnyColorRed.classList.add('card-any-red');
        cardAnyColor.appendChild(cardAnyColorRed);

        let cardAnyColorGreen = document.createElement('div');
        cardAnyColorGreen.classList.add('card-any-green');
        cardAnyColor.appendChild(cardAnyColorGreen);

        let cardAnyColorBlue = document.createElement('div');
        cardAnyColorBlue.classList.add('card-any-blue');
        cardAnyColor.appendChild(cardAnyColorBlue);

        let cardAnyColorYellow = document.createElement('div');
        cardAnyColorYellow.classList.add('card-any-yellow');
        cardAnyColor.appendChild(cardAnyColorYellow);

        return cardAnyColor;
    }

    instantiate(isMe) {
        let card = document.createElement('div');
        this._isMine = isMe;

        if (isMe) {
            card.classList.add('card-front', `card-${this._color ? this._color : 'black'}`);
            
            let cardKind = document.createElement('div');
            cardKind.classList.add('card-front-kind');

            switch (this._kind) {
                case 'Skip':
                    cardKind.innerHTML = '🛇';
                    break;
                case 'Reverse':
                    cardKind.innerHTML = '🗘';
                    break;
                case 'Wild':
                    cardKind.appendChild(this.createAnyColorDiv());
                    break;
                case '+4':
                    let cardAnyColor = this.createAnyColorDiv();

                    let cardPlusFour = document.createElement('div');
                    cardPlusFour.classList.add('card-plus-four');
                    cardPlusFour.innerHTML = '+4';
                    cardAnyColor.appendChild(cardPlusFour);

                    cardKind.appendChild(cardAnyColor);
                    break;
                default:
                    cardKind.innerHTML = this._kind;
                    break;
            }
            
            card.appendChild(cardKind);
        } else {
            card.classList.add('card-back');
        }

        card.addEventListener("click", () => {
            if (!this._isMine) return;
            
            MyPlayer.deck.splice(this.deckPosition, 1);
            MyPlayer.deckElement.removeChild(card);

            this.deckPosition = -1;
            GameArea.discardPile.cards.push(this);

            GameArea.discardPile.element.firstChild?.remove();
            GameArea.discardPile.element.appendChild(this.instantiate(true));
        });

        return card;
    }
}