
module Pages.Controller {
    export var Login : any[] = ['$scope', LoginController]

    function LoginController($scope) {
        $scope.userName = "Bar";
        $scope.password = "";
    }
}
