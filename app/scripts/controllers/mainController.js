angular.module('rouletteModelApp')
  .controller('mainController', ['$scope', function($scope) {
    $scope.tableRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    $scope.tableCols = [0, 1, 2];
    $scope.wheelNumbers = [{
        number: '0',
        color: 'green'
      }, {
        number: '28',
        color: 'black'
      }, {
        number: '9',
        color: 'red'
      }, {
        number: '26',
        color: 'black'
      }, {
        number: '30',
        color: 'red'
      }, {
        number: '11',
        color: 'black'
      }, {
        number: '7',
        color: 'red'
      }, {
        number: '20',
        color: 'black'
      }, {
        number: '32',
        color: 'red'
      }, {
        number: '17',
        color: 'black'
      }, {
        number: '5',
        color: 'red'
      }, {
        number: '22',
        color: 'black'
      }, {
        number: '34',
        color: 'red'
      }, {
        number: '15',
        color: 'black'
      }, {
        number: '3',
        color: 'red'
      }, {
        number: '24',
        color: 'black'
      }, {
        number: '36',
        color: 'red'
      }, {
        number: '13',
        color: 'black'
      }, {
        number: '1',
        color: 'red'
      }, {
        number: '00',
        color: 'green'
      }, {
        number: '27',
        color: 'red'
      }, {
        number: '10',
        color: 'black'
      }, {
        number: '25',
        color: 'red'
      }, {
        number: '29',
        color: 'black'
      }, {
        number: '12',
        color: 'red'
      }, {
        number: '8',
        color: 'black'
      }, {
        number: '19',
        color: 'red'
      }, {
        number: '31',
        color: 'black'
      }, {
        number: '18',
        color: 'red'
      }, {
        number: '6',
        color: 'black'
      }, {
        number: '21',
        color: 'red'
      }, {
        number: '33',
        color: 'black'
      }, {
        number: '16',
        color: 'red'
      }, {
        number: '4',
        color: 'black'
      }, {
        number: '23',
        color: 'red'
      }, {
        number: '35',
        color: 'black'
      }, {
        number: '14',
        color: 'red'
      }, {
        number: '2',
        color: 'black'
      }];

    $scope.numberForRowCol = function(row, col) {
      return row + (row + (row + (col + 1)));
    };

    $scope.getOvalColorForNumber = function(number) {
      var color = '';

      $scope.wheelNumbers.forEach(function(wheelNumber) {

        if (wheelNumber.number === number.trim()) {
          color = wheelNumber.color;
        }
      });

      return color;
    };

    $scope.getHighlightColor = function(number, clicked) {
      var clickNeighbors = getNeighbors(clicked),
          color;

      switch(number.trim()) {
        case clickNeighbors[0].number:
          color = 'hover3';
          break;
        case clickNeighbors[1].number:
          color = 'hover2';
          break;
        case clickNeighbors[2].number:
          color = 'hover1';
          break;
        case clickNeighbors[3].number:
          color = 'hover2';
          break;
        case clickNeighbors[4].number:
          color = 'hover3';
          break;
        default:
          color = 'green';
      }

      return color;
    };

    $scope.triggerNumberClickEvent = function(number) {
      $scope.$broadcast('numberClicked', number);
    };

    function getNeighbors(number) {
      var indexMinusOne,
          indexMinusTwo,
          indexPlusOne,
          indexPlusTwo,
          index = getIndexForValue(number);

      indexMinusOne = (index - 1 < 0) ? ($scope.wheelNumbers.length + (index - 1)) : index - 1;
      indexMinusTwo = (index - 2 < 0) ? ($scope.wheelNumbers.length + (index - 2)) : index - 2;
      indexPlusOne  = (index + 1 >= $scope.wheelNumbers.length) ? ((index + 1) - $scope.wheelNumbers.length) : index + 1;
      indexPlusTwo  = (index + 2 >= $scope.wheelNumbers.length) ? ((index + 2) - $scope.wheelNumbers.length) : index + 2;

      return [
        $scope.wheelNumbers[indexMinusTwo],
        $scope.wheelNumbers[indexMinusOne],
        $scope.wheelNumbers[index],
        $scope.wheelNumbers[indexPlusOne],
        $scope.wheelNumbers[indexPlusTwo]
      ]
    }

    function getIndexForValue(number) {
      var numberIndex = -1;

      $scope.wheelNumbers.forEach(function(wheelNumber, index, array) {

        if (wheelNumber.number === number.trim()) {
          numberIndex = index;
        }
      });

      return numberIndex;
    }
  }]);
