import { Code, Style, StyleRef, StringDialog, TextPosition } from '../Constants.js';

const yPosition = 370;

const leftPosition = {
  x: 203,
  y: yPosition
};

const rightPosition = {
  x: 296,
  y: yPosition
};

const ElapsedTime = 2000;
const Angle = 720;

const  SolutionPosition = {
  x : 230,
  y : 460
};

const  RefPosition = {
  x : 150,
  y : 305
};

class TypeRecordScreen extends Phaser.State {

  create() {
    let typeRecorder = this.game.add.sprite(0, 0, "typeRecorder");
    const x = (this.game.camera.x + this.game.camera.width) / 2 -  typeRecorder.width / 2;
    const y =  (this.game.camera.y + this.game.camera.height) / 2 -  typeRecorder.height / 2;
    typeRecorder.x = x;
    typeRecorder.y = y;
    const scaleRotator = 0.2;
    this.rotatorLeft = this.game.add.sprite(leftPosition.x, leftPosition.y, "rotator");
    this.rotatorLeft.scale.setTo(scaleRotator, scaleRotator);
    this.rotatorLeft.anchor.setTo(0.5, 0.5);
    this.rotatorRight = this.game.add.sprite(rightPosition.x, rightPosition.y, "rotator");
    this.rotatorRight.anchor.setTo(0.5, 0.5);
    this.rotatorRight.scale.setTo(scaleRotator, scaleRotator);

    const button = this.game.add.button(210, 70, 'button', this.play, this, 2, 1, 0);
    const buttonRewind = this.game.add.button(210, 108, 'button', this.rewind, this, 2, 1, 0);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.escapeButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);

    this.text = this.game.add.text(180, 20, StringDialog.typeRecordDialog, Style);
    this.text.visible = false;

    this.direction = 1;
    this.game.add.text(RefPosition.x, RefPosition.y, "RF1D93WH6793E", StyleRef);
    this.solution = this.game.add.text(SolutionPosition.x, SolutionPosition.y, "", Style);
  }

  preload() {
    this.game.load.image("typeRecorder", "res/type-recorder.png");
    this.game.load.image("rotator", "res/rotator.png");
    this.game.load.spritesheet('button', 'res/button.png', 33, 33);
  }

  update() {
    if(this.solution.text.length === Code.length && this.enterButton.isDown) {
      this.game.goToSecondLevel();
    }
    if(this.escapeButton.isDown) {
      this.game.goToSecondLevel();
    }
  }

  showCode() {
    if(this.solution.text.length >= Code.length) {
      return;
    }

    const partialCode = Code.split("",this.solution.text.length + 1);
    this.solution.text = partialCode.join("");

    if(this.solution.text.length == Code.length) {
      this.text.visible = true;
    }
  }

  play() {
    if(this.direction === 1) {
      const tween = this.game.add.tween(this.rotatorLeft).to( { angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true, false);
      const tween2 = this.game.add.tween(this.rotatorRight).to( { angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(this.completedPlay, this);
      tween2.onComplete.add(this.completedPlay, this);
    }
  }

  rewind() {
    if(this.direction === -1) {
      const tween = this.game.add.tween(this.rotatorLeft).to( { angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
      const tween2 = this.game.add.tween(this.rotatorRight).to( { angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
      tween.onComplete.add(this.completedRewind, this);
      tween2.onComplete.add(this.completedRewind, this);
      this.showCode();
    }
  }

  completedRewind() {
    this.direction = 1;
  }

  completedPlay() {
    this.direction = -1;
  }

}

export default TypeRecordScreen;
