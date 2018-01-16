// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var parseArray = function(stringArr) {
    var outputArray = [];
    var wordPlaceholder = '';
    var outerQuote = true;
    for (var i = 1; i < stringArr.length - 1; i++) {
      if ((stringArr[i] === ',' && outerQuote === true ) || i === stringArr.length - 2 ) {
        outputArray.push(wordPlaceholder);
        wordPlaceholder = '';
        i += 1;
        changeValue(outerQuote);
      } else if (stringArr[i] === '"') {
        changeValue(outerQuote);
      } else {
        wordPlaceholder += stringArr[i];
      }
    }

    return outputArray;
  };
};
