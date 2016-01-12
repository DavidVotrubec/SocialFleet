angular.module('app')
.controller('LoginCtrl', function($scope, $auth, $http){
    
    /** $auth.isAuthenticated is actually a method */
	$scope.isAuthenticated = $auth.isAuthenticated;

	$scope.login = function () {
        // for some reason this redirects me directly to twitter
		$auth.authenticate('twitter');
	}

    $scope.tweet = function(){
        $http.post('/api/post/tweet', 'some string');
    }

	$scope.logout = function () {
		$auth.logout();
	}
});