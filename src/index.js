import MainView from 'states/MainView';
import ComputerScreen from 'states/ComputerScreen';
import TypeRecordScreen from 'states/TypeRecordScreen';
import LeftView from 'states/LeftView';
import RightView from 'states/RightView';

class Game extends Phaser.Game {

  constructor() {
    super(500, 500, Phaser.AUTO, 'content', null);
    this.state.add('MainView', MainView, false);
    this.state.add('ComputerScreen', ComputerScreen, false);
    this.state.add('TypeRecordScreen', TypeRecordScreen, false);
    this.state.add('LeftView', LeftView, false);
    this.state.add('RightView', RightView, false);
    this.state.start('RightView');
    //this.state.start('LeftView');
  }

  goToScreenMode() {
    this.state.start('ComputerScreen');
  }

  goToMainGame(params = null) {
    this.state.start('MainView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideRight, true, true, params);
  }

  goToSecondLevel(params = null) {
    this.state.start('LeftView', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToThirdLevel(params = null) {
    this.state.start('RightView', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToTypeRecordScreen() {
    this.state.start('TypeRecordScreen');
  }


}

new Game();
