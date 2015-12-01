'use strict';
app.controller('BottomSheetCtrl', function ($scope, $timeout, $mdBottomSheet, $mdToast) {
    $scope.alert = '';

    $scope.showListBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            $scope.alert = clickedItem['name'] + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            clickOutsideToClose: false,
            targetEvent: $event
        }).then(function (clickedItem) {
            $mdToast.show(
                  $mdToast.simple()
                    .textContent(clickedItem['name'] + ' clicked!')
                    .position('top right')
                    .hideDelay(1500)
                );
        });
    };
})

.controller('ListBottomSheetCtrl', function ($scope, $mdBottomSheet) {

    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'file_upload' },
      { name: 'Copy', icon: 'content_copy' },
      { name: 'Print this page', icon: 'print' },
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
})
.controller('GridBottomSheetCtrl', function ($scope, $mdBottomSheet) {
    $scope.items = [
      { name: 'Hangout', icon: 'local_pizza' },
      { name: 'Mail', icon: 'mail' },
      { name: 'Message', icon: 'message' },
      { name: 'Copy', icon: 'content_copy' },
      { name: 'Facebook', icon: 'local_pizza' },
      { name: 'Twitter', icon: 'local_pizza' },
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});
