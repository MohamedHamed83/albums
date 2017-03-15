class resourceService {

  constructor($resource, $state) {
    'ngInject';
    this.$resource = $resource;
    this.$state = $state;
  }
  /**
   * @ngdoc method
   * @name $plansSvc#loadRoute
   * @param {string} view name
   * @param {string} view params
   * @description
   * load selected ui route.
   */
  loadRoute(view, query) {
    this.$state.go(view, query);
  }
  /**
   * @ngdoc method
   * @name $resourceService#getPhotosPerAlbums
   *
   * @description
   * Returns list of  photos Per Album.
   *
   * @returns {Array} list of photos Per Album.
   */
  getPhotosPerAlbums(id) {
    return this.$resource(`http://jsonplaceholder.typicode.com/photos?albumId=${id}`).query();
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
  getAllAlbumsById(id) {
    return this.$resource(`http://jsonplaceholder.typicode.com/albums?userId=${id}`).query();
  }
  /**
   * @ngdoc method
   * @name $resourceService#getAllUsers
   *
   * @description
   * Returns list of users.
   *
   * @returns {Array} list of users.
   */
  getAllUsers() {
    return this.$resource('http://jsonplaceholder.typicode.com/users').query();
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
