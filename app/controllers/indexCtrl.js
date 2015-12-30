'use strict';
app.controller('IndexCtrl', function ($scope, $mdSidenav, $state) {
    $scope.menuItems = [
      { name: 'autocomplete', path: 'autocomplete' },
      { name: 'bottom sheet', path: 'bottomSheet' },
      { name: 'button', path: 'button' },
      { name: 'card', path: 'card' },
      { name: 'date picker', path: 'datePicker' },
      { name: 'grid list', path: 'gridList' },
      { name: 'input', path: 'input' },
      { name: 'progress circular', path: 'progressCircular' },
      { name: 'progress linear', path: 'progressLinear' },
      { name: 'toast', path: 'toast' },
      { name: 'whiteframe', path: 'whiteframe' },
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
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }
        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
        }
    }
});