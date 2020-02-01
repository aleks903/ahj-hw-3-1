import GameBoard from './GameBoard.js';
import GamePlay from './GamePlay.js';

const gamesBoard = new GameBoard(4);
gamesBoard.drawBoard();
const gamePlay = new GamePlay(gamesBoard);
gamePlay.init();
