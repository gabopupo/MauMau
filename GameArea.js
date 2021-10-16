import DiscardPile from "./DiscardPile.js";
import DrawPile from "./DrawPile.js";

class GameArea {
    constructor() {
        this._drawPile = new DrawPile();
        this._discardPile = new DiscardPile();
        this._element = this.createGameArea();
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

    set drawPile(drawPile) {
        this._drawPile = drawPile;
    }

    set discardPile(discardPile) {
        this._discardPile = discardPile;
    }

    set element(element) {
        this._element = element;
    }

    createGameArea() {
        const gameArea = document.createElement('div');
        gameArea.classList.add('game-area');
        gameArea.appendChild(this.discardPile.element);
        gameArea.appendChild(this.drawPile.element);

        document.body.appendChild(gameArea);

        return gameArea;
    }
}

export default new GameArea();