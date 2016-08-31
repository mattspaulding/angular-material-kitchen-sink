(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
