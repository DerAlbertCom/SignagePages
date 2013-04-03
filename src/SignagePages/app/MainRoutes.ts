module Pages.Routes {

        export var Main : any[] = ['$routeProvider', ($routeProvider) => 
            {
                $routeProvider
                    .when('/home', { templateUrl: 'home.cshtml', controller: 'Home' })
                    .when('/dailymeals', { templateUrl: 'dailymeals.cshtml', controller: 'DailyMeals'})
                    .when('/login', { templateUrl: "login.cshtml", controller: 'Login' })
                    .otherwise({ redirectTo: '/home' });
             }];        
}
