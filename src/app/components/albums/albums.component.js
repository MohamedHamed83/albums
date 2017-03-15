'use strict';
import template from './albums.html';
// component controller
export class albumsController {
  constructor($timeout, $resourceService) {
    'ngInject';
    this.searchString = '';
    this.$timeout = $timeout;
    this.$resourceService = $resourceService;
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.$resourceService.loadRoute('photosPerAlbum', item.id);
  }
  $onInit() {
    const albumsCrl = this;
    albumsCrl.$timeout(() => {
      // merge users api with albums api in one array
      const mergedList = _.map(albumsCrl.allAlbums[0], function (item) {
        return _.assign(item, _.find(albumsCrl.allAlbums[1], ['id', item.userId]));
      });
      albumsCrl.allAlbums = mergedList;
    }, 200);
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
