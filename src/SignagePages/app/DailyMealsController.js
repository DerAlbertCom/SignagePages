var Pages;
(function (pages) {
    (function (controllers) {
        
        function interateDays(days, menuFunc) {
            for (var d = 0; d < days.length; d++) {
                var menus = days[d].menus;
                for (var m = 0; m < menus.length; m++) {
                    menuFunc(menus[m]);
                }
            }
        }

        function disableEdit(days) {
            interateDays(days, function(menu) {
                menu.$_edit = false;
            });
        }

        function hideButtons(days) {
            interateDays(days, function(menu) {
                menu.$_showButtons = false;
            });
        }

        function dailyMealsController($scope, DayRepository) {
            $scope.days = DayRepository.getDays();

            $scope.reset = function(menu) {
                if (menu.$_original) {
                    angular.copy(menu.$_original, menu);
                    delete menu.$_original;
                }
            };

            $scope.isDirty = function(menu) {
                if (!menu.$_original)
                    return false;
                return !angular.equals(menu.$_original, menu);
            };

            $scope.edit = function(menu) {
                if (!menu.$_original) {
                    menu.$_original = angular.copy(menu);
                }
                disableEdit($scope.days);
                menu.$_edit = true;
            };

            $scope.close = function(menu) {
                menu.$_edit = false;
            };

            $scope.showButtons = function(menu) {
                hideButtons($scope.days);
                menu.$_showButtons = true;
            };

            $scope.isShowButtons = function(menu) {
                return menu.$_showButtons || $scope.isDirty(menu);
            };
        }

        controllers.DailyMeals = ['$scope', 'DayRepository', dailyMealsController];

    })(pages.Controllers || (pages.Controllers = {}));
})(Pages || (Pages = {}));