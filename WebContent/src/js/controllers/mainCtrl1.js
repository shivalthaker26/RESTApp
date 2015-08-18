/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('MainCtrl', ['$http','$scope', function($http, $scope) {


        $scope.user = {

            first_name:"shival",
            last_name:"thaker",
            phone_number:1234567890,
            email:"shival@thaker.com",
            no_of_guests:2,
            specialRequests:"bitch"

        };


        $scope.dates = {
            date1: new Date('01 Mar 2015 00:00:00.000'),
            date2: new Date(),
            date3: new Date(),
            date4: new Date('01 Mar 2015'),
            date5: new Date('10 Mar 2015'),
            date6: new Date()
        };

        $scope.open = {
            date1: false,
            date2: false,
            date3: false,
            date4: false,
            date5: false,
            date6: false
        };
        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
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