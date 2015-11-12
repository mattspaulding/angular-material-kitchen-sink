
var app = angular.module('App', ['ui.router', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("home", {
        url: "/",
        controller: "HomeCtrl",
        templateUrl: "app/views/home.html"
    })
    $stateProvider.state("button", {
        url: "/button",
        controller: "ButtonCtrl",
        templateUrl: "app/views/button.html"
    })

  
});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('amber')
      .warnPalette('red')
    .backgroundPalette('grey');
});

app.config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);    
});
