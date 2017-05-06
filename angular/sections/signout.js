krupa.controller("signoutController", function($scope, $state, $stateParams) {
	
	$scope.signoutInitiated = $stateParams.signoutInitiated;

	$scope.signin = function(){
		$state.go('homepage');
	}
});