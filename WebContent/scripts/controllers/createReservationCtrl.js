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
		$location.path("/see_reservation")
	}).error(function(error)
	{
		console.log(error);
	})
}



    }]);