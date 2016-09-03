const yPosition = 370;

const leftPosition = {
  x: 203,
  y: yPosition
}

const rightPosition = {
  x: 296,
  y: yPosition
}

class TypeRecordScreen extends Phaser.State {

  create() {
    let typeRecorder = this.game.add.sprite(0, 0, "typeRecorder");
    const x = (this.game.camera.x + this.game.camera.width) / 2 -  typeRecorder.width / 2;
    const y =  (this.game.camera.y + this.game.camera.height) / 2 -  typeRecorder.height / 2;
    typeRecorder.x = x;
    typeRecorder.y = y;
    const scaleRotator = 0.2;
    let rotatorLeft = this.game.add.sprite(leftPosition.x, leftPosition.y, "rotator");
    rotatorLeft.scale.setTo(scaleRotator, scaleRotator);
    rotatorLeft.anchor.setTo(0.5, 0.5);
    let rotatorRight = this.game.add.sprite(rightPosition.x, rightPosition.y, "rotator");
    rotatorRight.anchor.setTo(0.5, 0.5);
    rotatorRight.scale.setTo(scaleRotator, scaleRotator);

    this.clockWiseLeft = this.game.add.tween(rotatorLeft).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true);
    this.counterClockWiseLeft = this.game.add.tween(rotatorLeft).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true);

    this.clockWiseRight = this.game.add.tween(rotatorRight).to( { angle: 360 }, 2000, Phaser.Easing.Linear.None, true);
    this.counterClockWiseRight = this.game.add.tween(rotatorRight).to( { angle: -360 }, 2000, Phaser.Easing.Linear.None, true);
  }

  preload() {
    this.game.load.image("typeRecorder", "res/type-recorder.png");
    this.game.load.image("rotator", "res/rotator.png");
  }

  update() {
    this.clockWiseLeft.start();
    this.counterClockWiseRight.start();
  }

}

export default TypeRecordScreen;
