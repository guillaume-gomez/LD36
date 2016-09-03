import { StringDialog, TextPosition, PositionAfterComputer } from '../Constants.js';
import Character from 'objects/Character';

class GameState extends Phaser.State {

  constructor() {
    super();
    this.originalPosition = { x:0, y:0 };
  }

  init(shouldReload = true) {
    if(!shouldReload) {
      this.originalPosition.x = PositionAfterComputer.x;
      this.originalPosition.y = PositionAfterComputer.y;
    } else {
      this.originalPosition.x = 20;
      this.originalPosition.y = 20;
    }
  }
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map1');
    this.map.addTilesetImage('myTileset', 'Tileset');
    this.map.setCollisionBetween(455, 469);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.computer = this.game.add.sprite(300, 382, "computer");

    this.hero = new Character(this.game, this.originalPosition.x , this.originalPosition.y, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    const style = { font: "bold 15px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    this.text = this.game.add.text(TextPosition.x, TextPosition.y, StringDialog.onComputer, style);
    this.text.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    this.text.setTextBounds(TextPosition.x0, TextPosition.y0, TextPosition.x1, TextPosition.y1);
    this.text.visible = false;
  }


  update() {
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.overlap(this.hero, this.computer, this.writePressEnter, null, this);
  }

  preload() {
    this.game.load.spritesheet('hero', 'res/blue_sheet.png', 32, 32);
    this.game.load.image("test", "res/test.png");
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image("computer", "res/computer.png");
    this.game.load.tilemap('Map1', "res/firstLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  writePressEnter() {
    this.text.visible = true;
    if(this.enterButton.isDown) {
      this.game.goToScreenMode();
    }
  }

  // render() {
  //   this.game.debug.spriteInfo(this.hero, 32, 400);
  // }

}

export default GameState;
