'use strict';
import template from './home.html';
// component controller
class homeController {
  constructor() {
    'ngInject';
    this.projectFooter = 'albums';
    this.navbarLinkes = [{
        text: 'All Users',
        uiSref: 'users'
      },
      {
        text: 'All Albums',
        uiSref: 'albums'
      }
    ];
  }
}
//component settings
let homeComponent = {
  template: template,
  controllerAs: 'homeCtrl',
  controller: homeController
};
/**
 * @ngdoc module
 * @name homeModule
 * @module homeModule
 * @description  this is the layout module
 */

export default angular.module('homeModule', [])
  .component('homeComponent', homeComponent)
  .name;