krupa.controller("dashboardController", function($scope, $state, $stateParams) {

		$scope.authenticated = $stateParams.authenticated;
		$scope.info = $stateParams.info;

		$scope.signout = function(){
			$state.go('signout',{signoutInitiated : true});
		}

		$scope.signin = function(){
		$state.go('homepage');
	}

});
