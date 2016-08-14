angular.module('shortcuts')
.directive('shTableView', [function(){
  return{
    restrict: 'E',
    scope: {
      displayWords:"=shDisplayWords",
      selectedWord:"=shSelectedWord"
    },
    templateUrl: 'partial.html',
      controller: function($scope){
        $scope.getWordInfo = function(word){
          if(word.isSelected){
            $scope.selectedWord = $scope.selectedWord.copy(word);
          }
      };
    }
  };
}]);
