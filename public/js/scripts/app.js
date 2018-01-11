/**
 * Created by Administrator on 2018/1/9.
 */
define(['angularAMD', 'ui-router'], function(angularAMD){
	var app = angular.module('webapp', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider('index', {
			url: '/index',
			views:{
				'container@': angularAMD.route({
					templateUrl: 'views/index.html',
					controllerUrl: 'js/scripts/index.js'
				})
			}
		});
		$urlRouterProvider.otherwise('/index');
	});
});