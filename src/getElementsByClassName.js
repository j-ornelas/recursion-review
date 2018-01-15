// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var doc = document.childNodes;
  var searcher = function(nodes) {
    console.log(nodes);
    for (var i = 0; i < nodes.length; i++) {
      console.log(nodes[i].childNodes);
      if (nodes[i].childNodes.length > 0) {
        if (nodes[i].classList.contains(className)) {
          output.push(nodes[i]);
        }
        searcher(nodes[i].childNodes);
      } else if (nodes[i].classList !== undefined && nodes[i].classList.contains(className)) {
        output.push(nodes[i]);
      }
    }
  };
  searcher(doc);
  return output;
};
