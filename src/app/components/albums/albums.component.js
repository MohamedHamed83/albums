'use strict';
import template from './albums.html';
// component controller
export class albumsController {
  constructor($timeout) {
    'ngInject';
    this.searchString = '';
    this.$timeout = $timeout;
  }
  // get selected item from the list view
  getSelectedListItem(item) {

  }
  $onInit() {
    const albumsCrl = this;
    albumsCrl.$timeout(() => {
      const mergedList = _.map(albumsCrl.allAlbums[0], function (item) {
        return _.assign(item, _.find(albumsCrl.allAlbums[1], ['id', item.userId]));
      });
      albumsCrl.allAlbums = mergedList;
    }, 0);
  }
}
//component settings
export const albumsComponent = {
  template: template,
  controllerAs: 'albumsCtrl',
  controller: albumsController,
  bindings: {
    allAlbums: '='
  }
};

export default angular.module('albumsModule', [])
  .component('albumsComponent', albumsComponent)
  .name;
