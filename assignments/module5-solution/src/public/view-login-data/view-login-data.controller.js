(function () {
"use strict";

angular.module('public')
.controller('ViewLoginDataController', ViewLoginDataController);

ViewLoginDataController.$inject = ['userData','ApiPath'];
function ViewLoginDataController(userData, ApiPath) {
  var vldCtrl = this;

  if (userData != undefined) {
    vldCtrl.firstname = userData.firstname;
    vldCtrl.lastname = userData.lastname;
    vldCtrl.email = userData.email;
    vldCtrl.phone = userData.phone;
    vldCtrl.menu_item_name = userData.menu_item.name;
    vldCtrl.menu_item_description = userData.menu_item.description;
    vldCtrl.menu_item_image_path = ApiPath + "/images/" + userData.menu_item.short_name + ".jpg";
    vldCtrl.registered = true;
  } else {
    vldCtrl.registered = false;
  }

}


})();
