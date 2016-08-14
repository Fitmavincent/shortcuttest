var URL_STRING = "http://rndtest.shortcuts.com.au";
//var LOCAL_URL = 'localjson.json';
//var TEST_URL = 'testjson.json';

var REGEX_REPLACE = /\W+\d+/g;
var REGEX_MATCH = /\w+/gi;


function wordFrequency(word, wordCount){
  this.word = word;
  this.wordCount = wordCount;
  this.company = [];
}

var shortcuts = angular.module("shortcuts", []);

shortcuts.controller("shortcutsController", function($scope, $http){
  $scope.results = [];

  function findCommonWord(displayName){
    var wordFrequencyArray = [];
    var displayArray = [];

    var results = displayName.map(function(item){
      var wordArray = item.display_name.trim().replace(REGEX_REPLACE, ' ').match(REGEX_MATCH);
      countCommonWord(wordFrequencyArray, wordArray, item.display_name);
    });

    wordFrequencyArray = wordFrequencyArray.sort(function(a, b){
      return b.wordCount - a.wordCount;
    });

    return wordFrequencyArray;
  }

  function countCommonWord(wordFrequencyArray, wordArray, fullString){
    var wordCount = 0;

    for(var i=0; i<wordArray.length; i++){
      var word = wordArray[i].toLowerCase();
      if(word.length > 2 && word != "the" && word != "and" && word != "for" && word != "above" && word != "within"){
        var existCommonWord = checkExist(wordFrequencyArray, word);
        if(existCommonWord !== undefined){
          existCommonWord.wordCount += 1;
          existCommonWord.company.push(fullString);
        }
        else{
          var firstOccurWord = new wordFrequency(word, 1);
          firstOccurWord.company.push(fullString);
          wordFrequencyArray.push(firstOccurWord);
        }
      }
    }
  }

  function checkExist(array, string){
    return array.find(function(object){
      return object.word === string;
    });
  }

  $http.get(URL_STRING).success(function(response){
    // console.log("successful get");
    $scope.words = findCommonWord(response.companies);
  }).error(function(err, status){
    // console.log("fail to load" + status);
  });
});
