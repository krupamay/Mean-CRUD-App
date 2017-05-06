krupa.controller("signupController", function($scope, $stateParams, $state, $http) {


	$scope.submit =  function(){
	if($scope.password === $scope.cnfpassword){
					var studentInfo = {
					username : $scope.username,
					email : $scope.email,
					password : $scope.password
				};
				JSON.stringify(studentInfo);
				console.log(studentInfo);
				$http.post("http://localhost:8000/signup", studentInfo).
			    then(function(data, status, headers, config) {
			    	$scope.signupSuccess = true;
			      }).
			      then(function(data, status, headers, config) {

			      });
		$state.go('homepage');
	}
	else
		$scope.error = true;
	}

});
