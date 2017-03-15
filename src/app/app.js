import 'angular-ui-router';
import 'angular-loading-bar';
import 'angular-animate';

// config files
import './config/route-to-component';
import routes from './config/routes';
// components module
import './components/index';
// services
import './services/resource.service';
/**
 * @ngdoc module
 * @requires ui.router, ui.router.components, angular-loading-bar , components, resourceModule and ngAnimate
 * @name albums
 * @module albums
 * @description This is the main module for application
 */

angular.module('albums', ['ui.router', 'ui.router.components', 'components', 'resourceModule', 'angular-loading-bar', 'ngAnimate'])
  .config(routes)
  .name;
