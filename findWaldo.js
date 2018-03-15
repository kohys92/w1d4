function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var index = i;
      var name = arr[i];
      found(name, index);   // execute callback
    }
  }
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);