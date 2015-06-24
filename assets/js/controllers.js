define(function(require){			
            var angular = require('angular'),
                Controllers = angular.module('controllers', ['yaMap']);
				maps=require('ya-map-2.1.min');
            Controllers.controller('MapsCtrl', require('controllers/MapsCtrl'));
			
            return Controllers;
        });