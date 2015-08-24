
'use strict';
reservationAppCtrls
    .controller('EditReservationCtrl', ['$http','$scope','$modal','$location','$routeParams', function($http, $scope,$modal,$location,$routeParams) {
         alert($routeParams.reservationNumber);




         $scope.user = {

         };


         $scope.date = new Date();

         $scope.open = {

                 date: false

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









        $scope.getCustomer = function()
        {

            if($scope.conf_num){
                $scope.getCustomer = {};

                $http({
                    method:'GET',
                    url:'api/customer/get/' + $scope.conf_num
                }).success(function(response){
                    $scope.getCustomer = response.payload;
                    $scope.getCustomer.date = new Date(response.payload.date*1000);
                }).error(function(error){
                    console.log(error);
                });
            }



        }










    }]);/**
 * Created by shivalthaker26 on 8/24/15.
 */
