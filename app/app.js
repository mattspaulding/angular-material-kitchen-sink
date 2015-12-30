
var app = angular.module('App', ['ui.router', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

app.config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("home", {
        url: "/",
        controller: "HomeCtrl",
        templateUrl: "app/views/home.html"
    })
    $stateProvider.state("autocomplete", {
        url: "/autocomplete",
        controller: "AutocompleteCtrl",
        templateUrl: "app/views/autocomplete.html"
    })
    $stateProvider.state("bottomSheet", {
        url: "/bottomSheet",
        controller: "BottomSheetCtrl",
        templateUrl: "app/views/bottomSheet.html"
    })
    $stateProvider.state("button", {
        url: "/button",
        controller: "ButtonCtrl",
        templateUrl: "app/views/button.html"
    })
    $stateProvider.state("card", {
        url: "/card",
        controller: "CardCtrl",
        templateUrl: "app/views/card.html"
    })
    $stateProvider.state("datePicker", {
        url: "/datePicker",
        controller: "DatePickerCtrl",
        templateUrl: "app/views/datePicker.html"
    })
    $stateProvider.state("gridList", {
        url: "/gridList",
        controller: "GridListCtrl",
        templateUrl: "app/views/gridList.html"
    })
    $stateProvider.state("input", {
        url: "/input",
        controller: "InputCtrl",
        templateUrl: "app/views/input.html"
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
    $stateProvider.state("toast", {
        url: "/toast",
        controller: "ToastCtrl",
        templateUrl: "app/views/toast.html"
    })
    $stateProvider.state("whiteframe", {
        url: "/whiteframe",
        templateUrl: "app/views/whiteframe.html"
    })

  
});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan', {
          'default': '400', // by default use shade 400 from the cyan palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('amber')
      .warnPalette('red')
    .backgroundPalette('grey');
});

app.config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);    
});
