(function()
{
	'use strict';
	
	angular.module('restApp').controller('MainCtrl',MainController);
	
	
	 MainController.$inject = ['$http'];
	 function MainController($http)
	 {	
		 var mctrl = this;
		 
		 
		 

		 
		 
		 mctrl.tryLogin = function()
		 {
			 $http({
				  method: 'POST',
				  url:'api/employee/login',
				  data:mctrl.auth
				  
			  }).success(function(data){
				  console.log(data);
				  if(data.status == 'success')
				  {
					  mctrl.loggedIn = true;
				  }
				  else
				 {
					  mctrl.loggedIn = false;
				 }
			  }).error(function(error){
				  console.log(error);
			  });
		 }
		 
		 mctrl.getAllEmp = function()
		 {
			  $http({
					  method: 'GET',
					  url:'api/employee/all'
				  }).success(function(data){
					  console.log(data);
				  }).error(function(error){
					  console.log(error);
				  });
			 
		 }
		 
		 mctrl.getEmp = function()
		 {
			 
			 if(mctrl.empId){
				 $http({
					  method:'GET',
					  url:'api/customer/get/' + mctrl.empId
				  }).success(function(data){
					  console.log(data);
				  }).error(function(error){
					  console.log(erro);
				  });
			 }
			  
			 
		 }
		 
		 mctrl.addEmp = function()
		 {
			 if(mctrl.empId){
				 $http({
					 method:'POST',
				            url:'api/employee/add',
				            data:mctrl.newEmp
				            }).success(function(data){
				            	console.log(data);
				            	mctrl.newEmp = null;
				            }).error(function(error){
				            	console.log(error);
				  });
			 }
			  
			 
		 }
		 
		 
	 }



	var object = new Date();

	var myEpoch = object.getTime();
	console.log(myEpoch);




})();