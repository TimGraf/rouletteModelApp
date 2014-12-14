'use strict';

angular.module('rouletteModelApp')
  .directive('number', function() {
    return {
      restrict: 'E',
      link: function($scope, element, attributes) {
        var colorClass = $scope.$parent.getOvalColorForNumber(attributes.value);

        element.find('.oval').addClass(colorClass);

        element.on('click', function() {
          $scope.$parent.triggerNumberClickEvent(attributes.value);
        });

        $scope.$on('numberClicked', function(event, clicked) {
          var bgColorClass = $scope.$parent.getHighlightColor(attributes.value, clicked);

          element.parent().removeClass('hover1');
          element.parent().removeClass('hover2');
          element.parent().removeClass('hover3');
          element.parent().removeClass('green');
          element.parent().addClass(bgColorClass);
        });
      },
      scope: {
        numberValue: '@value'
      },
      replace: true,
      templateUrl: 'views/number.html'
    };
  });
