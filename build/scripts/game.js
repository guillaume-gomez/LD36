(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var StringDialog = exports.StringDialog = {
  onComputer: "Press enter to use the computer",
  typeRecordDialog: "Press enter to leave",
  useTypeRecorder: "Use type recorder",
  typePassword: "Enter the password : ",
  vhsPicked: "You picked the vhs cassette"
};

var Width = exports.Width = 500;
var Height = exports.Height = 500;
var WidthSpriteSheetHero = exports.WidthSpriteSheetHero = 36;
var HeightSpriteSheetHero = exports.HeightSpriteSheetHero = 64;

var TextPosition = exports.TextPosition = {
  x: 100,
  y: 20,
  x0: 0,
  y0: 400,
  x1: 200,
  y1: 100
};

var FloorY = exports.FloorY = TextPosition.y0 + 17;

var TypeRecorderPosition = exports.TypeRecorderPosition = {
  x: 1400,
  y: FloorY
};

var ComputerPosition = exports.ComputerPosition = {
  x: 600,
  y: FloorY
};

var DoorPosition = exports.DoorPosition = {
  x: 1537,
  y: FloorY - 64 / 2 - 1
};

var VhsPosition = exports.VhsPosition = {
  x: 1530,
  y: 238
};

var DoorTextOffset = exports.DoorTextOffset = 200;
var VhsTextOffset = exports.VhsTextOffset = 200;

var offsetTypeRecorderImg = exports.offsetTypeRecorderImg = 10;
var HeightTypeRecorder = exports.HeightTypeRecorder = (52 - offsetTypeRecorderImg) / 2;
var HeightComputer = exports.HeightComputer = 63 / 2;

var Code = exports.Code = "9356";
var StyleRef = exports.StyleRef = { font: "bold 8px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
var Style = exports.Style = { font: "bold 15px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeRecorderPositionAfter = exports.PositionAfterComputer = exports.OnLeftOfLayer = exports.OnRightOfLayerVhsView = exports.OnRightOfLayer = undefined;

var _Constants = require("./Constants.js");

var OnRightOfLayer = exports.OnRightOfLayer = {
  x: 1550,
  y: _Constants.FloorY - 32
};

var OnRightOfLayerVhsView = exports.OnRightOfLayerVhsView = {
  x: 1535,
  y: _Constants.FloorY - 32 * 7
};

var OnLeftOfLayer = exports.OnLeftOfLayer = {
  x: 10,
  y: _Constants.FloorY - 32
};

var PositionAfterComputer = exports.PositionAfterComputer = {
  x: 600,
  y: _Constants.FloorY - 32
};

var TypeRecorderPositionAfter = exports.TypeRecorderPositionAfter = {
  x: 1400,
  y: _Constants.FloorY - 32
};

},{"./Constants.js":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _MainView = require('states/MainView');

var _MainView2 = _interopRequireDefault(_MainView);

var _MainMenu = require('states/MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _CommandsScreen = require('states/CommandsScreen');

var _CommandsScreen2 = _interopRequireDefault(_CommandsScreen);

var _ComputerScreen = require('states/ComputerScreen');

var _ComputerScreen2 = _interopRequireDefault(_ComputerScreen);

var _TypeRecordScreen = require('states/TypeRecordScreen');

var _TypeRecordScreen2 = _interopRequireDefault(_TypeRecordScreen);

var _LeftView = require('states/LeftView');

var _LeftView2 = _interopRequireDefault(_LeftView);

var _RightView = require('states/RightView');

var _RightView2 = _interopRequireDefault(_RightView);

var _VhsView = require('states/VhsView');

var _VhsView2 = _interopRequireDefault(_VhsView);

var _ComputerScreenVhs = require('states/ComputerScreenVhs');

var _ComputerScreenVhs2 = _interopRequireDefault(_ComputerScreenVhs);

var _EndView = require('states/EndView');

var _EndView2 = _interopRequireDefault(_EndView);

var _Constants = require('./Constants.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, _Constants.Width, _Constants.Height, Phaser.AUTO, 'content', null));

    _this.state.add('MainMenu', _MainMenu2.default, false);
    _this.state.add('CommandsScreen', _CommandsScreen2.default, false);
    _this.state.add('MainView', _MainView2.default, false);
    _this.state.add('ComputerScreen', _ComputerScreen2.default, false);
    _this.state.add('TypeRecordScreen', _TypeRecordScreen2.default, false);
    _this.state.add('LeftView', _LeftView2.default, false);
    _this.state.add('RightView', _RightView2.default, false);
    _this.state.add('VhsView', _VhsView2.default, false);
    _this.state.add('ComputerScreenVhs', _ComputerScreenVhs2.default, false);
    _this.state.add('EndView', _EndView2.default, false);
    _this.state.start('MainMenu');
    _this.hasVHS = false;
    _this.doorOpened = false;
    _this.sawEnd = false;

    return _this;
  }

  _createClass(Game, [{
    key: 'goToCommandsScreen',
    value: function goToCommandsScreen() {
      this.state.start('CommandsScreen');
    }
  }, {
    key: 'goToScreenMode',
    value: function goToScreenMode() {
      this.state.start('ComputerScreen');
    }
  }, {
    key: 'goToMainGame',
    value: function goToMainGame() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this.state.start('MainView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
    }
  }, {
    key: 'goToSecondLevel',
    value: function goToSecondLevel() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this.state.start('LeftView', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.Out.SlideRight, true, true, params);
    }
  }, {
    key: 'goToThirdLevel',
    value: function goToThirdLevel() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this.state.start('RightView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
    }
  }, {
    key: 'goToTypeRecordScreen',
    value: function goToTypeRecordScreen() {
      this.state.start('TypeRecordScreen');
    }
  }, {
    key: 'goToVHSScreen',
    value: function goToVHSScreen() {
      this.state.start('ComputerScreenVhs');
    }
  }, {
    key: 'goToFourthScreen',
    value: function goToFourthScreen() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this.state.start('VhsView', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.Out.SlideLeft, true, true, params);
    }
  }, {
    key: 'goToEndGameScreen',
    value: function goToEndGameScreen() {
      this.state.start('EndView');
    }
  }]);

  return Game;
}(Phaser.Game);

new Game();

},{"./Constants.js":1,"states/CommandsScreen":8,"states/ComputerScreen":9,"states/ComputerScreenVhs":10,"states/EndView":11,"states/LeftView":12,"states/MainMenu":13,"states/MainView":14,"states/RightView":15,"states/TypeRecordScreen":16,"states/VhsView":17}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LimitY = 550;
var TimeLapse = 10;

var Character = function (_Phaser$Sprite) {
  _inherits(Character, _Phaser$Sprite);

  function Character(game, x, y, key, frame) {
    _classCallCheck(this, Character);

    //Enable physics on the player
    var _this = _possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).call(this, game, x, y, key, frame));

    game.physics.arcade.enable(_this);
    _this.body.bounce.x = _this.body.bounce.y = 0;
    _this.cursor = game.input.keyboard.createCursorKeys();
    _this.locked = false;
    var fn = function fn() {
      _this.body.gravity.y = 500;
    };
    setTimeout(fn, 500);
    _this.isClimbing = false;
    var leftArray = [28, 27, 26, 25, 24, 23, 22, 21];
    var rightArray = [1, 2, 3, 4, 5, 6, 7, 8];
    var JumpArray = [9, 10, 11, 12, 14];
    var ladderArray = [30, 31, 32, 33, 34, 35];

    _this.animations.add('jump', JumpArray, TimeLapse, true);
    _this.animations.add('left', leftArray, TimeLapse, true);
    _this.animations.add('right', rightArray, TimeLapse, true);
    _this.animations.add('climb', ladderArray, TimeLapse, true);
    _this.animations.add('climb-down', ladderArray.reverse(), TimeLapse, true);
    _this.direction = 1;
    return _this;
  }

  _createClass(Character, [{
    key: 'update',
    value: function update() {
      if (this.locked) {
        this.body.velocity.x = 0;
        return;
      }

      if (this.cursor.left.isDown) {
        this.body.velocity.x = -200;
        this.animations.play("left", TimeLapse);
        this.direction = -1;
      } else if (this.cursor.right.isDown) {
        this.body.velocity.x = 200;
        this.animations.play("right", TimeLapse);
        this.direction = 1;
      } else {
        this.body.velocity.x = 0;
      }

      // Make the player jump if he is touching the ground
      if (this.cursor.up.isDown && this.body.onFloor()) {
        this.body.velocity.y = -270;
        this.animations.play("jump", TimeLapse);
      }

      if (this.isClimbing) {
        if (this.cursor.up.isDown) {
          this.body.velocity.y = -150;
          this.animations.play('climb', TimeLapse);
        } else if (this.cursor.down.isDown) {
          this.body.velocity.y = 150;
          this.animations.play('climb-down', TimeLapse);
        } else {
          this.body.velocity.y = 0;
        }
      }

      if (this.body.velocity.x == 0 && this.body.velocity.y == 0) {
        this.animations.stop();
        this.frame = this.direction === 1 ? 0 : 29;
      }
    }
  }, {
    key: 'isDeath',
    value: function isDeath() {
      if (!this.body) {
        return false;
      }
      return this.body.position.y > LimitY;
    }
  }, {
    key: 'climbLadder',
    value: function climbLadder() {
      this.body.gravity.y = 0;
      this.isClimbing = true;
    }
  }, {
    key: 'leaveLadder',
    value: function leaveLadder() {
      this.body.gravity.y = 500;
      this.isClimbing = false;
    }
  }, {
    key: 'lock',
    value: function lock() {
      this.locked = true;
    }
  }, {
    key: 'unlock',
    value: function unlock() {
      this.locked = false;
    }
  }]);

  return Character;
}(Phaser.Sprite);

exports.default = Character;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CodeUI = function (_Phaser$Text) {
  _inherits(CodeUI, _Phaser$Text);

  function CodeUI(game, x, callBackFn) {
    _classCallCheck(this, CodeUI);

    var _this = _possibleConstructorReturn(this, (CodeUI.__proto__ || Object.getPrototypeOf(CodeUI)).call(this, game, x, _Constants.TextPosition.y, "", _Constants.Style));

    game.input.keyboard.addCallbacks(_this, null, null, _this.keyPress);
    _this.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    _this.setTextBounds(_Constants.TextPosition.x0, _Constants.TextPosition.y0, _Constants.TextPosition.x1, _Constants.TextPosition.y1);
    _this.hide = true;
    _this.callBack = callBackFn;
    return _this;
  }

  _createClass(CodeUI, [{
    key: 'keyPress',
    value: function keyPress(char) {
      if (this.hide) {
        return;
      }

      if (char >= '0' && char <= '9') {
        this.text += char;
      }
      if (this.text === _Constants.Code) {
        this.callBack();
        this.hideText();
        this.text = "";
        return;
      }
      if (this.text.length >= _Constants.Code.length) {
        this.invalid();
      }
    }
  }, {
    key: 'hideText',
    value: function hideText() {
      this.hide = true;
    }
  }, {
    key: 'showText',
    value: function showText() {
      this.hide = false;
    }
  }, {
    key: 'invalid',
    value: function invalid() {
      var _this2 = this;

      this.text = "Invalid";
      var fn = function fn() {
        _this2.text = "";
      };
      setTimeout(fn, 2000);
    }
  }]);

  return CodeUI;
}(Phaser.Text);

exports.default = CodeUI;

},{"../Constants.js":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Timer = 500;

var InformationString = function (_Phaser$Text) {
  _inherits(InformationString, _Phaser$Text);

  function InformationString(game, x, text) {
    var timer = arguments.length <= 3 || arguments[3] === undefined ? Timer : arguments[3];

    _classCallCheck(this, InformationString);

    var _this = _possibleConstructorReturn(this, (InformationString.__proto__ || Object.getPrototypeOf(InformationString)).call(this, game, x, _Constants.TextPosition.y, text, _Constants.Style));

    game.input.keyboard.addCallbacks(_this, null, null, _this.keyPress);
    _this.setShadow(1, 1, 'rgba(0,0,0,0.7)', 1);
    _this.setTextBounds(_Constants.TextPosition.x0, _Constants.TextPosition.y0, _Constants.TextPosition.x1, _Constants.TextPosition.y1);
    _this.visible = false;
    _this.timer = timer;
    return _this;
  }

  _createClass(InformationString, [{
    key: 'blink',
    value: function blink() {
      var _this2 = this;

      var fn = function fn() {
        _this2.visible = false;
      };
      setTimeout(fn, this.timer);
      this.visible = true;
    }
  }]);

  return InformationString;
}(Phaser.Text);

exports.default = InformationString;

},{"../Constants.js":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadColissionMap = loadColissionMap;
exports.collideLadder = collideLadder;
function loadColissionMap(map) {
  map.setCollisionBetween(771, 786);
  map.setCollisionBetween(691, 700);
  map.setCollisionBetween(579, 583);
  map.setCollisionBetween(456, 470);
  map.setCollisionBetween(211, 220);
  map.setCollision([146, 147, 181, 182]);
  map.setCollision([299, 300, 301, 334, 335, 336, 369, 370, 371]);
  map.setCollision([71, 72, 106, 107]);
}

function collideLadder(game, hero, ladder) {
  var isCollide = game.physics.arcade.overlap(hero, ladder, hero.climbLadder, null, hero);
  if (!isCollide && hero.isClimbing == true) {
    hero.leaveLadder();
  }
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ConstantsHeroPosition = require("../ConstantsHeroPosition.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CommandsScreen = function (_Phaser$State) {
  _inherits(CommandsScreen, _Phaser$State);

  function CommandsScreen() {
    _classCallCheck(this, CommandsScreen);

    return _possibleConstructorReturn(this, (CommandsScreen.__proto__ || Object.getPrototypeOf(CommandsScreen)).apply(this, arguments));
  }

  _createClass(CommandsScreen, [{
    key: "create",
    value: function create() {
      this.game.add.text(10, 100, "Solve puzzles to find a way out", { font: "bold 33px Arial", fill: "#fff" });
      //this.game.add.text(100, 230, "Commands", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(30, 250, "Move", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(250, 250, "Arrows keys", { font: "bold 28px Arial", fill: "#fff" });

      this.game.add.text(30, 350, "Interact", { font: "bold 28px Arial", fill: "#fff" });
      this.game.add.text(250, 350, "Left mouse button", { font: "bold 28px Arial", fill: "#fff" });

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown) {
        this.game.goToMainGame(_ConstantsHeroPosition.OnLeftOfLayer);
      }
    }
  }]);

  return CommandsScreen;
}(Phaser.State);

exports.default = CommandsScreen;

},{"../ConstantsHeroPosition.js":2}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ConstantsHeroPosition = require("../ConstantsHeroPosition.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var content = ["", "Sometimes", "New technology rapidly become outdated and", "archaïc", "", "Will we use our ability to use them", "once they're forgotten ?", "", "Press Enter to leave the computer"];

var frament = ["uniform sampler2D tex0;", "uniform sampler2D tex1;", "", "void main()", "{", "    vec4 t0 = texture2D(tex0, gl_TexCoord[0].st);", "    vec4 t1 = texture2D(tex1, gl_TexCoord[0].st);", "    gl_FragColor = mix(t0, t1, t1.a);", "}"];

var ComputerScreen = function (_Phaser$State) {
  _inherits(ComputerScreen, _Phaser$State);

  function ComputerScreen() {
    _classCallCheck(this, ComputerScreen);

    var _this = _possibleConstructorReturn(this, (ComputerScreen.__proto__ || Object.getPrototypeOf(ComputerScreen)).call(this));

    _this.finish = false;
    return _this;
  }

  _createClass(ComputerScreen, [{
    key: "preload",
    value: function preload() {
      this.game.load.image("frame", "res/screen-frame.png");
      this.game.load.image("stand", "res/stand.png");
    }
  }, {
    key: "create",
    value: function create() {
      this.line = [];

      this.wordIndex = 0;
      this.lineIndex = 0;

      this.wordDelay = 100;
      this.lineDelay = 300;

      this.text = this.game.add.text(80, 70, '', { font: "15px Arial", fill: "#19de65" });
      this.nextLine();

      this.game.add.sprite(51, 400, 'stand');
      this.game.add.sprite(0, 0, "frame");

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    }
  }, {
    key: "nextLine",
    value: function nextLine() {
      if (this.lineIndex === content.length) {
        this.finish = true;
        return;
      }
      this.line = content[this.lineIndex].split(' ');
      this.wordIndex = 0;
      this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);
      this.lineIndex++;
    }
  }, {
    key: "nextWord",
    value: function nextWord() {
      this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");
      this.wordIndex++;
      if (this.wordIndex === this.line.length) {
        this.text.text = this.text.text.concat("\n");
        this.game.time.events.add(this.lineDelay, this.nextLine, this);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown && this.finish) {
        this.game.goToMainGame({ x: _ConstantsHeroPosition.PositionAfterComputer.x, y: _ConstantsHeroPosition.PositionAfterComputer.y });
      }
    }
  }]);

  return ComputerScreen;
}(Phaser.State);

exports.default = ComputerScreen;

},{"../ConstantsHeroPosition.js":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ConstantsHeroPosition = require("../ConstantsHeroPosition.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var OffsetX = 180;
var OffsetY = 310;
var MaxFrame = 18;

var ComputerScreenVhs = function (_Phaser$State) {
  _inherits(ComputerScreenVhs, _Phaser$State);

  function ComputerScreenVhs() {
    _classCallCheck(this, ComputerScreenVhs);

    return _possibleConstructorReturn(this, (ComputerScreenVhs.__proto__ || Object.getPrototypeOf(ComputerScreenVhs)).call(this));
  }

  _createClass(ComputerScreenVhs, [{
    key: "preload",
    value: function preload() {
      this.game.load.image("frame", "res/screen-frame.png");
      this.game.load.image("stand", "res/stand.png");
      this.game.load.spritesheet('buttonPlay', 'res/buttonPlay.png', 33, 33);
      this.game.load.spritesheet('buttonStop', 'res/buttonStop.png', 33, 33);
      this.game.load.spritesheet('buttonRestart', 'res/buttonRestart.png', 33, 33);
      this.game.load.spritesheet('buttonImageByImge', 'res/buttonImageByImage.png', 33, 33);
      this.game.load.spritesheet('videos', "res/videos.png", 372, 292);
    }
  }, {
    key: "create",
    value: function create() {
      this.screen = this.game.add.sprite(64, 50, 'videos', 0);
      this.anim = this.screen.animations.add('playVideo');
      this.game.add.sprite(51, 400, 'stand');
      this.game.add.sprite(0, -2, "frame");
      this.game.sawEnd = true;
      var buttonPlay = this.game.add.button(OffsetX, OffsetY, 'buttonPlay', this.play, this, 2, 1, 0);
      var buttonImageByImge = this.game.add.button(OffsetX + 40, OffsetY, 'buttonImageByImge', this.imageByImage, this, 2, 1, 0);
      var buttonRestart = this.game.add.button(OffsetX + 80, OffsetY, 'buttonRestart', this.restart, this, 2, 1, 0);
      var buttonStop = this.game.add.button(OffsetX + 120, OffsetY, 'buttonStop', this.rewind, this, 2, 1, 0);

      this.escapeButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.escapeButton.isDown) {
        this.game.goToMainGame({ x: _ConstantsHeroPosition.PositionAfterComputer.x, y: _ConstantsHeroPosition.PositionAfterComputer.y });
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.anim.play('playVideo', MaxFrame, false);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.screen.frame = 0;
    }
  }, {
    key: "imageByImage",
    value: function imageByImage() {
      var currentFrame = this.screen.frame;
      var newFrame = currentFrame + 1 < MaxFrame ? currentFrame + 1 : 0;
      this.screen.frame = newFrame;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.screen.frame = 0;
    }
  }]);

  return ComputerScreenVhs;
}(Phaser.State);

exports.default = ComputerScreenVhs;

},{"../ConstantsHeroPosition.js":2}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var EndView = function (_Phaser$State) {
  _inherits(EndView, _Phaser$State);

  function EndView() {
    _classCallCheck(this, EndView);

    return _possibleConstructorReturn(this, (EndView.__proto__ || Object.getPrototypeOf(EndView)).apply(this, arguments));
  }

  _createClass(EndView, [{
    key: "create",
    value: function create() {
      this.game.add.text(120, 200, "Thanks for playing  again ! :)", { font: "bold 21px Arial", fill: "#fff" });
      this.game.add.text(40, 280, "I hope you enjoyed playing it as much I did coding it!", { font: "bold 18px Arial", fill: "#fff" });
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "update",
    value: function update() {}
  }]);

  return EndView;
}(Phaser.State);

exports.default = EndView;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

var _ConstantsHeroPosition = require('../ConstantsHeroPosition.js');

var _Character = require('objects/Character');

var _Character2 = _interopRequireDefault(_Character);

var _InformationString = require('objects/InformationString.js');

var _InformationString2 = _interopRequireDefault(_InformationString);

var _platformerUtils = require('../platformerUtils.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LeftView = function (_Phaser$State) {
  _inherits(LeftView, _Phaser$State);

  function LeftView() {
    _classCallCheck(this, LeftView);

    var _this = _possibleConstructorReturn(this, (LeftView.__proto__ || Object.getPrototypeOf(LeftView)).call(this));

    _this.originalPosition = { x: 0, y: 0 };
    return _this;
  }

  _createClass(LeftView, [{
    key: 'init',
    value: function init() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (params) {
        this.originalPosition.x = params.x;
        this.originalPosition.y = params.y;
      } else {
        this.originalPosition = Object.assign({}, _ConstantsHeroPosition.OnRightOfLayer);
      }
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // Add the physics engine to all game objects
      this.game.world.enableBody = true;

      this.map = this.game.add.tilemap('Map2');
      this.map.addTilesetImage('myTileset', 'Tileset');
      (0, _platformerUtils.loadColissionMap)(this.map);

      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();

      this.typeRecorder = this.game.add.sprite(_Constants.TypeRecorderPosition.x, _Constants.TypeRecorderPosition.y - _Constants.HeightTypeRecorder, "typeRecorder");

      this.hero = new _Character2.default(this.game, this.originalPosition.x, this.originalPosition.y, "test", 0);
      this.game.add.existing(this.hero);
      this.game.camera.follow(this.hero);

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

      this.text = new _InformationString2.default(this.game, _Constants.TypeRecorderPosition.x, _Constants.StringDialog.useTypeRecorder);
      this.game.add.existing(this.text);

      this.game.time.advancedTiming = true;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.hero.x + this.hero.width > this.game.world.width) {
        this.game.goToMainGame(_ConstantsHeroPosition.OnLeftOfLayer);
      }
      if (this.hero.x < 0) {
        this.game.goToEndGameScreen();
      }
      this.game.physics.arcade.collide(this.hero, this.layer);
      this.game.physics.arcade.overlap(this.hero, this.typeRecorder, this.displayTextTypeRecorder, null, this);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet("test", "res/hero.png", _Constants.WidthSpriteSheetHero, _Constants.HeightSpriteSheetHero);
      this.game.load.image('Tileset', "res/tileset.png");
      this.game.load.image("typeRecorder", "res/type-recorder-min.png");
      var filename = !this.game.sawEnd ? "res/secondLevel.json" : "res/secondLevelFinish.json";
      this.game.load.tilemap('Map2', filename, null, Phaser.Tilemap.TILED_JSON);
    }
  }, {
    key: 'displayTextTypeRecorder',
    value: function displayTextTypeRecorder() {
      this.text.blink();
      if (this.enterButton.isDown) {
        this.game.goToTypeRecordScreen();
      }
    }

    /*render() {
      this.game.debug.body(this.ladder);
      this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
    }*/

  }]);

  return LeftView;
}(Phaser.State);

exports.default = LeftView;

},{"../Constants.js":1,"../ConstantsHeroPosition.js":2,"../platformerUtils.js":7,"objects/Character":4,"objects/InformationString.js":6}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MainMenu = function (_Phaser$State) {
  _inherits(MainMenu, _Phaser$State);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: "create",
    value: function create() {
      this.game.add.sprite(50, 100, "LD");
      this.game.add.text(100, 230, "Press enter to start", { font: "bold 34px Arial", fill: "#fff" });
      this.game.add.text(160, 350, "Thanks for playing ! :)", { font: "bold 19px Arial", fill: "#fff" });
      this.game.add.text(10, 400, "Compo during LD36(a week later ok!) in August 2016", { font: "bold 19px Arial", fill: "#fff" });
      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    }
  }, {
    key: "preload",
    value: function preload() {
      this.game.load.image("LD", "res/LD.png");
    }
  }, {
    key: "update",
    value: function update() {
      if (this.enterButton.isDown) {
        this.game.goToCommandsScreen();
      }
    }
  }]);

  return MainMenu;
}(Phaser.State);

exports.default = MainMenu;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

var _ConstantsHeroPosition = require('../ConstantsHeroPosition.js');

var _Character = require('objects/Character');

var _Character2 = _interopRequireDefault(_Character);

var _InformationString = require('objects/InformationString');

var _InformationString2 = _interopRequireDefault(_InformationString);

var _platformerUtils = require('../platformerUtils.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MainView = function (_Phaser$State) {
  _inherits(MainView, _Phaser$State);

  function MainView() {
    _classCallCheck(this, MainView);

    var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this));

    _this.originalPosition = { x: 0, y: 0 };
    return _this;
  }

  _createClass(MainView, [{
    key: 'init',
    value: function init(coord) {
      if (coord) {
        this.originalPosition.x = coord.x;
        this.originalPosition.y = coord.y;
      } else {
        this.originalPosition.x = 20;
        this.originalPosition.y = _Constants.FloorY;
      }
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // Add the physics engine to all game objects
      this.game.world.enableBody = true;

      this.map = this.game.add.tilemap('Map1');
      this.map.addTilesetImage('myTileset', 'Tileset');
      (0, _platformerUtils.loadColissionMap)(this.map);

      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();

      this.ladder = this.game.add.sprite(224, 221, "Ladder");
      this.ladder.body.immovable = true;

      this.computer = this.game.add.sprite(_Constants.ComputerPosition.x, _Constants.ComputerPosition.y - _Constants.HeightComputer, "computer");

      this.hero = new _Character2.default(this.game, this.originalPosition.x, this.originalPosition.y, "test", 0);
      this.game.add.existing(this.hero);
      this.game.camera.follow(this.hero);

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

      this.text = new _InformationString2.default(this.game, _Constants.ComputerPosition.x, _Constants.StringDialog.onComputer);
      this.game.add.existing(this.text);

      this.game.time.advancedTiming = true;
    }
  }, {
    key: 'update',
    value: function update() {
      this.game.physics.arcade.collide(this.hero, this.layer);
      this.game.physics.arcade.overlap(this.hero, this.computer, this.writePressEnter, null, this);
      if (this.hero.x < 0) {
        this.game.goToSecondLevel(_ConstantsHeroPosition.OnRightOfLayer);
      }
      if (this.hero.x + this.hero.width > this.game.world.width) {
        this.game.goToThirdLevel(_ConstantsHeroPosition.OnLeftOfLayer);
      }
      (0, _platformerUtils.collideLadder)(this.game, this.hero, this.ladder);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet("test", "res/hero.png", _Constants.WidthSpriteSheetHero, _Constants.HeightSpriteSheetHero);
      this.game.load.image('Tileset', "res/tileset.png");
      this.game.load.image("computer", "res/computer.png");
      this.game.load.image('Ladder', "res/ladder.png");
      this.game.load.tilemap('Map1', "res/firstLevel.json", null, Phaser.Tilemap.TILED_JSON);
    }
  }, {
    key: 'writePressEnter',
    value: function writePressEnter() {
      this.text.blink();
      if (this.enterButton.isDown) {
        if (!this.game.hasVHS) {
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

  }]);

  return MainView;
}(Phaser.State);

exports.default = MainView;

},{"../Constants.js":1,"../ConstantsHeroPosition.js":2,"../platformerUtils.js":7,"objects/Character":4,"objects/InformationString":6}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

var _ConstantsHeroPosition = require('../ConstantsHeroPosition.js');

var _Character = require('objects/Character');

var _Character2 = _interopRequireDefault(_Character);

var _InformationString = require('objects/InformationString.js');

var _InformationString2 = _interopRequireDefault(_InformationString);

var _CodeUI = require('objects/CodeUI.js');

var _CodeUI2 = _interopRequireDefault(_CodeUI);

var _platformerUtils = require('../platformerUtils.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var OffsetPwdUi = 100;

var RightView = function (_Phaser$State) {
  _inherits(RightView, _Phaser$State);

  function RightView() {
    _classCallCheck(this, RightView);

    var _this = _possibleConstructorReturn(this, (RightView.__proto__ || Object.getPrototypeOf(RightView)).call(this));

    _this.originalPosition = Object.assign({}, _ConstantsHeroPosition.OnLeftOfLayer);
    return _this;
  }

  _createClass(RightView, [{
    key: 'init',
    value: function init() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (params) {
        this.originalPosition.x = params.x;
        this.originalPosition.y = params.y;
      } else {
        this.originalPosition = Object.assign({}, _ConstantsHeroPosition.OnLeftOfLayer);
      }
    }
  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // Add the physics engine to all game objects
      this.game.world.enableBody = true;

      this.map = this.game.add.tilemap('Map3');
      this.map.addTilesetImage('myTileset', 'Tileset');
      (0, _platformerUtils.loadColissionMap)(this.map);

      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();

      if (!this.game.doorOpened) {
        this.door = this.game.add.sprite(_Constants.DoorPosition.x, _Constants.DoorPosition.y, "Door");
        this.door.body.immovable = true;
      }

      this.ladder = this.game.add.sprite(32, 221, "Ladder");
      this.ladder.body.immovable = true;

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

      this.text = new _InformationString2.default(this.game, _Constants.DoorPosition.x - _Constants.DoorTextOffset, _Constants.StringDialog.typePassword);
      this.game.add.existing(this.text);

      var fn = function fn() {
        _this2.door.kill();
        _this2.game.doorOpened = true;
      };

      this.passwordUI = new _CodeUI2.default(this.game, _Constants.DoorPosition.x - OffsetPwdUi, fn);
      this.game.add.existing(this.passwordUI);

      this.hero = new _Character2.default(this.game, this.originalPosition.x, this.originalPosition.y, "test", 0);
      this.game.add.existing(this.hero);
      this.game.camera.follow(this.hero);

      this.game.time.advancedTiming = true;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.hero.x < 0) {
        this.game.goToMainGame(_ConstantsHeroPosition.OnRightOfLayer);
      }
      if (this.hero.x + this.hero.width > this.game.world.width) {
        this.game.goToFourthScreen(_ConstantsHeroPosition.OnLeftOfLayer);
      }
      this.game.physics.arcade.collide(this.hero, this.layer);
      this.game.physics.arcade.collide(this.hero, this.door, this.displayTextPassword, null, this);
      (0, _platformerUtils.collideLadder)(this.game, this.hero, this.ladder);
      if (this.hero.isDeath()) {
        var position = this.originalPosition.x < _Constants.Width / 2 ? _ConstantsHeroPosition.OnLeftOfLayer : _ConstantsHeroPosition.OnRightOfLayer;
        this.game.goToThirdLevel(position);
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet("test", "res/hero.png", _Constants.WidthSpriteSheetHero, _Constants.HeightSpriteSheetHero);
      this.game.load.image('Tileset', "res/tileset.png");
      this.game.load.image('Door', "res/door.png");
      this.game.load.image('Ladder', "res/ladder.png");
      this.game.load.tilemap('Map3', "res/rightLevel.json", null, Phaser.Tilemap.TILED_JSON);
    }
  }, {
    key: 'displayTextPassword',
    value: function displayTextPassword() {
      this.text.blink();
      this.passwordUI.showText();
    }

    /*render() {
      this.game.debug.body(this.ladder);
      this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
    }*/

  }]);

  return RightView;
}(Phaser.State);

exports.default = RightView;

},{"../Constants.js":1,"../ConstantsHeroPosition.js":2,"../platformerUtils.js":7,"objects/Character":4,"objects/CodeUI.js":5,"objects/InformationString.js":6}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

var _ConstantsHeroPosition = require('../ConstantsHeroPosition.js');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var yPosition = 370;

var leftPosition = {
  x: 203,
  y: yPosition
};

var rightPosition = {
  x: 296,
  y: yPosition
};

var ElapsedTime = 2000;
var Angle = 720;

var SolutionPosition = {
  x: 230,
  y: 460
};

var RefPosition = {
  x: 150,
  y: 305
};

var TypeRecordScreen = function (_Phaser$State) {
  _inherits(TypeRecordScreen, _Phaser$State);

  function TypeRecordScreen() {
    _classCallCheck(this, TypeRecordScreen);

    return _possibleConstructorReturn(this, (TypeRecordScreen.__proto__ || Object.getPrototypeOf(TypeRecordScreen)).apply(this, arguments));
  }

  _createClass(TypeRecordScreen, [{
    key: 'create',
    value: function create() {
      var typeRecorder = this.game.add.sprite(0, 0, "typeRecorder");
      var x = (this.game.camera.x + this.game.camera.width) / 2 - typeRecorder.width / 2;
      var y = (this.game.camera.y + this.game.camera.height) / 2 - typeRecorder.height / 2;
      typeRecorder.x = x;
      typeRecorder.y = y;
      var scaleRotator = 0.2;
      this.rotatorLeft = this.game.add.sprite(leftPosition.x, leftPosition.y, "rotator");
      this.rotatorLeft.scale.setTo(scaleRotator, scaleRotator);
      this.rotatorLeft.anchor.setTo(0.5, 0.5);
      this.rotatorRight = this.game.add.sprite(rightPosition.x, rightPosition.y, "rotator");
      this.rotatorRight.anchor.setTo(0.5, 0.5);
      this.rotatorRight.scale.setTo(scaleRotator, scaleRotator);

      var button = this.game.add.button(210, 70, 'buttonPlay', this.play, this, 2, 1, 0);
      var buttonRewind = this.game.add.button(210, 108, 'buttonRewind', this.rewind, this, 2, 1, 0);

      this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
      this.escapeButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);

      this.text = this.game.add.text(180, 20, _Constants.StringDialog.typeRecordDialog, _Constants.Style);
      this.text.visible = false;

      this.direction = 1;
      this.game.add.text(RefPosition.x, RefPosition.y, "RF1D93WH6793E", _Constants.StyleRef);
      this.solution = this.game.add.text(SolutionPosition.x, SolutionPosition.y, "", _Constants.Style);
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.image("typeRecorder", "res/type-recorder.png");
      this.game.load.image("rotator", "res/rotator.png");
      this.game.load.spritesheet('buttonPlay', 'res/buttonPlayTypeRecorder.png', 33, 33);
      this.game.load.spritesheet('buttonRewind', 'res/buttonRewindTypeRecorder.png', 33, 33);
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.solution.text.length === _Constants.Code.length && this.enterButton.isDown) {
        this.game.goToSecondLevel(_ConstantsHeroPosition.TypeRecorderPositionAfter);
      }
      if (this.escapeButton.isDown) {
        this.game.goToSecondLevel(_ConstantsHeroPosition.TypeRecorderPositionAfter);
      }
    }
  }, {
    key: 'showCode',
    value: function showCode() {
      if (this.solution.text.length >= _Constants.Code.length) {
        return;
      }

      var partialCode = _Constants.Code.split("", this.solution.text.length + 1);
      this.solution.text = partialCode.join("");

      if (this.solution.text.length == _Constants.Code.length) {
        this.text.visible = true;
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.direction === 1) {
        var tween = this.game.add.tween(this.rotatorLeft).to({ angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true, false);
        var tween2 = this.game.add.tween(this.rotatorRight).to({ angle: Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.completedPlay, this);
        tween2.onComplete.add(this.completedPlay, this);
      }
    }
  }, {
    key: 'rewind',
    value: function rewind() {
      if (this.direction === -1) {
        var tween = this.game.add.tween(this.rotatorLeft).to({ angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
        var tween2 = this.game.add.tween(this.rotatorRight).to({ angle: -Angle }, ElapsedTime, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.completedRewind, this);
        tween2.onComplete.add(this.completedRewind, this);
        this.showCode();
      }
    }
  }, {
    key: 'completedRewind',
    value: function completedRewind() {
      this.direction = 1;
    }
  }, {
    key: 'completedPlay',
    value: function completedPlay() {
      this.direction = -1;
    }
  }]);

  return TypeRecordScreen;
}(Phaser.State);

exports.default = TypeRecordScreen;

},{"../Constants.js":1,"../ConstantsHeroPosition.js":2}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _Constants = require('../Constants.js');

var _ConstantsHeroPosition = require('../ConstantsHeroPosition.js');

var _Character = require('objects/Character');

var _Character2 = _interopRequireDefault(_Character);

var _InformationString = require('objects/InformationString.js');

var _InformationString2 = _interopRequireDefault(_InformationString);

var _platformerUtils = require('../platformerUtils.js');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var VhsView = function (_Phaser$State) {
  _inherits(VhsView, _Phaser$State);

  function VhsView() {
    _classCallCheck(this, VhsView);

    var _this = _possibleConstructorReturn(this, (VhsView.__proto__ || Object.getPrototypeOf(VhsView)).call(this));

    _this.originalPosition = Object.assign({}, _ConstantsHeroPosition.OnLeftOfLayer);
    return _this;
  }

  _createClass(VhsView, [{
    key: 'init',
    value: function init() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      if (params) {
        this.originalPosition.x = params.x;
        this.originalPosition.y = params.y;
      } else {
        this.originalPosition = Object.assign({}, _ConstantsHeroPosition.OnLeftOfLayer);
      }
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // Add the physics engine to all game objects
      this.game.world.enableBody = true;

      this.map = this.game.add.tilemap('Map4');
      this.map.addTilesetImage('myTileset', 'Tileset');
      (0, _platformerUtils.loadColissionMap)(this.map);

      this.layer = this.map.createLayer('Tile Layer 1');
      this.layer.resizeWorld();

      this.ladder = this.game.add.sprite(64, 189, "Ladder");
      this.ladder.body.immovable = true;

      if (!this.game.hasVHS) {
        this.vhs = this.game.add.sprite(_Constants.VhsPosition.x, _Constants.VhsPosition.y, "Vhs");
      }

      this.text = new _InformationString2.default(this.game, _Constants.VhsPosition.x - _Constants.VhsTextOffset, _Constants.StringDialog.vhsPicked, 3000);
      this.game.add.existing(this.text);

      this.hero = new _Character2.default(this.game, this.originalPosition.x, this.originalPosition.y, "test", 0);
      this.game.add.existing(this.hero);
      this.game.camera.follow(this.hero);

      this.game.time.advancedTiming = true;
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.hero.x < 0) {
        this.game.goToThirdLevel(_ConstantsHeroPosition.OnRightOfLayer);
      }
      this.game.physics.arcade.collide(this.hero, this.layer);
      if (!this.hasVHS) {
        this.game.physics.arcade.overlap(this.hero, this.vhs, this.pickVhs, null, this);
      }

      (0, _platformerUtils.collideLadder)(this.game, this.hero, this.ladder);
      if (this.hero.isDeath()) {
        var position = !this.game.hasVHS ? _ConstantsHeroPosition.OnLeftOfLayer : _ConstantsHeroPosition.OnRightOfLayerVhsView;
        this.game.goToFourthScreen(position);
      }
    }
  }, {
    key: 'preload',
    value: function preload() {
      this.game.load.spritesheet("test", "res/hero.png", _Constants.WidthSpriteSheetHero, _Constants.HeightSpriteSheetHero);
      this.game.load.image('Tileset', "res/tileset.png");
      this.game.load.image('Vhs', "res/vhs.png");
      this.game.load.image('Ladder', "res/ladder.png");
      this.game.load.tilemap('Map4', "res/thirdLevel.json", null, Phaser.Tilemap.TILED_JSON);
    }
  }, {
    key: 'pickVhs',
    value: function pickVhs() {
      this.text.blink();
      this.vhs.kill();
      this.game.hasVHS = true;
    }

    /*render() {
      this.game.debug.body(this.ladder);
      this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
    }*/

  }]);

  return VhsView;
}(Phaser.State);

exports.default = VhsView;

},{"../Constants.js":1,"../ConstantsHeroPosition.js":2,"../platformerUtils.js":7,"objects/Character":4,"objects/InformationString.js":6}]},{},[3])
//# sourceMappingURL=game.js.map
