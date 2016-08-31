(function () {
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
      .state('tech', {
        url: '/tech',
        templateUrl: 'app/tech/tech.html',
        controller: 'TechController',
        controllerAs: 'tech'
      })
      .state('autocomplete', {
        url: '/autocomplete',
        templateUrl: 'app/autocomplete/autocomplete.html',
        controller: 'AutocompleteController',
        controllerAs: 'autocomplete'
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
