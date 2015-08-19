/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('CreateReservationCtrl', ['$http','$scope', function($http, $scope) {




        $scope.user = {

        };


        $scope.dates = {

            date3: new Date()

        };

        $scope.open = {

            date3: false

        };


        $scope.dateOptions = {
            showWeeks: false,
            startingDay: 1
        };

        $scope.timeOptions = {
            readonlyInput: true,
            showMeridian: false
        };

        $scope.openCalendar = function(e, date) {
            e.preventDefault();
            e.stopPropagation();

            $scope.open[date] = true;
        };




        $scope.addCustomer = function()
        {
                if($scope.user)
                {
                    var date = $scope.user.dates.date3.getTime();


                }
        }


    }]);