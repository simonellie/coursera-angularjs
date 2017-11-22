'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric = function() {
    var totalVal = calculateNumericForString($scope.name);
    $scope.totalValue = totalVal;
  }

function calculateNumericForString (string) {
  var totalNameValue = 0;
  for (var i = 0; i < string.length; i++) {
    totalNameValue += string.charCodeAt(i);
  }
  return totalNameValue;
}

});
