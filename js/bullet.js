function Bullet(ctx, x, y) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width / 80;
  this.h = this.w * 0.5;

  this.x = x;
  this.y = y;

  this.img = new Image();
  this.img.src = "img/bullet.png";

  this.g = 1;

  this.vx = 10;
  this.vy = -10;
}

Bullet.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
  );
};

Bullet.prototype.move = function() {
  this.x += this.vx;

  this.vy += this.g;
  this.y += this.vy;

  if (this.y >= (this.ctx.canvas.height * 0.9)) {
    this.vy *= -1;
  }
};
