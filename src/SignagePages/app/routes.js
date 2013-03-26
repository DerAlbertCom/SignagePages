var Pages;
(function (pages) {
    (function (routes) {

        routes.Main = function($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'home.cshtml',
                    controller: 'Home'
                })
                .when('/dailymeals', {
                    templateUrl: 'dailymeals.cshtml',
                    controller: 'DailyMeals'
                })
                .when('/login', {
                    templateUrl: "login.cshtml",
                    controller: 'Login'
                })
                .otherwise({ redirectTo: '/home' });
        };

    })(pages.Routes|| (pages.Routes = {}));
})(Pages || (Pages = {}));