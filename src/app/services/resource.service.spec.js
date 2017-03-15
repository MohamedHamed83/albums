import './resource.service';
describe('$resourceService', function () {
  var $resourceService, httpBackend;
  beforeEach(angular.mock.module('resourceModule'));

  beforeEach(function () {
    angular.mock.inject(function ($injector) {
      httpBackend = $injector.get('$httpBackend');
      $resourceService = $injector.get('$resourceService');
    })
  });

  it('should getAllUsers call the API', function () {
    httpBackend.expectGET(/\/users/).respond('');
    $resourceService.getAllUsers();
    httpBackend.flush();
  });

  it('should getAllAlbums call the API', function () {
    httpBackend.expectGET(/\/albums/).respond('');
    $resourceService.getAllAlbums();
    httpBackend.flush();
  });
  it('should getAllAlbumsById call the API', function () {
    var id = 1;
    httpBackend.expectGET('http://jsonplaceholder.typicode.com/albums?userId=' + id).respond('');
    $resourceService.getAllAlbumsById(id);
    httpBackend.flush();
  });
  it('should getPhotosPerAlbums call the API', function () {
    var id = 1;
    httpBackend.expectGET('http://jsonplaceholder.typicode.com/photos?albumId=' + id).respond('');
    $resourceService.getPhotosPerAlbums(id);
    httpBackend.flush();
  });
});
