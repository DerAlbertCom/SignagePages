var Pages;
(function (Pages) {
    (function (Controllers) {
        function homeController($scope) {
        }
        Controllers.Home = [
            '$scope', 
            homeController
        ];
    })(Pages.Controllers || (Pages.Controllers = {}));
    var Controllers = Pages.Controllers;
})(Pages || (Pages = {}));
