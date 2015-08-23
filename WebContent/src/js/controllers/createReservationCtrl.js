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

$scope.getReservation = function()
{
    var userVm =this;

    if(user.custId)
    {
       return $http(
            {
                method: 'GET',
                url: 'api/customer/id/' + user.custId

            }).success(function(data){
               console.log(data)
           }).error(function(error){
               console.log(error);
           });
    }
}

        $scope.addCustomer = function()
        {
                if($scope.user)
                {
                    var date = $scope.user.dates.date3.getTime()/1000.0;


                }
        }


    }]);