(function(){angular.module('adminApp',["ngRoute"])
		.controller('adminContrl',['$scope',function($scope){
			console.log('ctrl init');
		}])
		.config(function($routeProvider){
			$routeProvider
			.when("/",{
				template:"<login-dir></login-dir>"
			})
			.when("/userhome",{
				template:"<home-dir></home-dir>",
				controller: 'adminContrl'
			})
			.when("/userregistration",{
				template:"<reg-dir></reg-dir>"
			})
			.otherwise({
				redirectTo: '/'
			});
		});
})();