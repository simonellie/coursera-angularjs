(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService) {
  var reg = this;
  reg.success = 0;

  reg.submit = function () {
    var user_data = {
      firstname: reg.user.firstname,
      lastname: reg.user.lastname,
      email: reg.user.email,
      phone: reg.user.phone,
      menu_item: reg.user.menu_item
    };
    var promise = RegistrationService.submit(user_data);
    promise.then(function (response) {
      user_data.menu_item = response.data;
      RegistrationService.addUser(user_data);
      reg.success = 1;
    })
    .catch(function (error) {
      console.log(error);
      reg.success = 2;
    })
  }
}


})();
