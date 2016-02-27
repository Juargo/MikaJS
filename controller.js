angular.module("IndexApp",[])
	.controller("IndexController",function($scope,$http){
		$http.get("google.cl")
    });
