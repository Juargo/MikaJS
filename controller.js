angular.module("IndexApp",[])
	.directive('logoImg',function(){
		return function(scope,element,attrs){
			attrs.$observe('logoImg',function(value){
				element.css({
					"background":"url("+value+")",
					"background-size":"cover"
				});
			})
		}
	})
	.controller("IndexController",function($scope,$http){
		$http.get("Data/Tomos.json")
		.success(function(data){
				$scope.mangas = data;
				console.log($scope.mangas);
			})
		.error(function(err){

		});
    });
