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

      //  Split the current line on spaces, so one word per array element
      this.line = content[this.lineIndex].split(' ');

      //  Reset the word index to zero (the first word in the line)
      this.wordIndex = 0;

      //  Call the 'nextWord' function once for each word in the line (line.length)
      this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

      //  Advance to the next line
      this.lineIndex++;

}

  nextWord() {

      //  Add the next word onto the text string, followed by a space
      this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

      //  Advance the word index to the next word in the line
      this.wordIndex++;

      //  Last word?
      if (this.wordIndex === this.line.length)
      {
          //  Add a carriage return
          this.text.text = this.text.text.concat("\n");

          //  Get the next line after the lineDelay amount of ms has elapsed
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
