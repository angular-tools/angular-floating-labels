(function () {
    'use strict';

    angular.module('angularFloatingLabels', [])
        .directive('floatingLabels', ['$compile', function ($compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.find('label').each(function (index, ele) {
                        angular.element(ele).parent('div').attr('floating-label', '');
                    });

                    $compile(element.contents())(scope);
                }
            };
        }])
        .directive('floatingLabel', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var self = element;
                    var input = self.find('input,textarea');
                    var toggle = function (state) {
                        self.toggleClass("floating-label-form-group-with-value", !!input.val());
                    };

                    input.on('input keyup change', toggle)
                        .focus(function () { self.addClass("floating-label-form-group-with-focus"); })
                        .blur(function () { self.removeClass("floating-label-form-group-with-focus");});

                    self.addClass('floating-label-form-group');

                    $timeout(toggle, 500);
                }
            };
        }]);
})();