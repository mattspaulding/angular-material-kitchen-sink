(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(iconConfig);

  /** @ngInject */
  function iconConfig($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }

})();
