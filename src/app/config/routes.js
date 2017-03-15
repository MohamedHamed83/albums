'use strict';


export default function routes($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
  'ngInject';
  cfpLoadingBarProvider.includeSpinner = true;
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
  // albums routes
  $stateProvider
    .state('albums', {
      url: '/',
      component: 'albumsComponent',
      resolve: {
        allAlbums: ($resourceService, $q) => {
          return $q.all([
            $resourceService.getAllAlbums(),
            $resourceService.getAllUsers()
          ]);
        }
      }
    })
    .state('photosPerAlbum', {
      url: '/photos-per-album/:albumId',
      component: 'photosPerAlbumComponent',
      resolve: {
        allPhotosPerAlbum: ($resourceService, $stateParams) => {
          return $resourceService.getPhotosPerAlbums($stateParams.albumId);
        }
      }
    });

}
