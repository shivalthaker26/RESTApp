/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('ManageReservationCtrl', ['$http','$scope','$location', function($http, $scope,$location) {

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

$scope.getReservation = function()
{
	$scope.reservation = {};
		$http({
			  method: 'GET',
			  url:'api/customer/all'
		  }).success(function(response){
			  $scope.reservation = response.payload;
			  for(var i=0;i<$scope.reservation.length;i++)
				  {
				  $scope.reservation[i].date = new Date($scope.reservation[i].date*1000);
				  }
		  }).error(function(error){
			  console.log(error);
		  });
}
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

		$scope.editReservation = function(reservation_number){
			$location.path('/editReservation/'+reservation_number);
		}


    }]);