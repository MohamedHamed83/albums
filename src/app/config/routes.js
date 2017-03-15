'use strict';


export default function routes($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
  'ngInject';
  cfpLoadingBarProvider.includeSpinner = true;
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');
  // albums routes
  $stateProvider
    .state('users', {
      url: '/',
      component: 'usersComponent',
      resolve: {
        allUsers: ($resourceService) => {
          return $resourceService.getAllUsers();
        }
      }
    })
    .state('albums', {
      url: '/albums',
      component: 'albumsComponent',
      resolve: {
        allAlbums: ($resourceService) => {
          return $resourceService.getAllAlbums();
        }
      }
    })
    .state('albumsPerUser', {
      url: '/albums/:userId',
      component: 'albumsComponent',
      resolve: {
        allAlbums: ($resourceService, $stateParams) => {
          return $resourceService.getAllAlbumsById($stateParams.userId);
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
