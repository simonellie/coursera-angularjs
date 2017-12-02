(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsMenuComponentController', ItemsMenuComponentController);

ItemsMenuComponentController.$inject = ['items'];
function ItemsMenuComponentController (items) {
  var itemMenu = this;
  itemMenu.category = items.data.category.name;
  itemMenu.items = items.data.menu_items;
};

})();
