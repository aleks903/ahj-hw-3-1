export default class GamePlay {
  constructor(gamePad) {
    this.numberHits = 0;
    this.gamePad = gamePad;
  }

  init() {
    const printPoint = document.getElementById('points');
    this.gamePad.board.addEventListener('click', (event) => {
      // console.log(event);
      if (event.target.id === 'goblin') {
        this.gamePad.missedGoblin = 0;
        this.numberHits += 1;
        printPoint.innerHTML = this.numberHits;
        const elementGoblin = event.target;
        elementGoblin.parentNode.innerHTML = '';
      }
    });
  }
}
