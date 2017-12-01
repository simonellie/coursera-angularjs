(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);

ShoppingListService.$inject = ['$http', 'MenuAPI'];
function ShoppingListService ($http, MenuAPI) {
  var mdataservice = this;

  mdataservice.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (MenuAPI + "/categories.json")
    });

    return response;
  };

  mdataservice.getItemsForCategory = function (categoryShortName) {
    var response = null;
    if (categoryShortName) {
      response = $http({
        method: "GET",
        url: (MenuAPI + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });
    } else {
      response = $http({
        method: "GET",
        url: (MenuAPI + "/menu_items.json"),
      });
    }

    return response;
  };
};

})();
