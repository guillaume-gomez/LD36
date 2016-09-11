import { TextPosition, StringDialog, FloorY, TypeRecorderPosition, HeightTypeRecorder, WidthSpriteSheetHero, HeightSpriteSheetHero } from '../Constants.js';
import { OnRightOfLayer, OnLeftOfLayer } from '../ConstantsHeroPosition.js';
import Character from 'objects/Character';
import InformationString from 'objects/InformationString.js';
import { loadColissionMap } from "../platformerUtils.js";

class LeftView extends Phaser.State {

 constructor() {
    super();
    this.originalPosition = { x:0, y:0 };
  }

  init(params = null) {
    if(params) {
      this.originalPosition.x = params.x;
      this.originalPosition.y = params.y;
    } else {
      this.originalPosition = Object.assign( {}, OnRightOfLayer);
    }
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map2');
    this.map.addTilesetImage('myTileset', 'Tileset');
    loadColissionMap(this.map);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.typeRecorder = this.game.add.sprite(TypeRecorderPosition.x, TypeRecorderPosition.y - HeightTypeRecorder, "typeRecorder");

    this.hero = new Character(this.game, this.originalPosition.x , this.originalPosition.y, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.text = new InformationString(this.game, TypeRecorderPosition.x, StringDialog.useTypeRecorder);
    this.game.add.existing(this.text);
  }


  update() {
    if(this.hero.x + this.hero.width > this.game.world.width) {
      this.game.goToMainGame(OnLeftOfLayer);
    }
    if(this.hero.x < 0) {
      this.game.goToEndGameScreen();
    }
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.overlap(this.hero, this.typeRecorder, this.displayTextTypeRecorder, null, this);
  }

  preload() {
    this.game.load.spritesheet("test", "res/hero.png",WidthSpriteSheetHero, HeightSpriteSheetHero);
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image("typeRecorder", "res/type-recorder-min.png");
    const filename =  !this.game.sawEnd ? "res/secondLevel.json" : "res/secondLevelFinish.json";
    this.game.load.tilemap('Map2', filename, null, Phaser.Tilemap.TILED_JSON);
  }

  displayTextTypeRecorder() {
    this.text.blink();
    if(this.enterButton.isDown) {
      this.game.goToTypeRecordScreen();
    }
  }
}

export default LeftView;
