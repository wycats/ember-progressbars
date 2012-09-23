describe('ProgressBars.Bar', function() {

  it('is an Em.View subclass', function() {
    expect( Em.View.detect(Em.ProgressBars.Bar) ).toBe(true);
  });

  describe('when added to the DOM', function() {
    var $fixture, view;

    beforeEach(function() {
      $fixture = $('<div />').appendTo('body');
      bar = Em.ProgressBars.Bar.create();

      Em.run(function() {
        bar.appendTo( $fixture );
      });

      waitsFor(function() {
        return $fixture.find( bar.$() ).length === 1;
      });
    });

    afterEach(function() {
      $fixture.remove();
    });

    it('renders a progress bar', function() {
      expect( $fixture.find('.progress .bar').length ).toBe(1);
    });
  });

});