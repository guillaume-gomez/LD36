import RainbowText from 'objects/RainbowText';
import Character from 'objects/Character';

class GameState extends Phaser.State {

	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    let hero = new Character(this.game, 20 , 20, "test", 0);
    this.game.add.existing(hero);
	}

  preload() {
    this.game.load.spritesheet('hero', 'res/blue_sheet.png', 32, 32);
    this.game.load.image("test", "res/test.png", 32, 32);
  }

}

export default GameState;
