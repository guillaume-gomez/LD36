//import {} from '../Constants.js';

const content = [
    "The sky above the port was the color of television,",
    " tuned to a dead channel.",
    "`It's not like I'm using,' Case heard someone say,",
    " as he shouldered his way ",
    "through the crowd around the door of the Chat. `It's",
    " like my body's developed",
    "this massive drug deficiency",
    "From Neuromancer by William Gibson",
    "",
    "Press Enter to leave the computer"
];

class ComputerScreen extends Phaser.State {

  constructor() {
    super();
    this.finish = false;
  }

  create() {
    this.line = [];

    this.wordIndex = 0;
    this.lineIndex = 0;

    this.wordDelay = 120;
    this.lineDelay = 400;

    this.text = this.game.add.text(32, 32, '', { font: "15px Arial", fill: "#19de65" });
    this.nextLine();

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
      this.game.goToMainGame();
    }
  }

}

export default ComputerScreen;
