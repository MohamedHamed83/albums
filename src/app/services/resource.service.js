class resourceService {

  constructor($resource) {
    'ngInject';
    this.$resource = $resource;
  }
  /**
   * @ngdoc method
   * @name $resourceService#getAllAlbums
   *
   * @description
   * Returns list of albums.
   *
   * @returns {Array} list of albums.
   */
  getAllAlbums() {
    return this.$resource('http://jsonplaceholder.typicode.com/albums').query();
  }

}


/**
 * @ngdoc module
 * @name resourceModule
 * @module resourceModule
 * @description this module Provides HTTP Methods
 */
export default angular.module('resourceModule', [])
  /**
   * @ngdoc service
   * @name $resourceService
   * @module resourceModule
   *
   * @description Provides Albums App HTTP Methods.
   */
  .service('$resourceService', resourceService)
  .name;
