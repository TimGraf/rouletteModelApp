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

          element.find('.numbers').removeClass('hover1');
          element.find('.numbers').removeClass('hover2');
          element.find('.numbers').removeClass('hover3');
          element.find('.numbers').removeClass('green');
          element.find('.numbers').addClass(bgColorClass);
        });
      },
      scope: {
        numberValue: '@value'
      },
      templateUrl: 'views/number.html'
    };
  });
