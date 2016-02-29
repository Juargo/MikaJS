angular.module("IndexApp",[])
	.directive('logoImg',function(){
		return function(scope,element,attrs){
			attrs.$observe('logoImg',function(value){
				element.css({
					"background-size":"60px 51px",
					"margin-left":"-29px",
					"margin-top":"-23px",
					"background":"url("+value+")",
					"width":"60px",
					"height":"51px"
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
