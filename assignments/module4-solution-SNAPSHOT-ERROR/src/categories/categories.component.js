(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesMenu', {
  templateUrl: 'src/templates/list-categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
