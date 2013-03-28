var Pages;
(function(pages) {
    (function(controller) {

        function homeController($scope) {
        }

        controller.Home = ['$scope', homeController];

    })(pages.Controller || (pages.Controller = {}));
})(Pages || (Pages = {}));