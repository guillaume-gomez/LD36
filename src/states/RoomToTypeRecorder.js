//import {  } from '../Constants.js';
import Character from 'objects/Character';

class RoomToTypeRecorder extends Phaser.State {

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map2');
    this.map.addTilesetImage('myTileset', 'Tileset');
    this.map.setCollisionBetween(770, 785);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.typeRecorder = this.game.add.sprite(1500, 382, "typeRecorder");

    this.hero = new Character(this.game, 1560 , 416, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    // this.text = this.game.add.text(TextPosition.x, TextPosition.y, StringDialog.onComputer, Style);
    // this.text.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    // this.text.setTextBounds(TextPosition.x0, TextPosition.y0, TextPosition.x1, TextPosition.y1);
    // this.text.visible = false;
  }


  update() {
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.overlap(this.hero, this.typeRecorder, this.writeCode, null, this);
  }

  preload() {
    this.game.load.image("test", "res/test.png");
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image("typeRecorder", "res/computer.png");
    this.game.load.tilemap('Map2', "res/secondLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  writeCode() {

  }

  render() {
    this.game.debug.spriteInfo(this.hero, 32, 400);
  }


}

export default RoomToTypeRecorder;
