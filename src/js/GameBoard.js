export default class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.oldIndex = 0;
    this.itemIndex = 0;
    this.missedGoblin = 0;
    this.board = document.getElementById('board');
  }

  drawBoard() {
    // const board = document.getElementsByClassName('board')[0];
    for (let index = 0; index < this.boardSize; index += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${index}`;
      this.board.appendChild(itemBoard);
    }
    this.randomImg();
  }

  randomImg() {
    const interval = setInterval(() => {
      do {
        this.itemIndex = Math.floor(Math.random() * this.boardSize);
      } while (this.itemIndex === this.oldIndex);
      if (this.oldIndex >= 0) {
        const oldItemField = document.getElementById(`field${this.oldIndex}`);
        oldItemField.innerHTML = '';
      }
      const itemField = document.getElementById(`field${this.itemIndex}`);
      itemField.innerHTML = '<img id = "goblin" src = "./img/goblin.png">';
      this.oldIndex = this.itemIndex;
      this.missedGoblin += 1;
      if (this.missedGoblin === 6) {
        clearInterval(interval);
        alert('Игра окончена');
      }
    }, 1000);
  }
}
