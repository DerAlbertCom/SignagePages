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

        function buttonSubmitDirective() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    title : '@',
                    action: '&'
                },
                template : "<button type='submit'  class='btn btn-info btn-small'  ng-click='action(menu)' ><i class='icon-ok icon-white'></i></button>"
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
        directives.btnSubmit = [buttonSubmitDirective];

    })(pages.Directives || (pages.Directives = {}));
})(Pages || (Pages = {}));