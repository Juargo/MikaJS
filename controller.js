angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$http.get("Data/Tomos.json")
		.success(function(data){
				$scope.mangas = data;
				console.log($scope.mangas);
				//$scope.mangas = $scope.mangas[0];
				//$scope.cant = $scope.mangas.length;
				//console.log($scope.mangas[0]);
			})
		.error(function(err){

		});
    });
