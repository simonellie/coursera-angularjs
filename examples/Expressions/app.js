'use strict';

var msgAppModule = angular.module('MsgApp', []);
msgAppModule.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  console.log($scope.stateOfBeing);
  $scope.sayMessage = function () {
    return "Ciao!!!!!!!!!!!!!!!!!";
  };

  $scope.feedYaakov = function() {
    if ($scope.stateOfBeing = "hungry") {
      $scope.stateOfBeing = "fed";
    } else {
      $scope.stateOfBeing = "hungry";
    }
    console.log($scope.stateOfBeing);
  };
}
