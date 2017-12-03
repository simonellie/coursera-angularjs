(function () {
  'use strict'; /* definisce lo scope
    ES: se tolgo 'use strict' e sotto setto la variabile x a 10,
        vuol dire che sto settando una variabile globale x a 10...
        tenendo 'use strict' indico la localita` dello "scope" delle
        variabili
  */

  /*ritorna il modulo, a cui associamo il controller*/
  angular.module('myFirstApp' /*nome del modulo*/, [] /*dipendenza con gli altri moduli*/)

  .controller('MyFirstController', function ($scope) {
    $scope.name = "Ema";
    $scope.sayHello = function() {
      return "Hello everybody!!!";
    }
  });

})();
