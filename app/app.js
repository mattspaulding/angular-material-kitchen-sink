
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
    $stateProvider.state("datePicker", {
        url: "/datePicker",
        controller: "DatePickerCtrl",
        templateUrl: "app/views/datePicker.html"
    })
    $stateProvider.state("progressCircular", {
        url: "/progressCircular",
        controller: "ProgressCircularCtrl",
        templateUrl: "app/views/progressCircular.html"
    })
    $stateProvider.state("progressLinear", {
        url: "/progressLinear",
        controller: "ProgressLinearCtrl",
        templateUrl: "app/views/progressLinear.html"
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
