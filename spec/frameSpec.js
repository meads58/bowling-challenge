describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame();
    roll = new Roll();
  })

    describe('first roll.', function() {

      it('Starts with the a rollOne score of 0', function() {
        expect(frame.rollOne).toEqual(0);
      });

      it('When 8 pins are hit, the score is assigned to rollOne', function() {
        spyOn(roll, "getPinsHit").and.returnValue(8)
        frame.setRollOneScore(roll)
        expect(frame.getRollOneScore()).toEqual(8)
      });

      it('Will not take a roll score of greater than 10', function() {
        spyOn(roll, "getPinsHit").and.returnValue(11)
        frame.setRollOneScore(roll);
        expect(frame.rollOne).toEqual(0);
      });

    });

    describe('second roll.', function() {

      it('Starts with a rollTwo score of 0', function() {
        expect(frame.rollTwo).toEqual(0);
      });

      it('Cannot have a score great than 10', function() {
        spyOn(roll, "getPinsHit").and.returnValue(11)
        frame.setRollTwoScore(roll);
        expect(frame.rollTwo).toEqual(0);
      });

    });

    it('Starts wit a bonusRoll score of 0', function() {
      expect(frame.bonusRoll).toEqual(0);
    });




});