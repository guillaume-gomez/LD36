import { TextPosition, StringDialog, FloorY, HeightTypeRecorder, DoorPosition, Width, DoorTextOffset, WidthSpriteSheetHero, HeightSpriteSheetHero } from '../Constants.js';
import { OnLeftOfLayer, OnRightOfLayer } from '../ConstantsHeroPosition.js';
import Character from 'objects/Character';
import InformationString from 'objects/InformationString.js';
import CodeUI from "objects/CodeUI.js";
import { loadColissionMap, collideLadder } from "../platformerUtils.js";

const OffsetPwdUi = 100;

class RightView extends Phaser.State {

 constructor() {
    super();
    this.originalPosition = Object.assign( {}, OnLeftOfLayer);
  }

  init(params = null) {
    if(params) {
      this.originalPosition.x = params.x;
      this.originalPosition.y = params.y;
    } else {
      this.originalPosition = Object.assign( {}, OnLeftOfLayer);
    }
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Add the physics engine to all game objects
    this.game.world.enableBody = true;

    this.map = this.game.add.tilemap('Map3');
    this.map.addTilesetImage('myTileset', 'Tileset');
    loadColissionMap(this.map);

    this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();


    if(!this.game.doorOpened) {
      this.door = this.game.add.sprite(DoorPosition.x, DoorPosition.y, "Door");
      this.door.body.immovable = true;
    }

    this.ladder = this.game.add.sprite(32,221, "Ladder");
    this.ladder.body.immovable = true;

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    this.text = new InformationString(this.game, DoorPosition.x - DoorTextOffset, StringDialog.typePassword);
    this.game.add.existing(this.text);


    const fn = () => {
      this.door.kill();
      this.game.doorOpened = true;
    };

    this.passwordUI = new CodeUI(this.game, DoorPosition.x - OffsetPwdUi, fn);
    this.game.add.existing(this.passwordUI);

    this.hero = new Character(this.game, this.originalPosition.x , this.originalPosition.y, "test", 0);
    this.game.add.existing(this.hero);
    this.game.camera.follow(this.hero);

    this.game.time.advancedTiming = true;
  }


  update() {
    if(this.hero.x < 0 ) {
      this.game.goToMainGame(OnRightOfLayer);
    }
    if(this.hero.x + this.hero.width > this.game.world.width) {
      this.game.goToFourthScreen(OnLeftOfLayer);
    }
    this.game.physics.arcade.collide(this.hero, this.layer);
    this.game.physics.arcade.collide(this.hero, this.door, this.displayTextPassword, null, this);
    collideLadder(this.game, this.hero, this.ladder);
    if(this.hero.isDeath()) {
      const position = this.originalPosition.x < (Width/2) ? OnLeftOfLayer : OnRightOfLayer;
      this.game.goToThirdLevel(position);
    }
  }

  preload() {
    this.game.load.spritesheet("test", "res/hero.png", WidthSpriteSheetHero, HeightSpriteSheetHero);
    this.game.load.image('Tileset', "res/tileset.png");
    this.game.load.image('Door',"res/door.png");
    this.game.load.image('Ladder', "res/ladder.png");
    this.game.load.tilemap('Map3', "res/rightLevel.json", null, Phaser.Tilemap.TILED_JSON);
  }

  displayTextPassword() {
    this.text.blink();
    this.passwordUI.showText();
  }

  /*render() {
    this.game.debug.body(this.ladder);
    this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
  }*/
}

export default RightView;
