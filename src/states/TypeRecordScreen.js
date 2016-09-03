const yPosition = 370;

const leftPosition = {
  x: 203,
  y: yPosition
}

const rightPosition = {
  x: 296,
  y: yPosition
}

const ElapsedTime = 2000;
const Angle = 720;

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
  }

  preload() {
    this.game.load.image("typeRecorder", "res/type-recorder.png");
    this.game.load.image("rotator", "res/rotator.png");
    this.game.load.spritesheet('button', 'res/button.png', 33, 33);
  }

  update() {
  }

  play() {
    this.game.add.tween(this.rotatorLeft).to( { angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true, false);
    this.game.add.tween(this.rotatorRight).to( { angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
  }

  rewind() {
    this.game.add.tween(this.rotatorLeft).to( { angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
    this.game.add.tween(this.rotatorRight).to( { angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
  }

}

export default TypeRecordScreen;
