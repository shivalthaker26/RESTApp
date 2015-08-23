/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppCtrls
    .controller('CreateReservationCtrl', ['$http','$scope', function($http, $scope) {


var mctrl = this;

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

		 if($scope.custId){
			 $scope.getCustomer = {};

			 $http({
				  method:'GET',
				  url:'api/customer/get/' + $scope.custId
			  }).success(function(response){
				  $scope.getCustomer = response.payload;
				  $scope.getCustomer.date = new Date(response.payload.date*1000);
			  }).error(function(error){
				  console.log(error);
			  });
		 }
		  
		 
		
}

$scope.addCust = function()
{
	 console.log($scope.user);
	$scope.getDate = new Date($scope.user.date);
	console.log($scope.getDate);
	
	$scope.user.date = $scope.getDate.getTime()/1000;
	console.log($scope.user.date);
	
   
	$http({
		method:'POST',
	url:'api/customer/add',
	data:$scope.user
	}).success(function(data)
	{
		console.log(data);
	}).error(function(error)
	{
		console.log(error);
	})
}






    }]);