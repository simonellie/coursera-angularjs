
var NarrowItDownApp = angular.module('NarrowItDownApp',[]);
NarrowItDownApp.controller('NarrowItDownController', NarrowItDownController);
NarrowItDownApp.service('MenuSearchService', MenuSearchService);
NarrowItDownApp.directive('foundItems', FoundItemsDirective);
NarrowItDownApp.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective () {
  var ddo = {
    templateUrl: './loader/itemsloaderindicator.template.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
};

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService ($http, ApiBasePath) {
  var menu = this;

  menu.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var narrow = this;

  narrow.nResults = -1;
  narrow.errorMessage = "It's necessary to set a filter value!";

  narrow.attachResponseToFoundArray = function (data_response) {
    if (narrow.searchTerm != undefined && narrow.searchTerm.length) {
      narrow.nResults = data_response.menu_items.length;
      for (var i = 0; i < data_response.menu_items.length; ++i) {
        if (data_response.menu_items[i].description.toUpperCase().indexOf(narrow.searchTerm.toUpperCase()) != -1) {
          narrow.found.push({
            short_name: data_response.menu_items[i].short_name,
            name: data_response.menu_items[i].name,
            description: data_response.menu_items[i].description
          });
        }
      }
      narrow.nResults = narrow.found.length;
    } else {
      narrow.nResults = -1;
    }

    if (narrow.nResults==-1) {
      narrow.errorMessage = "It's necessary to set a filter value!";
    } else if (narrow.nResults==0) {
      narrow.errorMessage = "No results available!";
    }
  }

  narrow.removeElementFromFound = function (index) {
    narrow.found.splice(index, 1);
  }

  narrow.getMatchedMenuElements = function () {
    narrow.found = [];
    if (narrow.searchTerm != undefined && narrow.searchTerm.length) {
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
      promise.then(function (response) {
        narrow.attachResponseToFoundArray(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      narrow.nResults = -1;
      narrow.errorMessage = "It's necessary to set a filter value!";
    }
  }
};
