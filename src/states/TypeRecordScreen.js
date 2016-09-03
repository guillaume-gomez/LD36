const yPosition = 350;

const leftPosition = {
  x: 182,
  y: yPosition
}

const rightPosition = {
  x: 276,
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
    let rotatorRight = this.game.add.sprite(rightPosition.x, rightPosition.y, "rotator");
    rotatorRight.scale.setTo(scaleRotator, scaleRotator);
  }

  preload() {
    this.game.load.image("typeRecorder", "res/type-recorder.png");
    this.game.load.image("rotator", "res/rotator.png");
  }

  update() {
    //
  }

}

export default TypeRecordScreen;
