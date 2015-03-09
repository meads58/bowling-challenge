var tenPin = function() {
  this.frames = []
  this.framesScored = 0
  this.lastRoll = 0
}

tenPin.prototype.createGame = function(frameNumber) {
  for (i = 0; i < frameNumber; i++) {
    this.frames.push(new Frame(i + 1))
  }
};

tenPin.prototype.setLastRoll = function(roll) {
  this.lastRoll = roll.getPinsHit()
}

tenPin.prototype.firstRoll = function(frame) {
  if (tenP.firstRollStrike(this.lastRoll) == true){
    tenPin.setStrike(frame)
  }else{
    tenP.setScoreOne(frame)
  }
};

tenPin.prototype.secondRoll = function(frame) {
  this.frames[frame - 1].setRollTwoScore(this.lastRoll)
};

tenPin.prototype.firstRollStrike = function(){
  if(this.lastRoll === 10){
    return true
  }else{
    false
  }
};

tenPin.prototype.setStrike = function(frame) {
  tenPin.setScoreOne(frame)
  this.frames[frame - 1].setRollOneIndex(frame - 1)
  this.frames[frame - 1].setRollTwoIndex(frame)
  this.frames[frame - 1].setRollBonusIndex(frame)
  this.framesScored += 1
}

tenPin.prototype.setScoreOne = function(frame) {
  console.log(this.frames[frame - 1])
  this.frames[frame - 1].setRollOneScore(this.lastRoll)
  this.frames[frame - 1].setRollOneIndex(frame - 1)
}

tenPin.prototype.updateFrames = function() {
  for (i = 0; i < framesScored; i++) {
    if (this.frames[i].rollOneIndex = null) {break}
    this.frames[i].rollTwo = this.frames[this.frames[i].rollTwoIndex]
  }
}