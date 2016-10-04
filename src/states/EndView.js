class EndView extends Phaser.State {

  create() {
    this.game.add.text(120, 200, "Thanks for playing  again ! :)", { font: "bold 21px Arial", fill: "#fff" })
    this.game.add.text(40, 280, "I hope you enjoyed playing it as much I did coding it!", { font: "bold 18px Arial", fill: "#fff" });
  }

  preload() {
  }

  update() {
  }

}

export default EndView;
