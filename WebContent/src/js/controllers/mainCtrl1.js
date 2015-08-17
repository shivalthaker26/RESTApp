/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('MainCtrl', ['$http','$scope', function($http, $scope) {


        $scope.user = {};
        //date picker function
        $scope.today = function() {
            $scope.user.dtPicker = new Date();
        };
        $scope.today();

        $scope.open = function($event) {
            $scope.status.opened = true;
        };

        $scope.status = {
            opened: false
        };

        //time picker function
        $scope.user.timePicker = new Date();

        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = ! $scope.ismeridian;
        };

        $scope.clear = function() {
            $scope.user.timePicker = null;
        };




        $scope.user.addCustomer = function()
        {
            if(user)
            {
                $http({
                    method:'POST',
                    url:'api/employee/add',
                    data:user
                }).success(function(data){
                    console.log(data);
                    mctrl.newEmp = null;
                }).error(function(error){
                    console.log(erro);
                });
            }
        }


    }]);