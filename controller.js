angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$scope.mangas = [];
		$http.get("http://gremiatico.cl/MikaJS/Data/Tomos.json")
			.success(function(data){
				//$scope.mangas = data;
				//$scope.mangas = $scope.mangas[0];
				//$scope.cant = $scope.mangas.length;
				//console.log($scope.mangas[0]);
			})
			.error(function(err){

			});
	});