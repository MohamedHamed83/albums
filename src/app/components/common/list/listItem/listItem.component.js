'use strict';
import template from './listItem.html';

// component controller
export class listItemController {
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
export const listItemComponent = {
  template: template,
  controllerAs: 'listItemCtrl',
  controller: listItemController,
  bindings: {
    listItem: '=',
    setSelectedItem: '&'
  }
};
