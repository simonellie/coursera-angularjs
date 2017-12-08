(function () {
"use strict";

angular.module('public')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$http','ApiPath'];
function RegistrationService($http, ApiPath) {
  var service = this;

  service.user = undefined;
  service.submit = function (user_data) {
    return $http({
      method: "GET",
      url: (ApiPath + "/menu_items/"+ user_data.menu_item + ".json")
    });
  }

  service.addUser = function (user_data) {
    service.user = user_data;
  }

  service.getUserInfo = function () {
    return service.user;
  }
}


})();
