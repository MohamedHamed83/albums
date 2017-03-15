import './home.component';

describe('home', () => {
  beforeEach(() => {
    angular.mock.module('homeModule');
  });
  describe('home.Controller', () => {
    let $componentController;
    let controller;
    const mockProjectFooter = 'albums';
    const mockNavbarLinkes = [{
      text: 'Albums',
      uiSref: 'albums'
    }];
    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('homeComponent');
    }));
    it('should bind to the correct footer', () => {
      expect(controller.projectFooter).toEqual(mockProjectFooter);
    });
    it('should bind to the correct navbar array', () => {
      expect(controller.navbarLinkes).toEqual(mockNavbarLinkes);
    });
  });
});
