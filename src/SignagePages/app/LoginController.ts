
module Pages.Controller {
    export var Login : any[] = ['$scope', LoginController]

    function LoginController($scope) {
        $scope.userName = "Foo";
        $scope.password = "";
    }
}
