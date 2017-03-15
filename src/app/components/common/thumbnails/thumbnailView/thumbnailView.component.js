'use strict';
import template from './thumbnailView.html';
// component controller
export class thumbnailViewController {
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
export const thumbnailViewComponent = {
  template: template,
  controllerAs: 'thumbnailViewCtrl',
  controller: thumbnailViewController,
  bindings: {
    allItems: '=',
    listSearchString: '=',
    setSelectedItem: '&'
  }
};

