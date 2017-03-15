'use strict';
import template from './albums.html';
// component controller
export class albumsController {
  constructor() {
    'ngInject';
    this.searchString = '';
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    
  }
  $onInit() {

  }
}
//component settings
export const albumsComponent = {
  template: template,
  controllerAs: 'albumsCtrl',
  controller: albumsController,
  bindings:{
    allAlbums:'='
  }
};

export default angular.module('albumsModule', [])
  .component('albumsComponent', albumsComponent)
  .name;
