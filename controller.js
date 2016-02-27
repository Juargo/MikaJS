angular.module("IndexApp",[])
	.controller("IndexController",funtion($scope,$http){
		$http.get("http://http://gremiatico.cl/MikaJS/Data/Tomos.json")
			.success(funtion(data){
				console.log(data);
			})
			.error(funtion(err){

			});
	});