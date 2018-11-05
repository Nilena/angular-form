(function() {
	'use strict';
	console.log('Dire');
	angular
        .module('adminApp')
        .directive('loginDir', directive)
        .factory('authentication', function(){
        	return{
        		validate: function(login){
        			if ((login.username=='nilena' && login.password=='nilena')) {
        				return true;
        			} else{
        				return false;
        			}
        		}
        	}
        	console.log(login);
        });
	directive.$inject = ['authentication', '$location'];
	function directive(authentication, $location) {
		var directive = {
			link: link,
			restrict: 'AE',
			templateUrl: 'directive/login/login.html'
			// template: 'Hello world'
			
		};
		return directive;
		function link(scope, element, attrs) {
			scope.login={
					username:'',
					password:''
					};
			scope.test = "hi";
	
		scope.auth= function(){
			
			if(authentication.validate(scope.login)){
				$location.path('/userhome');
			} else{
				console.log("invalid user...");
			}
		}
	}	
	}		

})();