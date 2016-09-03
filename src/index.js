import GameState from 'states/GameState';
import ComputerScreen from 'states/ComputerScreen';
import TypeRecordScreen from 'states/TypeRecordScreen';

class Game extends Phaser.Game {

  constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.add('ComputerScreen', ComputerScreen, false);
    this.state.add('TypeRecordScreen', TypeRecordScreen, false);
    //this.state.start('GameState');
    this.state.start('TypeRecordScreen');
  }

  goToScreenMode() {
    this.state.start('ComputerScreen');
  }

  goToMainGame() {
    const shouldReload = false;
    this.state.start('GameState', true, false, shouldReload);
  }


}

new Game();
