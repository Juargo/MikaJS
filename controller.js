angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$http.get("http://gremiatico.cl/MikaJS/Data/Tomos.json");

	});