var Frame = function(frame) {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.bonusRoll = 0;
  this.rollOneIndex = null
  this.rollTwoIndex = null
  this.rollBonusIndex = null
};

Frame.prototype.setRollOneScore = function(roll) {
  if(roll < 11){
    this.rollOne = roll;
  }else {
    0
  };
};

Frame.prototype.getRollOneScore = function() {
  return this.rollOne
};

Frame.prototype.setRollTwoScore = function(roll) {
    return this.rollTwo = roll.getPinsHit()
};

Frame.prototype.getRollTwoScore = function() {
  return this.rollTwo
};

Frame.prototype.setRollOneIndex = function(index) {
    return this.rollOneIndex = index
};

Frame.prototype.setRollTwoIndex = function(index) {
    return this.rollTwoIndex = index
};

Frame.prototype.setRollBonusIndex = function(index) {
    return this.rollBonusIndex = index
};


