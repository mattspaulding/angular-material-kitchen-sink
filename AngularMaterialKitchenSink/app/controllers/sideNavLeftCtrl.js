'use strict';
app.controller('SideNavLeftCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.close = function () {
        $mdSidenav('left').close();
    };
}]);