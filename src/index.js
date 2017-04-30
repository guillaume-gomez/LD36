import MainView from 'states/MainView';
import MainMenu from 'states/MainMenu';
import CommandsScreen from "states/CommandsScreen";
import ComputerScreen from 'states/ComputerScreen';
import TypeRecordScreen from 'states/TypeRecordScreen';
import LeftView from 'states/LeftView';
import RightView from 'states/RightView';
import VhsView from 'states/VhsView';
import ComputerScreenVhs from 'states/ComputerScreenVhs';
import EndView from 'states/EndView';
import { Width, Height } from  "./Constants.js"

class Game extends Phaser.Game {

  constructor() {
    super(Width, Height, Phaser.AUTO, 'content', null);
    this.state.add('MainMenu', MainMenu, false);
    this.state.add('CommandsScreen', CommandsScreen, false);
    this.state.add('MainView', MainView, false);
    this.state.add('ComputerScreen', ComputerScreen, false);
    this.state.add('TypeRecordScreen', TypeRecordScreen, false);
    this.state.add('LeftView', LeftView, false);
    this.state.add('RightView', RightView, false);
    this.state.add('VhsView', VhsView, false);
    this.state.add('ComputerScreenVhs', ComputerScreenVhs, false);
    this.state.add('EndView', EndView, false);
    this.state.start('MainMenu');
    this.hasVHS = false;
    this.doorOpened = false;
    this.sawEnd = false;

  }

  goToCommandsScreen() {
    this.state.start('CommandsScreen');
  }

  goToScreenMode() {
    this.state.start('ComputerScreen');
  }

  goToMainGame(params = null) {
    this.state.start('MainView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToSecondLevel(params = null) {
    this.state.start('LeftView', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.Out.SlideRight, true, true, params);
  }

  goToThirdLevel(params = null) {
    this.state.start('RightView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToTypeRecordScreen() {
    this.state.start('TypeRecordScreen');
  }

  goToVHSScreen() {
    this.state.start('ComputerScreenVhs');
  }

  goToFourthScreen(params = null) {
    this.state.start('VhsView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
  }

  goToEndGameScreen() {
    this.state.start('EndView');
  }


}

new Game();
