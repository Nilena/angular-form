(function(){angular.module('adminApp',["ngRoute"])
		.controller('adminContrl',['$scope',function($scope){

		}])
		.config(function($routeProvider){
			$routeProvider
			.when("/",{
				template:"<login-dir></login-dir>"
			})
			.when("/userhome",{
				template:"<home-dir></home-dir>"
			})
			.otherwise({
				redirectTo: '/'
			});
		});
})();