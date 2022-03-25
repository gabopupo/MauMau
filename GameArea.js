import DiscardPile from "./DiscardPile.js";
import DrawPile from "./DrawPile.js";

class GameArea {
    constructor() {
        this._drawPile = new DrawPile();
        this._discardPile = new DiscardPile();
        this._element = this.createGameArea();
        this._players = new Array();
    }

    get drawPile() {
        return this._drawPile;
    }

    get discardPile() {
        return this._discardPile;
    }
    
    get element() {
        return this._element;
    }

    get players() {
        return this._players;
    }

    set drawPile(drawPile) {
        this._drawPile = drawPile;
    }

    set discardPile(discardPile) {
        this._discardPile = discardPile;
    }

    set element(element) {
        this._element = element;
    }

    set players(players) {
        this._players = players;
    }

    createGameArea() {
        const gameArea = document.createElement('div');
        gameArea.classList.add('game-area');
        gameArea.appendChild(this.discardPile.element);
        gameArea.appendChild(this.drawPile.element);

        document.body.appendChild(gameArea);

        return gameArea;
    }

    addPlayer(player) {
        this._players.push(player);
        
        switch (this._players.length) {
            case 1:
                player.deckElement.classList.add('bottom');
                break;
            case 2:
                player.deckElement.classList.add('top');
                break;
            case 3:
                player.deckElement.classList.add('left');
                break;
            case 4:
                player.deckElement.classList.add('right');
                break;
        }
    }
}

export default new GameArea();