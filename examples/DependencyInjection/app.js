(function() {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  DIController.$inject = ['$scope', '$filter', '$injector'];
  function DIController ($scope, $filter, $injector) {
    $scope.name = "Yaakov";
    $scope.upper = function () { /*mette uppercase il valore che ha name*/
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }

    console.log($injector.annotate(DIController));
  }
})();

// function AnnotateMe (name, job, blah) {
//   return "Blah!";
// }
//
// console.log(DIController.toString());
