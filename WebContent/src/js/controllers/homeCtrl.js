
'use strict';
reservationAppCtrls
    .controller('HomeCtrl', ['$http','$scope','$modal', function($http, $scope,$modal) {

        $scope.user = {
            user: 'name',
            password: null
        };

        $scope.open = function () {

            $modal.open({
                templateUrl: 'myModalContent.html',
                backdrop: true,
                windowClass: 'modal',
                controller: function ($scope, $modalInstance, $log, user) {
                    $scope.user = user;
                    $scope.submit = function () {
                        $log.log('Submiting user info.');
                        $log.log(user);
                        $modalInstance.dismiss('cancel');
                    }
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    user: function () {
                        return $scope.user;
                    }
                }
            });
        };

        <!-- Simple dropdown -->
        $scope.items = [
            'Create a Reservation',
            'Manage a Reservation',
            'Cancel a Reservation'
        ];

        $scope.status = {
            isopen: false
        };



        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };



    }]);