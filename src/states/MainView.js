import { StringDialog, TextPosition, FloorY, ComputerPosition, HeightComputer, WidthSpriteSheetHero, HeightSpriteSheetHero } from '../Constants.js';
import { OnRightOfLayer, OnLeftOfLayer } from '../ConstantsHeroPosition.js';
import Character from 'objects/Character';
import InformationString from 'objects/InformationString';
import { loadColissionMap, collideLadder } from "../platformerUtils.js";

class MainView extends Phaser.State {

  constructor() {
    super();
    this.originalPosition = { x:0, y:0 };
  }

  init(coord) {
    if(coord) {
      this.originalPosition.x = coord.x;
      this.originalPosition.y = coord.y;
    } else {
      this.originalPosition.x = 20;
      this.originalPosition.y = FloorY;
    }
  }
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map1');
    this.map.addTilesetImage('myTileset', 'Tileset');
    loadColissionMap(this.map);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();

    this.ladder = this.game.add.sprite(224,221, "Ladder");
    this.ladder.body.immovable = true;

    this.computer = this.game.add.sprite(ComputerPosition.x, ComputerPosition.y - HeightComputer, "computer");

    this.hero = new Character(this.game, this.originalPosition.x , this.originalPosition.y, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.text = new InformationString(this.game, ComputerPosition.x, StringDialog.onComputer);
    this.game.add.existing(this.text);

    this.game.time.advancedTiming = true;
  }


  update() {
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.overlap(this.hero, this.computer, this.writePressEnter, null, this);
    if(this.hero.x < 0) {
      this.game.goToSecondLevel(OnRightOfLayer);
    }
    if(this.hero.x + this.hero.width > this.game.world.width) {
      this.game.goToThirdLevel(OnLeftOfLayer)
    }
    collideLadder(this.game, this.hero, this.ladder);
  }

  preload() {
    this.game.load.spritesheet("test", "res/hero.png", WidthSpriteSheetHero, HeightSpriteSheetHero);
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image("computer", "res/computer.png");
    this.game.load.image('Ladder', "res/ladder.png");
    this.game.load.tilemap('Map1', "res/firstLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  writePressEnter() {
    this.text.blink();
    if(this.enterButton.isDown) {
      if(!this.game.hasVHS) {
        this.game.goToScreenMode();
      } else {
        this.game.goToVHSScreen();
      }
    }
  }

   //render() {
     //this.game.debug.spriteInfo(this.hero, 32, 400);
     //this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
   //}

}

export default MainView;
