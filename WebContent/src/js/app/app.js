
    'use strict';

    var reservationAppCtrls,reservationAppServices;

    angular.module('reservationApp',[
            'ngRoute',
            'ui.bootstrap',
            'ngMessages',
            'reservationApp.controllers',
            'reservationApp.services'
            
    ]);

     reservationAppCtrls   = angular.module('reservationApp.controllers',[]);

    reservationAppServices = angular.module('reservationApp.services',[]);

