angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$http.get("http://http://gremiatico.cl/MikaJS/Data/Tomos.json")
			.success(function(data){
				console.log(data);
			})
			.error(function(err){

			});
	});