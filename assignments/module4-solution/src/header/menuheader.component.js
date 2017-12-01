(function () {
'use strict';

angular.module('MenuApp')
.component('menuappHeader', {
  templateUrl: 'src/templates/menuheader.template.html',
  controller: MenuAppHeaderController
});

MenuAppHeaderController.$inject = ['$rootScope'];
function MenuAppHeaderController ($rootScope) {
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function () {
    var cancel = $rootScope.$on('$stateChangeSuccess',
    function (event, toState, toParams, fromState, fromParams) {
      if (toState.name.length) {
        $("[ui-sref="+toState.name+"]").addClass("active");
      }
      if (fromState.name.length) {
        $("[ui-sref="+fromState.name+"]").removeClass("active");
      }
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () {
    cancellers.forEach(function (item) {
      item();
    });
};

};


})();
