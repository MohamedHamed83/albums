'use strict';
import template from './albums.html';
// component controller
export class albumsController {
  constructor($resourceService) {
    'ngInject';
    this.searchString = '';
    this.$resourceService = $resourceService;
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.$resourceService.loadRoute('photosPerAlbum', {
      albumId: item.id
    });
  }
  $onInit() {

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
