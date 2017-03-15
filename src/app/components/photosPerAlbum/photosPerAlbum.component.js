'use strict';
import template from './photosPerAlbum.html';
// component controller
export class photosPerAlbumController {
  constructor() {
    'ngInject';
    this.searchString = '';

  }
  $onInit() {

  }
}
//component settings
export const photosPerAlbumComponent = {
  template: template,
  controllerAs: 'photosPerAlbumCtrl',
  controller: photosPerAlbumController,
  bindings: {
    allPhotosPerAlbum: '='
  }
};

export default angular.module('photosPerAlbumModule', [])
  .component('photosPerAlbumComponent', photosPerAlbumComponent)
  .name;
