app.directive('plusOne', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/directives/plusOne.html',
		link: function(scope, element, attrs) 
		{
			scope.buttonText = "Like",
			scope.liked = false,
			
			scope.like = function() {
				element.toggleClass('btn-like');
				if(scope.liked) {
					scope.buttonText = "Like";
					scope.liked = false;
				}
				else {
					scope.buttonText = "Unlike";
					scope.liked = true;
				}
			}
		}
	};
});