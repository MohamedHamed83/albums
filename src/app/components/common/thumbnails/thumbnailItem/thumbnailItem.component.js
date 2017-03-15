'use strict';
import template from './thumbnailItem.html';

// component controller
export class thumbnailItemController {
  constructor() {
    'ngInject';

  }
  $onInit() {
  }
  selectedListItem(listItem) {
    //select list item and add active class to the item
    listItem.selected = true;
    //passing selected item to list view component
    this.setSelectedItem({
      item: listItem
    });
  }
}
//component settings
export const thumbnailItemComponent = {
  template: template,
  controllerAs: 'thumbnailItemCtrl',
  controller: thumbnailItemController,
  bindings: {
    listItem: '=',
    setSelectedItem: '&'
  }
};

