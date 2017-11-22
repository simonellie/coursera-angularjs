
var lunchCheckerApp = angular.module('LunchCheck',[]);

lunchCheckerApp.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.listOfElems = "";

  $scope.checkNumberOfElements = function () {
    var elems = $scope.listOfElems.split(',');
    var nValuesNotNull = elems.length;
    /* only not-empty values allowed */
    for (var i = 0; i < elems.length; i++) {
      nValuesNotNull -= (elems[i] == "") ? 1 : 0;
    }

    $scope.checkResultMessage = (nValuesNotNull > 3) ? "Too much!" : (nValuesNotNull==0) ? "Please enter data first!" : "Enjoy!";
    $scope.colorResultMessage = (nValuesNotNull>0) ? 'Green' : 'Red';
  }
}
