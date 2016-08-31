(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('button', {
      url: '/button',
      templateUrl: 'app/button/button.html',
      controller: 'ButtonController',
      controllerAs: 'button'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
