'use strict';
import template from './listview.html';
// component controller
export class listviewController {
  constructor() {
    'ngInject';
  }
  getSelectedItem(listitem) {
    this.setSelectedItem({
      item: listitem
    });
  }
}
//component settings
export const listviewComponent = {
  template: template,
  controllerAs: 'listviewCtrl',
  controller: listviewController,
  bindings: {
    allItems: '=',
    listSearchString: '=',
    setSelectedItem: '&'
  }
};
