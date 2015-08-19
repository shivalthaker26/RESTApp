
    'use strict';

    var reservationAppCtrls,reservationAppServices;

    angular.module('reservationApp',[
            'ngRoute',
        'ngMessages',
            'ui.bootstrap.datetimepicker',
        'ui.bootstrap',
            'reservationApp.controllers',
            'reservationApp.services'
            
    ]);

     reservationAppCtrls   = angular.module('reservationApp.controllers',[]);

    reservationAppServices = angular.module('reservationApp.services',[]);




