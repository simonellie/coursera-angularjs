
var shoppingListApp = angular.module('ShoppingList',[]);
shoppingListApp.controller('ToBuyController', ToBuyController);
shoppingListApp.controller('AlreadyBoughtController', AlreadyBoughtController);
shoppingListApp.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.list = ShoppingListCheckOffService.getToBuylist();

  toBuy.moveItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.list = ShoppingListCheckOffService.getBoughtList();
};

function ShoppingListCheckOffService () {
  var shoppingService = this;

  var boughtList = [];
  var toBuyList = [
                {name: "apple", quantity: 20},
                {name: "orange", quantity: 10},
                {name: "banana", quantity: 3},
                {name: "pear", quantity: 15},
                {name: "grape", quantity: 3}
               ];

  shoppingService.getBoughtList = function () {
    return boughtList;
  }

  shoppingService.getToBuylist = function () {
    return toBuyList;
  }

  shoppingService.buyItem = function (index) {
    boughtList.push(toBuyList[index]);
    toBuyList.splice(index, 1);
  }

};
