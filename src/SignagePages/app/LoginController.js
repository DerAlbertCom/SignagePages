var Pages;
(function (Pages) {
    (function (Controller) {
        Controller.Login = [
            '$scope', 
            LoginController
        ];
        function LoginController($scope) {
            $scope.userName = "Bar";
            $scope.password = "";
        }
    })(Pages.Controller || (Pages.Controller = {}));
    var Controller = Pages.Controller;
})(Pages || (Pages = {}));
