document.getElementsByClassName = function(classValue) {
    var elements = document.getElementsByTagName("*"); 
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].className.split(" ").indexOf(classValue) !== -1) {
        result.push(elements[i]);
      }
    }

    return result; 
  };

var elements = document.getElementsByClassName("my-class");
console.log(elements);