'use strict';

angular.module('rouletteModelApp')
  .directive('number', function() {
    return {
      restrict: 'E',
      link: function($scope, element, attributes) {
        var colorClass = $scope.$parent.getColorForNumber(attributes.value);

        element.find('.oval').addClass(colorClass);

        element.on('click', function() {
          $scope.$parent.triggerNumberClickEvent(attributes.value);
        });

        $scope.$on('numberClicked', function(event, clicked) {
          element.find('.oval').removeClass(colorClass);
          colorClass = $scope.$parent.getColorFromNumberAndClick(attributes.value, clicked);
          element.find('.oval').addClass(colorClass);
        });
      },
      scope: {
        numberValue: '@value'
      },
      templateUrl: 'views/number.html'
    };
  });
