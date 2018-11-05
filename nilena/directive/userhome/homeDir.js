(function() {
	'use strict';
	console.log("dir2");
	angular.module('adminApp')
	.directive('homeDir', homeDirective);

	function homeDirective(){
	var directive = {
		link:link,
		restrict:'EA',
		templateUrl: 'directive/userHome/homeTemplate.html'
	};
 return directive;
 	function link( scope, element, attr) {

 	}
}
})();

