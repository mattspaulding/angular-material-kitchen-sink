(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('ButtonController', function() {
      var vm = this;

      vm.title1 = 'Button';
      vm.title4 = 'Warn';
      vm.isDisabled = true;
      vm.googleUrl = 'http://google.com';
    });
})();
