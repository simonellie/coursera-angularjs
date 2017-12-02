(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetails', {
  templateUrl: 'src/templates/item-list.template.html',
  bindings: {
    items: '<',
    category: '<'
  }
});

})();
