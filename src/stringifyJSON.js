// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj + '';
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var output = [];
    if (obj.length > 0) {
      for (var i = 0; i < obj.length; i++) {
        output.push(stringifyJSON(obj[i]));
      }
    }
    return '[' + output + ']';
  } else if (typeof obj === 'object') {
    var output = [];
    for (key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      } 
      
    }
    return '{' + output.join(',') + '}';
  }
  
};
