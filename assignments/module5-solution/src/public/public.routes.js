(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.login', {
      url: '/login',
      templateUrl: 'src/public/login-form/login-form.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
    })
    .state('public.viewlogindata', {
      url: '/logindata',
      templateUrl: 'src/public/view-login-data/view-login-data.html',
      controller: 'ViewLoginDataController',
      controllerAs: 'vldCtrl',
      resolve: {
        userData: ['RegistrationService', function (RegistrationService) {
          return RegistrationService.getUserInfo();
        }]
      }
    });
}
})();
