(function() {
  'use strict';

 angular
    .module('angularMaterialKitchenSink', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial','ngMdIcons', 'toastr']);

})();

(function() {
  'use strict';

  angular
      .module('angularMaterialKitchenSink')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();

(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .factory('githubContributor', githubContributor);

  /** @ngInject */
  function githubContributor($log, $http) {
    var apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    function getContributors(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/contributors?per_page=' + limit)
        .then(getContributorsComplete)
        .catch(getContributorsFailed);

      function getContributorsComplete(response) {
        return response.data;
      }

      function getContributorsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();

(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(toastrConfig);

  /** @ngInject */
  function toastrConfig($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();

(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(themeConfig);

  /** @ngInject */
  function themeConfig($mdThemingProvider) {
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
  }

})();

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
      })
      .state('themePicker', {
        url: '/themePicker',
        templateUrl: 'app/themePicker/themePicker.html',
        controller: 'ThemePickerController',
        controllerAs: 'themePicker'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();

(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('ThemePickerController', function ($scope, $mdColorPalette) {
      $scope.colors = Object.keys($mdColorPalette);

      $scope.mdURL = 'https://material.google.com/style/color.html#color-color-palette';
      $scope.primary = 'purple';
      $scope.accent = 'green';

      $scope.isPrimary = true;

      $scope.selectTheme = function (color) {
        if ($scope.isPrimary) {
          $scope.primary = color;

          $scope.isPrimary = false;
        }
        else {
          $scope.accent = color;

          $scope.isPrimary = true;
        }
      };
    })
    .directive('themePreview', function () {
      return {
        restrict: 'E',
        templateUrl: 'themePreview.tmpl.html',
        scope: {
          primary: '=',
          accent: '='
        },
        controller: function ($scope, $mdColors, $mdColorUtil) {
          $scope.getColor = function (color) {
            return $mdColorUtil.rgbaToHex($mdColors.getThemeColor(color))
          };
        }
      }
    })
    .directive('mdJustified', function () {
      return {
        restrict: 'A',
        compile: function (element, attrs) {
          var layoutDirection = 'layout-' + (attrs.mdJustified || "row");

          element.removeAttr('md-justified');
          element.addClass(layoutDirection);
          element.addClass("layout-align-space-between-stretch");

          return angular.noop;
        }
      };
    });
})();

/**
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
 **/

(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('TechController', TechController);

  /** @ngInject */
  function TechController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1472603796345;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();

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

(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('AutocompleteController', function($timeout, $q) {
    var vm = this;
    // list of `state` value/display objects
    vm.states        = loadAll();
    vm.selectedItem  = null;
    vm.searchText    = null;
    vm.querySearch   = querySearch;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? vm.states.filter( createFilterFor(query) ) : vm.states;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  });
})();

(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($scope, $mdSidenav, $state) {
    $scope.menuItems = [
      {name: 'autocomplete', path: 'autocomplete'},
     // {name: 'bottom sheet', path: 'bottomSheet'},
      {name: 'button', path: 'button'},
      {name: 'theme picker', path: 'themePicker'},
      // {name: 'card', path: 'card'},
      // {name: 'date picker', path: 'datePicker'},
      // {name: 'grid list', path: 'gridList'},
      // {name: 'input', path: 'input'},
      // {name: 'progress circular', path: 'progressCircular'},
      // {name: 'progress linear', path: 'progressLinear'},
      // {name: 'toast', path: 'toast'},
      // {name: 'whiteframe', path: 'whiteframe'},
    ];

    $scope.title = 'home';

    $scope.go = function (path, title) {
      $state.go(path);
      $scope.title = title;
    }

    $scope.toggleLeft = function () {
      $mdSidenav('left')
        .toggle();
    }

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
      if ($mdSidenav('left').isOpen()) {
        $mdSidenav('left')
          .close();
        $scope.menuIcon = 'menu';
      }
      else {
        $mdSidenav('left')
          .open();
        $scope.menuIcon = 'arrow_back';
      }
    }
  }
})()

angular.module('angularMaterialKitchenSink').run(['$templateCache', function($templateCache) {$templateCache.put('app/autocomplete/autocomplete.html','<div layout=column ng-cloak=""><md-content class=md-padding><form ng-submit=$event.preventDefault() name=searchForm><p>The following example demonstrates autocomplete. Try typing a state.</p><div layout-gt-sm=row><md-input-container flex=""><label>Name</label><input type=text></md-input-container><md-autocomplete flex="" required md-input-name=autocompleteField md-input-minlength=2 md-input-maxlength=18 md-no-cache=autocomplete.noCache md-selected-item=autocomplete.selectedItem md-search-text=autocomplete.searchText md-items="item in autocomplete.querySearch(autocomplete.searchText)" md-item-text=item.display md-require-match="" md-floating-label="Favorite state"><md-item-template><span md-highlight-text=autocomplete.searchText>{{item.display}}</span></md-item-template><div ng-messages=searchForm.autocompleteField.$error ng-if=searchForm.autocompleteField.$touched><div ng-message=required>You <b>must</b> have a favorite state.</div><div ng-message=md-require-match>Please select an existing state.</div><div ng-message=minlength>Your entry is not long enough.</div><div ng-message=maxlength>Your entry is too long.</div></div></md-autocomplete></div></form></md-content></div>');
$templateCache.put('app/button/button.html','<div ng-cloak class=buttondemoBasicUsage><md-content><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button>{{title1}}</md-button><md-button md-no-ink="" class=md-primary>Primary (md-noink)</md-button><md-button ng-disabled=true class=md-primary>Disabled</md-button><md-button class=md-warn>{{title4}}</md-button><div class=label>Flat</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class=md-raised>Button</md-button><md-button class="md-raised md-primary">Primary</md-button><md-button ng-disabled=true class="md-raised md-primary">Disabled</md-button><md-button class="md-raised md-warn">Warn</md-button><div class=label>Raised</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class=md-fab aria-label="Eat cake"><i class=material-icons>cake</i></md-button><md-button class="md-fab md-primary" aria-label="Use Android"><i class=material-icons>android</i></md-button><md-button class=md-fab ng-disabled=true aria-label=Comment><i class=material-icons>comment</i></md-button><md-button class="md-fab md-primary md-hue-2" aria-label=Profile><i class=material-icons>people</i></md-button><md-button class="md-fab md-mini" aria-label="Eat cake"><i class=material-icons>cake</i></md-button><md-button class="md-fab md-mini md-primary" aria-label="Use Android"><i class=material-icons style=color:greenyellow>android</i></md-button><div class=label>FAB</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button ng-href={{googleUrl}} target=_blank>Default Link</md-button><md-button class=md-primary ng-href={{googleUrl}} target=_blank>Primary Link</md-button><md-button>Default Button</md-button><div class=label>Link vs. Button</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class="md-primary md-hue-1">Primary Hue 1</md-button><md-button class="md-warn md-raised md-hue-2">Warn Hue 2</md-button><md-button class=md-accent>Accent</md-button><md-button class="md-accent md-raised md-hue-1">Accent Hue 1</md-button><div class=label>Themed</div></section><section layout=row layout-sm=column layout-align="center center" layout-wrap=""><md-button class="md-icon-button md-primary" aria-label=Settings><i class=material-icons>menu</i></md-button><md-button class="md-icon-button md-accent" aria-label=Favorite><i class=material-icons>favorite</i></md-button><md-button class=md-icon-button aria-label=More><i class=material-icons>more_vert</i></md-button><md-button href=http://google.com title="Launch Google.com in new window" target=_blank ng-disabled=true aria-label=Google.com class="md-icon-button launch"><i class=material-icons>launch</i></md-button><div class=label>Icon Button</div></section></md-content></div>');
$templateCache.put('app/home/home.html','<div class=jumbotron><img src=https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7Y1huOXVQdlFPMmM/materialdesign_introduction.png width=100%></div><md-content><div layout=row layout-sm=column><div class="page-header text-center"><h1>Angular Material Kitchen Sink</h1></div></div><div layout=row layout-sm=column><div flex style=margin:10px><p class=text-center>Angular Material Kitchen Sink is a starting point for building Angular Material web app. It has everything that Angular Material has to offer. All you have to do is modify the code to your own and remove the stuff you don\'t want. Much of the code comes from <a href=https://material.angularjs.org/latest/ >Angular Material docs</a> code snippets.</p></div><div flex style=margin:10px><iframe style=width:100%;max-width:560px;height:315px src=https://www.youtube.com/embed/Q8TXgCzxEnw frameborder=0 allowfullscreen></iframe></div></div><br><md-divider></md-divider><br><div layout=row layout-sm=column><div flex class="page-header text-center"><h2>AngularJS</h2></div><md-button href=https://angularjs.org/ title=Documentation target=_blank aria-label=AngularJS><i class=material-icons>launch</i> AngularJS Docs</md-button></div><div layout=row layout-sm=column><div flex style=margin:10px><img src=http://ionicframework.com/present-ionic/slides/img/angular-icon.png width=100%></div><div flex=75 style=margin:10px><p class=text-primary>HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.</p><p class=text-primary>Other frameworks deal with HTML\u2019s shortcomings by either abstracting away HTML, CSS, and/or JavaScript or by providing an imperative way for manipulating the DOM. Neither of these address the root problem that HTML was not designed for dynamic views.</p><p class=text-primary>AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.</p></div></div><br><md-divider></md-divider><br><div layout=row layout-sm=column><div flex class="page-header text-center"><h2>Material Design</h2></div><md-button href=https://www.google.com/design/spec/material-design/introduction.html title=Documentation target=_blank aria-label=AngularJS><i class=material-icons>launch</i> Material Design Docs</md-button></div><div layout=row layout-sm=column><div flex style=margin:10px><img src=https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7VG9DQVluOFJ4Tnc/materialdesign_principles_metaphor.png width=100%></div><div flex=75 style=margin:10px><h3>Material is the metaphor</h3><p class=text-primary>A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.</p><p class=text-primary>Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances. Yet the flexibility of the material creates new affordances that supercede those in the physical world, without breaking the rules of physics.</p><p class=text-primary>The fundamentals of light, surface, and movement are key to conveying how objects move, interact, and exist in space and in relation to each other. Realistic lighting shows seams, divides space, and indicates moving parts.</p></div></div><div layout=row layout-sm=column><div flex style=margin:10px><img src=https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7NndTQW9VZTlZV2s/materialdesign_principles_bold.png width=100%></div><div flex=75 style=margin:10px><h3>Bold, graphic, intentional</h3><p class=text-primary>The foundational elements of print-based design\u2014typography, grids, space, scale, color, and use of imagery\u2014guide visual treatments. These elements do far more than please the eye. They create hierarchy, meaning, and focus. Deliberate color choices, edge-to-edge imagery, large-scale typography, and intentional white space create a bold and graphic interface that immerse the user in the experience.</p><p class=text-primary>An emphasis on user actions makes core functionality immediately apparent and provides waypoints for the user.</p></div></div><div layout=row layout-sm=column><div flex style=margin:10px><img src=https://material-design.storage.googleapis.com/publish/material_v_4/material_ext_publish/0Bx4BSt6jniD7dkRYelJkeklqWFU/materialdesign_principles_motion.png width=100%></div><div flex=75 style=margin:10px><h3>Motion provides meaning</h3><p class=text-primary>Motion respects and reinforces the user as the prime mover. Primary user actions are inflection points that initiate motion, transforming the whole design.</p><p class=text-primary>All action takes place in a single environment. Objects are presented to the user without breaking the continuity of experience even as they transform and reorganize.</p><p class=text-primary>Motion is meaningful and appropriate, serving to focus attention and maintain continuity. Feedback is subtle yet clear. Transitions are ef\uFB01cient yet coherent.</p></div></div></md-content>');
$templateCache.put('app/tech/tech.html','<div layout=vertical layout-fill><md-content><section class=jumbotron style=background-color:#4DD0E1><h1>Angular Material</h1><h2>Kitchen Sink</h2><p>includes these fine tools</p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in tech.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>');
$templateCache.put('app/themePicker/themePicker.html','<div layout=column ng-cloak="" class="md-padding colorsdemoThemePicker" ng-app=MyApp><p>Select a color from the <a class=md-accent href={{mdURL}}>Theme Color Palettes</a> below:</p><!-- Theme Options --><div layout=row layout-wrap="" layout-align="center center"><md-button ng-repeat="color in colors" flex-gt-md=15 flex=30 md-colors="{background: \'{{color}}\'}" md-colors-watch=false ng-disabled="primary === color && !isPrimary" ng-click=selectTheme(color)>{{color}}</md-button></div><!-- Footnote --><p style="padding-top: 20px">Shown below are the colors of the custom <code>theme-preview</code> component that were updated by <code>md-colors</code></p><!-- Theme Preview --><div layout=row class=section layout-align="center center"><div layout=column flex=50><span class=componentTag>theme-preview</span><theme-preview primary=primary accent=accent></theme-preview></div></div><!-- Footnote --><p class=footnote>Notice that the foreground colors are automatically determined (from the theme configurations) based on the specified background palette selection. Of course, you could easily override the foreground color also...</p><script type=text/ng-template id=themePreview.tmpl.html><div layout="column">\n  <div md-colors="{background: \'{{primary}}-500\'}"  md-justified="column" class="primary line">\n    <span>Primary - {{primary}}</span>\n    <div md-justified >\n      <span>500</span>\n      <span>{{getColor(primary + \'-500\')}}</span>\n    </div>\n  </div>\n  <div md-colors="{background: \'{{primary}}-700\'}" md-justified class="line" >\n    <span>700</span>\n    <span>{{getColor(primary + \'-700\')}}</span>\n  </div>\n  <div md-colors="{background: \'{{primary}}-800\'}" md-justified class="line" >\n    <span>800</span>\n    <span>{{getColor(primary + \'-800\')}}</span>\n  </div>\n  <div md-colors="{background: \'{{accent}}-A200\'}" md-justified="column" class="accent line">\n    <span>Accent - {{accent}}</span>\n    <div md-justified>\n      <span>A200</span>\n      <span>{{getColor(accent + \'-A200\')}}</span>\n    </div>\n  </div>\n  </div></script></div><!--\nCopyright 2016 Google Inc. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.\n-->');
$templateCache.put('app/components/navbar/navbar.html','<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>');}]);