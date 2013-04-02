var Pages;
(function (pages) {
    (function (routes) {

        var mainRoutes = function($routeProvider) {
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
        routes.Main = ['$routeProvider', mainRoutes];

    })(pages.Routes|| (pages.Routes = {}));
})(Pages || (Pages = {}));