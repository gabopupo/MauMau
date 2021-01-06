export default class Card {
    constructor(color, kind) {
        this._color = color;
        this._kind = kind;
    }

    get color() {
        return this._color;
    }

    get kind() {
        return this._kind;
    }

    set color(color) {
        this._color = color;
    }

    set kind(kind) {
        this._kind = kind;
    }

    toString() {
        let message = this._color ? `${this._color} `: ``;
        message += `${this._kind} card`;
        return message;
    }
}