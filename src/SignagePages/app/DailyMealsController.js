var Pages;
(function (pages) {
    (function (controller) {

        var dummyDays = [
            { date: '01.04.2012',
                info: 'April Fools Day',
                menus: [
                    { row1: 'Gulasch', row2: 'Nudeln', price: '5.9' },
                    { row1: 'Tolles', row2: 'Essen', price: '6.9' },
                    { row1: 'Einfach', row2: 'Suppe', price: '4.9' }
                ]
            },
            { date: '02.04.2012',
                info: '',
                menus: [
                    { row1: 'Gulasch', row2: 'Nudeln', price: 5.9 },
                    { row1: 'Tolles', row2: 'Essen', price: 6.9},
                    { row1: 'Einfach', row2: 'Suppe', price: 4.9}
                ]
            },
            { date: '03.04.2012',
                info: '',
                menus: [
                    { row1: 'Gulasch', row2: 'Nudeln', price: 5.9 },
                    { row1: 'Tolles', row2: 'Essen', price: 6.9 },
                    { row1: 'Einfach', row2: 'Suppe', price: 4.9 }
                ]
            },
            { date: '04.04.2012',
                info: '',
                menus: [
                    { row1: 'Gulasch', row2: 'Nudeln', price: 5.9 },
                    { row1: 'Tolles', row2: 'Essen', price: 6.9 },
                    { row1: 'Einfach', row2: 'Suppe', price: 4.9 }
                ]
            },
            { date: '05.04.2012',
                info: '',
                menus: [
                    { row1: 'Gulasch', row2: 'Nudeln', price: 5.9 },
                    { row1: 'Tolles', row2: 'Essen', price: 6.9 },
                    { row1: 'Einfach', row2: 'Suppe', price: 4.9 }
                ]
            }
        ]

        function interateDays(days, menuFunc) {
            for (var d = 0; d < days.length; d++) {
                var menus = days[d].menus;
                for (var m = 0; m < menus.length; m++) {
                    menuFunc(menus[m]);
                }
            }
        }

        function disableEdit(days) {
            interateDays(days, function (menu) {
                menu.$_edit = false;
            })
        }

        function hideButtons(days) {
            interateDays(days, function (menu) {
                menu.$_showButtons = false;
            })
        }

        function dailyMealsController($scope) {
            $scope.days = dummyDays;

            $scope.reset = function (menu) {
                if (menu.$_original) {
                    angular.copy(menu.$_original, menu);
                    delete menu.$_original;
                }
            }

            $scope.isDirty = function(menu)
            {
                if (!menu.$_original)
                    return false;
                return !angular.equals(menu.$_original, menu);
            }
            $scope.edit = function (menu) {
                if (!menu.$_original) {
                    menu.$_original = angular.copy(menu);
                }
                disableEdit($scope.days);
                menu.$_edit = true;
            }

            $scope.close = function(menu) {
                menu.$_edit = false;
            }
            $scope.showButtons = function (menu) {
                hideButtons($scope.days);
                menu.$_showButtons = true;
            }
        }

        controller.DailyMeals = ['$scope', dailyMealsController];

    })(pages.Controller || (pages.Controller = {}));
})(Pages || (Pages = {}));