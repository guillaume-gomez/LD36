import { TextPosition, StringDialog } from '../Constants.js';
import Character from 'objects/Character';
import InformationString from 'objects/InformationString.js';

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

    this.typeRecorder = this.game.add.sprite(1400, 382, "typeRecorder");

    this.hero = new Character(this.game, 1550 , 325, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.text = new InformationString(this.game, 1400, StringDialog.useTypeRecorder);
    this.game.add.existing(this.text);
  }


  update() {
    if(this.hero.x + this.hero.body.velocity.x > 1560) {
      this.game.goToMainGame();
    }
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.overlap(this.hero, this.typeRecorder, this.displayTextTypeRecorder, null, this);
  }

  preload() {
    this.game.load.image("test", "res/test.png");
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image("typeRecorder", "res/computer.png");
    this.game.load.tilemap('Map2', "res/secondLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  displayTextTypeRecorder() {
    this.text.blink();
    if(this.enterButton.isDown) {
      this.game.goToTypeRecordScreen();
    }
  }
}

export default RoomToTypeRecorder;
