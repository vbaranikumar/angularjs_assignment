(function() {
	'use strict'
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = [ '$scope' ];

	function LunchCheckController($scope) {
		$scope.lunchMenu = '';
		$scope.messageType = '';
		$scope.message = ''
		$scope.borderStyle = ''
		$scope.readMenu = function() {
			console.log($scope.lunchMenu);
			if (!$scope.lunchMenu) {
				$scope.message = "Please enter data first";
				$scope.messageType = "danger";
			} else {
				var menuItems = $scope.lunchMenu.split(',');
				console.log(menuItems);
				var menuCount = 0;
				for (var i = 0; i < menuItems.length; i++) {
					if (menuItems[i].trim().length > 0) {
						menuCount += 1;
					}
				}
				
				$scope.borderStyle = {
					"border-color" : "green"
				}

				if (menuCount > 3) {
					$scope.message = "Too much!";
					$scope.messageType = "success";
				} else if (menuCount > 0) {
					$scope.message = "Enjoy!";
					$scope.messageType = "success";
				} else {
					$scope.message = "Empty menu items are not considered";
					$scope.messageType = "danger";
					$scope.borderStyle = ''
				}

			}
		}
		$scope.checkMenu = function() {
			if ($scope.lunchMenu) {
				$scope.messageType = "";
				$scope.message = '';
			} else if (!$scope.lunchMenu) {
				$scope.messageType = '';
				$scope.message = '';
				$scope.borderStyle = '';
			}
		}
	}

})();