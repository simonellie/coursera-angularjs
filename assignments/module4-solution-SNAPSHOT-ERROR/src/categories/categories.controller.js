(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesMenuComponentController', CategoriesMenuComponentController);


CategoriesMenuComponentController.$inject = ['categories'];
function CategoriesMenuComponentController (categories) {
  var catMenu = this;
  catMenu.categories = categories.data;
};

})();
