angular.module('sampleapp', [ ]);

myapp.controller('samplecontoller', function ($scope) {

  
});

// Common directive for Focus
angular.module('sampleapp').directive('focus',
	function($timeout) {
		return {
			scope : {
				trigger : '@focus'
			},
			link : function(scope, element) {
				scope.$watch('trigger', function(value) {
					if (value === "true") {
						$timeout(function() {
							element[0].focus();
						});
					}
				});
			}
		};
	}
); 
