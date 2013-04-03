var Pages;
(function (Pages) {
    (function (Routes) {
        Routes.Main = [
            '$routeProvider', 
            function ($routeProvider) {
                $routeProvider.when('/home', {
                    templateUrl: 'home.cshtml',
                    controller: 'Home'
                }).when('/dailymeals', {
                    templateUrl: 'dailymeals.cshtml',
                    controller: 'DailyMeals'
                }).when('/login', {
                    templateUrl: "login.cshtml",
                    controller: 'Login'
                }).otherwise({
                    redirectTo: '/home'
                });
            }        ];
    })(Pages.Routes || (Pages.Routes = {}));
    var Routes = Pages.Routes;
})(Pages || (Pages = {}));
