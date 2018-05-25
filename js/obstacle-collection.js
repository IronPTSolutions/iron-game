function ObstacleCollection(ctx) {
  this.ctx = ctx;

  this.obstacles = [];

  this.drawCounter = 0;
}

ObstacleCollection.prototype.draw = function() {
  this.drawCounter++;

  this.generateObstacle();

  this.obstacles.forEach(function(o) {
    o.draw();
  });

  this.cleanObstacles();
};

ObstacleCollection.prototype.move = function() {
  this.obstacles.forEach(function(o) {
    o.move();
  });
};

ObstacleCollection.prototype.isCollisions = function(drawable) {
};

ObstacleCollection.prototype.generateObstacle = function() {
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

ObstacleCollection.prototype.cleanObstacles = function() {
};
