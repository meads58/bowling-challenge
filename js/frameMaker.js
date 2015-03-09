var frameMaker = function() {
  this.framesMade = []
};

frameMaker.prototype.createGame = function(frameNumber) {
  for (i = 0; i < frameNumber; i++) {
    this.framesMade.push(new Frame(i + 1))
  }
};