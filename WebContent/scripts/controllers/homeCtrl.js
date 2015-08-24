
'use strict';
reservationAppCtrls
    .controller('HomeCtrl', ['$http','$scope','$modal','$location', function($http, $scope,$modal,$location) {

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
        }

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

        
        $scope.changeView = function(index)
        {
        	switch(index){
        	case 0:
        		$location.path("/reservation")
        		break;
        	case 1:
        		$location.path("/management")
        		break;
        	case 2:
        		$location.path("#")
        		break;
        	}
        	
        }

    }]);