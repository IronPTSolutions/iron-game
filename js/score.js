function Score(ctx) {
  this.ctx = ctx;
  this.x = 100;
  this.y = 100;

  this.score = 0;
}

Score.prototype.draw = function() {
  this.ctx.font = "30px Verdana";
  this.ctx.fillText(Math.floor(this.score), this.x, this.y);
  this.score += 0.01;
};