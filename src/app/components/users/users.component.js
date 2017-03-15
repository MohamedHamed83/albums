'use strict';
import template from './users.html';
// component controller
export class usersController {
  constructor($timeout, $resourceService) {
    'ngInject';
    this.searchString = '';
    this.$timeout = $timeout;
    this.$resourceService = $resourceService;
  }
  // get selected item from the list view
  getSelectedListItem(item) {
    this.$resourceService.loadRoute('albums',{
      userId: item.id
    } );
  }
  $onInit() {

  }
}
//component settings
export const usersComponent = {
  template: template,
  controllerAs: 'usersCtrl',
  controller: usersController,
  bindings: {
    allUsers: '='
  }
};

export default angular.module('usersModule', [])
  .component('usersComponent', usersComponent)
  .name;