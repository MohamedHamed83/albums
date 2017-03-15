// stateless components
import './common/header/header.component';
import './common/footer/footer.component';
import './common/navbar/navbar.component';
import './home/home.component';
import './common/searchBar/searchBar.component';
import './common/list/index';
import './common/thumbnails/index';

//stateful components
import './albums/albums.component';
import './photosPerAlbum/photosPerAlbum.component';
//application components module
export default angular.module('components', [
    'ngSearchBarModule', 'homeModule',
    'ngHeaderModule', 'ngFooterModule', 'ngNavbarModule',
    'nglistviewModule', 'ngThumbnailsModule', 'albumsModule',
    'photosPerAlbumModule'
  ])
  .name;
