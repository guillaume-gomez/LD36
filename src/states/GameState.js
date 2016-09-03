import Character from 'objects/Character';

class GameState extends Phaser.State {

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map1');
    this.map.addTilesetImage('myTileset', 'Tileset');
    this.map.setCollisionBetween(455, 469);
    //this.map.setCollision(31, true, this.layer);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.hero = new Character(this.game, 20 , 20, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);
  }

  update() {
    this.game.physics.arcade.collide(this.hero, this.layer);
  }

  preload() {
    this.game.load.spritesheet('hero', 'res/blue_sheet.png', 32, 32);
    this.game.load.image("test", "res/test.png");
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.tilemap('Map1', "res/firstLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

}

export default GameState;
