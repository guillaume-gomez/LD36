import GameState from 'states/GameState';
import ComputerScreen from 'states/ComputerScreen';
import TypeRecordScreen from 'states/TypeRecordScreen';
import RoomToTypeRecorder from 'states/RoomToTypeRecorder';

class Game extends Phaser.Game {

  constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.add('ComputerScreen', ComputerScreen, false);
    this.state.add('TypeRecordScreen', TypeRecordScreen, false);
    this.state.add('RoomToTypeRecorder', RoomToTypeRecorder, false);
    //this.state.start('GameState');
    this.state.start('RoomToTypeRecorder');
  }

  goToScreenMode() {
    this.state.start('ComputerScreen');
  }

  goToMainGame(params = null) {
    this.state.start('GameState', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideRight, true, true, params);
  }

  goToSecondLevel(params = null) {
    this.state.start('RoomToTypeRecorder', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToTypeRecordScreen() {
    this.state.start('TypeRecordScreen');
  }


}

new Game();
