angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$scope.mangas = [];
		$http.get("http://gremiatico.cl/MikaJS/Data/Tomos.json")
			
	});