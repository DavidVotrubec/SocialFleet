angular.module('app')
.controller('LoginCtrl', function($scope, $auth){
    
	$scope.isAuthenticated = $auth.isAuthenticated;

	$scope.login = function () {
        // for some reason this redirects me directly to twitter
		$auth.authenticate('twitter');
	}

	$scope.logout = function () {
		$auth.logout();
	}
});