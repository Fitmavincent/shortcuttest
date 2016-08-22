angular.module('shortcuts')
.directive('shTableView', [function(){
  return{
    restrict: 'E',
    scope: {
      words:"=shDisplayWords",
      companies:"=shSelectedWord"
    },
    templateUrl: '/js/partials/partial.html',
      controller: function($scope){
        $scope.getWordInfo = function(word){
          var companyArray = [];
          for(var i=0; i<Object.keys(word.company).length; i++){
            companyArray.push(word.company[i]);
          }
          $scope.companies = companyArray;
      };
    }
  };
}]);
