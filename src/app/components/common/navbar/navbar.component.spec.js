import './navbar.component';

describe('navbar Component', () => {
  beforeEach(() => {
    angular.mock.module('ngNavbarModule');
  });

  describe('navbar.Controller', () => {
    let $componentController;
    let controller;
    const mockNavbarLinkes = [{
      text: 'Albums',
      uiSref: 'albums'
    }];

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('navbarComponent', {
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
