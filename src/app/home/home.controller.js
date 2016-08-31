(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    vm.title1 = 'Button';
    vm.title4 = 'Warn';
    vm.isDisabled = true;
    vm.googleUrl = 'http://google.com';
  }
})();
