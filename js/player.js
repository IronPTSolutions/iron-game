function Player(ctx) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width / 20;
  this.h = this.w * 1.8;

  this.x = this.ctx.canvas.width / 20;
  this.y0 = this.ctx.canvas.height * 0.95 - this.h;
  this.y = this.y0;

  this.vx = 0;
  this.vy = 0;
  this.g = 1;

  this.img = new Image();
  this.img.src = "img/mario.png";
  this.img.frames = 3;
  this.img.frameIndex = 0;
  this.img.animateEvery = 10;

  this.drawCount = 0;

  this.bend = false;

  this.bullets = [];
}

Player.prototype.draw = function() {
  this.drawCount++;

  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    this.img.width / this.img.frames,
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.bullets.forEach(function(b) {
    b.draw();
  });
};

Player.prototype.move = function() {
  this.animate();

  this.vy += this.g;
  this.y += this.vy;

  if (this.y0 && this.y >= this.y0) {
    this.y = this.y0;
    this.vy = 0;
  }

  this.x += this.vx;

  this.bullets.filter(function(b) {
    b.move();

    return b.x < this.ctx.canvas.width;
  }.bind(this));
};

Player.prototype.animate = function() {
  if (this.isJumping()) return;

  if (this.drawCount % this.img.animateEvery === 0) {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
};

Player.prototype.jump = function() {
  if (!this.isJumping()) {
    this.vy -= 20;
  }
};

Player.prototype.shoot = function() {
  this.bullets.push(
    new Bullet(this.ctx, (this.x + this.w), (this.y + (this.h / 2)))
  );
};

Player.prototype.startBend = function() {
  if (!this.bend) {
    this.bend = true;
    this.h /= 2;

    this.y += this.h;
    this.y0 += this.h;
  }
};

Player.prototype.stopBend = function() {
  this.bend = false;

  this.y -= this.h;
  this.y0 -= this.h;  
  this.h *= 2;
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
