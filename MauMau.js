import Player from './Player.js';
import Pile from './Pile.js';

const pile = new Pile();

const playerA = new Player("Alice", pile.cards);
const playerB = new Player("Bob", pile.cards);

console.log(playerA.toString());
console.log(playerB.toString());