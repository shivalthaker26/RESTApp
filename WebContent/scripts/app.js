
    'use strict';

    var reservationAppCtrls,reservationAppServices;

    angular.module('reservationApp',[
            'ngRoute',
        'ngMessages',
            'ui.bootstrap.datetimepicker',
        'ui.bootstrap',
            'reservationApp.controllers',
            'reservationApp.services'
            
    ]).config(['$routeProvider', function($routeProvider)
    {
        $routeProvider.
            when("/home", {templateUrl: "views/home.html", controller: 'HomeCtrl'}).
            when("/reservation", {templateUrl: "views/reservation.html", controller: 'CreateReservationCtrl'}).
            when("/about", {templateUrl: "views/about.html", controller: ''}).
            when("/contact", {templateUrl: 'views/contact.html', controller:''}).
            when("/management", {templateUrl: 'views/manage_customers.html', controller:'ManageReservationCtrl'}).
            when("/editReservation/:reservationNumber", {templateUrl: 'views/editReservation.html', controller:'EditReservationCtrl'}).
            otherwise({redirectTo: '/home'});
    }]);
     reservationAppCtrls   = angular.module('reservationApp.controllers',[]);

    reservationAppServices = angular.module('reservationApp.services',[]);




