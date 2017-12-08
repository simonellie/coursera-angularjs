(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://fathomless-river-70498.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
