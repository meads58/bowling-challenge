describe('tenPin', function() {

  beforeEach(function() {
    tenP = new tenPin;
    frame = new Frame;
    roll = new Roll;
  })

  describe('start a game', function() {

    it('by creating a 1 frame game', function() {
      tenP.createGame(1)
      expect(tenP.frames.length).toEqual(1)
    })

    it('and able to set the last roll', function() {
      spyOn(roll, "getPinsHit").and.returnValue(4)
      expect(tenP.setLastRoll(roll)).toEqual(4)
    })
  })


  describe('strike',function() {

    it('when first roll equals 10', function(){
      expect(tenP.firstRollStrike(1, 10)).toBe(true)
    })

    it('updates the frames scored by 1', function() {
      tenP.setStrike(1)
      expect(tenP.framesScored).toBeGreaterThan(0)
    });

  })

  describe('score a frame with no strike or spare', function() {

    it('scores the first roll with 4', function() {
      tenP.createGame(1)
      spyOn(frame, "setRollOneScore")
      tenP.firstRoll(1)
      expect(frame.setRollOneScore).toHaveBeenCalled()
    });

    it('sets the first roll index to the current frame', function() {


    });

    it('scores the second roll with 2', function() {
      tenP.createGame(1)
      spyOn(frame, "setRollTwoScore")
      tenP.secondRoll(1)
      expect(frame.setRollTwoScore).toHaveBeenCalled()
    });

  })

  describe('frame with a spare', function() {

    it('if roll 1 + roll 2 = 10', function() {
      tenP.createGame(1)
      spyOn(frame, "setRollOneScore")
      tenP.firstRoll(1, 4)
      spyOn(frame, "setRollTwoScore")
      tenP.secondRoll(1, 6)

    })

  });

});



















