(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  });

  // Premade list page
  $stateProvider.state('categoriesList', {
    url: '/categories-list',
    template: '<categories-menu categories="catMenu.categories"></categories-menu>',
    controller: 'CategoriesMenuComponentController as catMenu',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });

  $stateProvider.state('itemList', {
    url: '/categories/{categoryID}/item-list',
    template: '<item-details category="itemMenu.category" items="itemMenu.items"></item-details>',
    controller: 'ItemsMenuComponentController as itemMenu',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryID);
            }]
    }
  });
}

})();
