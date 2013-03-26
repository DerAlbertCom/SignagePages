var Pages;
(function (Pages) {
    (function (Controller) {
        Controller.Login = [
            '$scope', 
            LoginController
        ];
        function LoginController($scope) {
            $scope.userName = "Foo";
            $scope.password = "";
        }
    })(Pages.Controller || (Pages.Controller = {}));
    var Controller = Pages.Controller;
})(Pages || (Pages = {}));
//@ sourceMappingURL=LoginController.js.map
