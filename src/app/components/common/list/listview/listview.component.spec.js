import '../index'

describe('listview Component', () => {
  beforeEach(() => {
    angular.mock.module('nglistviewModule');
  });

  describe('listview: Controller', () => {
    let $componentController;
    let controller;
    const mockAllItems = [{
        userId: 1,
        id: 1,
        title: "quidem molestiae enim"
      },
      {
        userId: 1,
        id: 2,
        title: "sunt qui excepturi placeat culpa"
      },
      {
        userId: 1,
        id: 3,
        title: "omnis laborum odio"
      },
      {
        userId: 1,
        id: 4,
        title: "non esse culpa molestiae omnis sed optio"
      }
    ];
    const mockSelectedItem = {};
    const mockAppSearchString = '';
    const mockSetSelectedItem = angular.noop;

    beforeEach(inject(($injector) => {
      $componentController = $injector.get('$componentController');
      controller = $componentController('listviewComponent', {
        '$scope': {}
      }, {
        allItems: mockAllItems,
        appSearchString: mockAppSearchString,
        setSelectedItem: mockSetSelectedItem
      });
    }));

    it('should show the correct items', () => {
      expect(controller.allItems).toEqual(mockAllItems);
    });
    it('should call setSelectedItem with the correct payload', () => {
      const onSelectListItemPayload = {
        item: mockSelectedItem
      };
      spyOn(controller, 'setSelectedItem');
      controller.getSelectedItem(mockSelectedItem);
      expect(controller.setSelectedItem).toHaveBeenCalledWith(onSelectListItemPayload)
    });
  });
});
