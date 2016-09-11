const LimitY = 550;
const TimeLapse = 10;
class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.cursor = game.input.keyboard.createCursorKeys();
    this.locked = false;
    const fn = () => {this.body.gravity.y = 500;};
    setTimeout(fn, 500);
    this.isClimbing = false;
    const leftArray = [28, 27, 26, 25, 24, 23, 22, 21];
    const rightArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const JumpArray = [9, 10, 11, 12, 14];

    this.animations.add('jump', JumpArray, TimeLapse, false);
     this.animations.add('left', leftArray, TimeLapse, true);
    this.animations.add('right', rightArray, TimeLapse, true);
  }

  update() {
    if(this.locked) {
      this.body.velocity.x = 0;
      return;
    }

    if (this.cursor.left.isDown) {
        this.body.velocity.x = -200;
        this.animations.play("left", TimeLapse);
    }
    else if (this.cursor.right.isDown) {
        this.body.velocity.x = 200;
        this.animations.play("right", TimeLapse);
    } else {
      this.body.velocity.x = 0;
       this.animations.stop('jump');
       this.animations.stop('left');
       this.animations.stop('right');
       this.frame.
    }
    // Make the player jump if he is touching the ground
    if (this.cursor.up.isDown && this.body.onFloor()) {
      this.body.velocity.y = -270;
      this.animations.play("jump", TimeLapse);
    }

    if(this.isClimbing) {
      if(this.cursor.up.isDown) {
        this.body.velocity.y = -150;
      }
      else if(this.cursor.down.isDown) {
        this.body.velocity.y = 150;
      } else {
        this.body.velocity.y = 0;
      }
    }
  }

  isDeath() {
    if (!this.body) {
      return false;
    }
    return this.body.position.y > LimitY;
  }

  climbLadder() {
    this.body.gravity.y = 0;
    this.isClimbing = true;
  }

  leaveLadder() {
    this.body.gravity.y = 500;
    this.isClimbing = false;
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }
}

export default Character;