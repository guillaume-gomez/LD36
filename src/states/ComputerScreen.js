import { PositionAfterComputer } from '../ConstantsHeroPosition.js';

const content = [
    "",
    "Sometimes",
    "New technology rapidly become outdated and",
    "archaïc",
    "",
    "Will we use our ability to use them",
    "once they're forgotten ?",
    "",
    "Press Enter to leave the computer"
];

const frament = [
"uniform sampler2D tex0;",
"uniform sampler2D tex1;",
"",
"void main()",
"{",
"    vec4 t0 = texture2D(tex0, gl_TexCoord[0].st);",
"    vec4 t1 = texture2D(tex1, gl_TexCoord[0].st);",
"    gl_FragColor = mix(t0, t1, t1.a);",
"}"
];

class ComputerScreen extends Phaser.State {

  constructor() {
    super();
    this.finish = false;
  }

  preload() {
    this.game.load.image("frame", "res/screen-frame.png");
    this.game.load.image("stand", "res/stand.png");
  }

  create() {
    this.line = [];

    this.wordIndex = 0;
    this.lineIndex = 0;

    this.wordDelay = 100;
    this.lineDelay = 300;

    this.text = this.game.add.text(80, 70, '', { font: "15px Arial", fill: "#19de65" });
    this.nextLine();

    this.game.add.sprite(51, 400, 'stand');
    this.game.add.sprite(0,0, "frame");

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

  }

  nextLine() {
    if (this.lineIndex === content.length)
    {
      this.finish = true;
      return;
    }
    this.line = content[this.lineIndex].split(' ');
    this.wordIndex = 0;
    this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);
    this.lineIndex++;
  }

  nextWord() {
    this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");
    this.wordIndex++;
    if (this.wordIndex === this.line.length)
    {
      this.text.text = this.text.text.concat("\n");
      this.game.time.events.add(this.lineDelay, this.nextLine, this);
    }
  }

  update() {
    if(this.enterButton.isDown && this.finish) {
      this.game.goToMainGame({x: PositionAfterComputer.x, y: PositionAfterComputer.y});
    }
  }

}

export default ComputerScreen;
