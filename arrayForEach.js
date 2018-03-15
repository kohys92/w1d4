function findWaldo(arr, found) {
  foreach(arr, found);
}

function foreach(list, callback) {
  list.forEach(function(element){
    if(element === "Waldo") {
      callback(element, list.indexOf(element));
    }
  });
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);