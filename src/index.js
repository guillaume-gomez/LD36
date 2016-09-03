import GameState from 'states/GameState';
import ComputerScreen from 'states/ComputerScreen';

class Game extends Phaser.Game {

  constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.add('ComputerScreen', ComputerScreen, false);
    this.state.start('GameState');
  }

  goToScreenMode() {
    this.state.start('ComputerScreen');
  }

  goToMainGame() {
    const shouldReload = false;
    this.state.start('GameState', false, false, shouldReload);
  }

}

new Game();
