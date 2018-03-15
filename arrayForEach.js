function findWaldo(arr, found) {

  arr.forEach(function(element){
    if(element === "Waldo") {
      found(element, arr.indexOf(element));
    }
  });
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);