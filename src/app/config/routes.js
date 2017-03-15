'use strict';


export default function routes($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {
  'ngInject';
  cfpLoadingBarProvider.includeSpinner = false;
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
    });

}
