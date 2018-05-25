function ObstacleFactory(ctx) {
  this.ctx = ctx;

  this.obstacles = [];

  this.drawCounter = 0;
}

ObstacleFactory.prototype.draw = function() {
  this.drawCounter++;

  this.generateObstacle();

  this.obstacles.forEach(function(o) {
    o.draw();
  });

  this.cleanObstacles();
};

ObstacleFactory.prototype.move = function() {
  this.obstacles.forEach(function(o) {
    o.move();
  });
};

ObstacleFactory.prototype.isCollisions = function(drawable) {
  return this.obstacles.some(function(o) {
    var diffX = Math.abs((o.x + o.w) - (drawable.x + drawable.w));

    return diffX <= o.w && (drawable.y + drawable.h) >= o.y;
  });
};

ObstacleFactory.prototype.generateObstacle = function() {
  var max = 100,
      min = 50;

  var random = Math.floor(Math.random() * (max - min + 1) + min);

  if (this.drawCounter % random === 0) {
    this.drawCounter = 0;

    this.obstacles.push(
      new Obstacle(this.ctx)
    );
  }
};

ObstacleFactory.prototype.cleanObstacles = function() {
  this.obstacles = this.obstacles.filter(function(o) {
    return o.x > 0;
  });
};
