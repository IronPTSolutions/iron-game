function Game(canvasElement) {
  this.ctx = canvasElement.getContext("2d");

  this.bg = new Background(this.ctx);
  this.player = new Player(this.ctx);
  this.obstacleCollection = new ObstacleCollection(this.ctx);
  this.score = new Score(this.ctx);

  this.intervalId = null;

  this.setKeyboardListeners();
}

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.clear();

    this.drawAll();

    this.checkGameOver();

    this.moveAll();
  }.bind(this), 16);
};

Game.prototype.drawAll = function(action) {
};

Game.prototype.moveAll = function(action) {
};

Game.prototype.checkGameOver = function() {
  if (this.obstacleCollection.isCollisions(this.player)) {
    this.gameOver();
  }
};

Game.prototype.gameOver = function() {
  clearInterval(this.intervalId);

  if (confirm("GAME OVER! Play again?")) {
    location.reload();
  }
};

Game.prototype.clear = function() {
};

Game.prototype.setKeyboardListeners = function() {
  document.onkeydown = function(event) {
    this.player.onKeyDown(event.keyCode);
  }.bind(this);

  document.onkeyup = function(event) {
    this.player.onKeyUp(event.keyCode);
  }.bind(this);
};
