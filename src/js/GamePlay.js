/* eslint-disable class-methods-use-this */
export default class GamePlay {
  constructor(gamePad) {
    this.numberHits = 0;
    this.gamePad = gamePad;
    this.boardSize = gamePad.boardSize;
    this.missedGoblin = 0;
    this.oldIndex = 0;
    this.itemIndex = 0;
    this.numberHitsView = document.getElementById('points');
    this.interval = 0;
  }

  init() {
    this.gamePad.board.addEventListener('click', (event) => { this.handleBoardClick(event); });
    this.randomImg();
  }

  handleBoardClick(event) {
    if (event.target.id !== 'goblin') {
      return;
    }
    this.increaseNumberHits();
    this.resetBoardCell(event.target);
  }

  increaseNumberHits() {
    this.missedGoblin = 0;
    this.numberHits += 1;
    this.numberHitsView.innerHTML = this.numberHits;
  }

  resetBoardCell(event) {
    const elementGoblin = event;
    elementGoblin.parentNode.innerHTML = '';
  }

  randomImg() {
    this.interval = setInterval(() => { this.changePosition(); }, 1000);
  }

  changePosition() {
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
      clearInterval(this.interval);
      alert('Игра окончена');
    }
  }
}
