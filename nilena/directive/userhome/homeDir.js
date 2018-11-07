(function() {
	'use strict';
	console.log("dir2");
	angular.module('adminApp')
	.directive('homeDir', homeDirective)
	.factory('editDataFactory', function(){
		let data = {};
		return{
			get: function(key){
				return data[key];
			},
			set: function(key, value){
				return data[key]=value;

			}
		}
	});
	homeDir.$inject=['editDataFactory', '$location'];
	function homeDirective(editDataFactory,$location){
	var directive = {
		link:link,
		restrict:'EA',
		templateUrl: 'directive/userHome/homeTemplate.html'
	};
 return directive;
 	function link( scope, element, attr) {
 		scope.userlist= JSON.parse(localStorage.getItem('userList'));
 		console.log(scope.userlist);
 		scope.edituserDetails= function(id){
 			editDataFactory.set('user', scope.userlist[id]);
 			$location.path("/userregistration");
 		}
 	}
}
})();

