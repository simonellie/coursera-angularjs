(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsMenuComponentController', ItemsMenuComponentController);

ItemsMenuComponentController.$inject = ['items'];
function ItemsMenuComponentController (items) {
  var $ctrl = this;
  $ctrl.category = items.category.name;
  $ctrl.items = items.menu_items;
};

})();
