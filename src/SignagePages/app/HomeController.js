var Pages;
(function(pages) {
    (function(controller) {

        function homeController($scope) {
        }

        controller.Home = ['$scope', homeController];

    })(pages.Controllers || (pages.Controllers = {}));
})(Pages || (Pages = {}));