krupa.controller("homepageController", function($scope, $stateParams, $state, $http) {

	$scope.submit =  function(){

				var studentInfo = {
				username : $scope.username
			};
		JSON.stringify(studentInfo);
		console.log(studentInfo);
		$http.post("http://localhost:8000/login", studentInfo).then(function successCallback(response) {
    console.log(response.data);
		$state.go('dashboard', {authenticated: true, info: response.data});
  }, function errorCallback(response) {
    $scope.error = true;
  });
}

});
