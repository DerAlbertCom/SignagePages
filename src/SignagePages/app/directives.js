var Pages;
(function (pages) {
    (function (directives) {

        function buttonEditDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title : '@',
                    action: '&'
                },
                template : "<div class='btn btn-primary btn-mini' ng-click='action()' ><i class='icon-edit icon-white'></i></div>"
            };
        }

        function buttonEjectDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    action: '&',
                    show: '&',
                    title : '@'
                },
                template : "<div class='btn btn-warning btn-mini' ng-click='action()' ng-show='show()'><i class='icon-eject icon-white'></i></div>"
            };
        }

        directives.btnEdit = [buttonEditDirective];
        directives.btnEject = [buttonEjectDirective];

    })(pages.Directives || (pages.Directives = {}));
})(Pages || (Pages = {}));