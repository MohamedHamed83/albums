import './header.component';

describe('Header Component', () => {
  beforeEach(() => {
    angular.mock.module('ngHeaderModule');
  });

  describe('Header.Controller', () => {
    let $componentController;
    let controller;
    const mockNavbarLinkes = [{
      text: 'Albums',
      uiSref: 'albums'
    }];

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('headerComponent', {
        '$scope': {}
      }, {
        navbarLinkes: mockNavbarLinkes
      });
    }));
    it('should bind the correct navbar array', () => {
      expect(controller.navbarLinkes).toEqual(mockNavbarLinkes);
    });
  });
});
