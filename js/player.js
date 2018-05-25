function Player(ctx) {
  this.ctx = null;

  this.w = null;
  this.h = null;

  this.x = null;
  this.y0 = null;
  this.y = null;

  this.vx = null;
  this.vy = null;
  this.g = null;

  this.img = null;
  //this.img.src = "";
  // this.img.frames = null;
  // this.img.frameIndex = null;
  // this.img.animateEvery = null;

  this.drawCount = null;

  this.bend = null;

  this.bullets = [];
}

Player.prototype.draw = function() {
  this.bullets.forEach(function(b) {
    b.draw();
  });
};

Player.prototype.move = function() {
};

Player.prototype.animate = function() {
  if (this.isJumping()) return;

  // ...
};

Player.prototype.jump = function() {
};

Player.prototype.shoot = function() {
};

Player.prototype.startBend = function() {
};

Player.prototype.stopBend = function() {
};

Player.prototype.isJumping = function() {
  return this.y < this.y0;
};

Player.prototype.TOP = 38;
Player.prototype.DOWN = 40;
Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;
Player.prototype.SHOOT = 32;

Player.prototype.onKeyDown = function(code) {
  switch(code) {
    case this.TOP:
      this.jump();
      break;
    case this.RIGHT:
      this.vx = 10;
      break;
    case this.LEFT:
      this.vx = -10;
      break;
    case this.DOWN:
      this.startBend();
      break;
    case this.SHOOT:
      this.shoot();
      break;
  }
};

Player.prototype.onKeyUp = function(code) {
  switch(code) {
    case this.RIGHT:
    case this.LEFT:
      this.vx = 0;
      break;
    case this.DOWN:
      this.stopBend();
  }
};
