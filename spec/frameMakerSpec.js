describe('frameMaker', function() {

  it('can create a 10 frame game', function() {
    maker = new frameMaker;
    maker.createGame(10);
    expect(maker.framesMade.length).toEqual(10)

  })

});