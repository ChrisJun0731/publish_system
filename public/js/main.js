/**
 * Created by Administrator on 2018/1/9.
 */
require.config({
	baseUrl: "js",
	path: {
		'angular': 'plugins/angular/angular',
		'ui-router': 'plugins/release/angular-ui-router',
		'angularAMD': 'plugins/angularAMD',

		'HomeController': 'controller/home-ctrl'
	},
	shim:{
		'angularAMD': ['angular'],
		'angular-route': ['angular']
	},
	deps: ['app']
})