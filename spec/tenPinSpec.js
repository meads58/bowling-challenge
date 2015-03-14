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

    it('knows that when on frame 1 that the current frame is 1', function() {
      // tenP.setCurrentFrame(1)
      // expect.(getCurrentFrame).toEqual(1)
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

  describe('create the frames.', function() {

    it('Can create 10 frame objects in an array', function() {
      tenP.createGame(10)
      expect(tenP.frames.length).toEqual(10)
    })

  })

  describe('set strike.', function() {

    beforeEach(function() {
      tenP.createGame(10)
    })

    it('calls the setScoreOne function', function(){
      spyOn(tenP, "setScoreOne")
      tenP.setStrike(1)
      expect(tenP.setScoreOne).toHaveBeenCalled()
    })

    it('Increases the frameScored by one', function() {
      tenP.setStrike(1)
      expect(tenP.framesScored).toEqual(1)
    })

    it('Assigns the current frames roll one index to the current frame', function() {
      tenP.setStrike(1)
      expect(tenP.frames[0].getRollOneIndex()).toEqual(0)
    })


    it("Assigns the current frames roll two index to the next frame's index", function() {
      tenP.setStrike(1)
      expect(tenP.frames[0].getRollTwoIndex()).toEqual(1)
    })


    it("Assigns the current frames roll bonus index to the next frame's index", function() {
      tenP.setStrike(1)
      expect(tenP.frames[0].getRollBonusIndex()).toEqual(1)
    })
  })

  describe('updating frame scores.', function(){

     beforeEach(function() {
      tenP.createGame(10)
    })

    it('Will stop updating when the roll one index is null. In this example at frame 3', function() {
      frame = new Frame;
      tenP.setStrike(1)
      tenP.lastRoll = 8
      tenP.setScoreOne(2)
      tenP.framesScored = 2
      spyOn(tenP.frames[0], "setRollTwoScore")
      tenP.updateFrames()
      expect(tenP.frames[0].setRollTwoScore()).toHaveBeenCalled()
    })
  })

});



















