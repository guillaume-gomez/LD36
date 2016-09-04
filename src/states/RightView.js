import { TextPosition, StringDialog, FloorY, HeightTypeRecorder } from '../Constants.js';
import { OnLeftOfLayer, OnRightOfLayer } from '../ConstantsHeroPosition.js';
import Character from 'objects/Character';
import InformationString from 'objects/InformationString.js';

class RightView extends Phaser.State {

 constructor() {
    super();
    this.originalPosition = OnLeftOfLayer;
  }

  init(params = null) {
    if(params) {
      this.originalPosition.x = params.x;
      this.originalPosition.y = params.y;
    } else {
      this.originalPosition = OnLeftOfLayer;
    }
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map3');
    this.map.addTilesetImage('myTileset', 'Tileset');
    this.map.setCollisionBetween(770, 785);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.hero = new Character(this.game, this.originalPosition.x , this.originalPosition.y, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.text = new InformationString(this.game, 1300, StringDialog.TypePassWord);
    this.game.add.existing(this.text);
  }


  update() {
    if(this.hero.x < 0 ) {
      this.game.goToMainGame(OnRightOfLayer);
    }
    this.game.physics.arcade.collide(this.hero, this.layer);
    //this.game.physics.arcade.overlap(this.hero, this.typeRecorder, this.displayTextTypeRecorder, null, this);
  }

  preload() {
    this.game.load.image("test", "res/test.png");
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.tilemap('Map3', "res/ThirdLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  displayTextTypeRecorder() {
    this.text.blink();
    if(this.enterButton.isDown) {
      this.game.goToTypeRecordScreen();
    }
  }
}

export default RightView;
