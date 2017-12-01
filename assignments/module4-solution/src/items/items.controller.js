(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsMenuComponentController', ItemsMenuComponentController);

ItemsMenuComponentController.$inject = ['$stateParams', 'items'];
function ItemsMenuComponentController (items) {
  var $ctrl = this;
  $ctrl.category = $stateParams.categoryName;
  $ctrl.items = items.menu_items;
};

})();
