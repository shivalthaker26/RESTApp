/**
 * Created by Shival on 8/12/15.
 */
/**
 * Created by Shival on 8/12/15.
 */
'use strict';

reservationAppServices.controller('Service1', ['$q','$http', function($q,$http) {
	
	$scope.user ={};
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
    	
    	var defer = $q.defer();
    	
    	$scope.reservation = {};
    		$http({
    			  method: 'GET',
    			  url:'api/customer/all'
    		  }).success(function(response){
    			  defer.resolve(response);
    			  $scope.reservation = response.payload;
    			  for(var i=0;i<$scope.reservation.length;i++)
    				  {
    				  $scope.reservation[i].date = new Date($scope.reservation[i].date*1000);
    				  }
    		  }).error(function(error){
    			  defer.reject(error)
    			  console.log(error);
    		  });
    		return defer.promise;
    }
    
    
    
    $scope.getCustomer = function()
    {
    		var defer = $q.defer();

    		 if($scope.conf_num){
    			 $scope.getCustomer = {};

    			 $http({
    				  method:'GET',
    				  url:'api/customer/get/' + $scope.conf_num
    			  }).success(function(response){
    				  defer.resolve(response);
    				  
    			  }).error(function(error){
    				  defer.reject(error);
    			  });
    			 return defer.promise;
    		 }
    		  
    		 
    		
    }


}]);