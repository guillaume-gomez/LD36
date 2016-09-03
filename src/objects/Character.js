class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.gravity.y = 600;
    this.body.bounce.x = this.body.bounce.y = 0;
    this.cursor = game.input.keyboard.createCursorKeys();
    this.locked = false;
    //  const leftArray = [4, 5, 6, 7];
    //  const rightArray = [12, 13, 14, 15];
    //  const JumpArray = [1,2,3,4];

    // this.animations.add('jump', JumpArray, 10, true);
    // this.animations.add('left', leftArray, 10, true);
    // this.animations.add('right', rightArray, 10, true);
  }

  update() {
    if(this.locked) {
      this.body.velocity.x = 0;
      return;
    }

    if (this.cursor.left.isDown) {
        this.body.velocity.x = -200;
        //this.animations.play("left", 45, true);
    }
    else if (this.cursor.right.isDown) {
        this.body.velocity.x = 200;
        //this.animations.play("right", 45, true);
    } else {
      this.body.velocity.x = 0;
      // this.animations.stop('jump');
      // this.animations.stop('left');
      // this.animations.stop('right');
    }
    // Make the player jump if he is touching the ground
    if (this.cursor.up.isDown && this.body.onFloor()) {
      this.body.velocity.y = -250;
    }
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }
}

export default Character;