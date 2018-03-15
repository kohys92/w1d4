var countdownGenerator = function (x) {
  /* your code here */
  var count = x + 1;

  return function() {
    count-=1;
    if(count > 0){
      console.log("T-minus" + count + "...");
    }
    else if(count === 0){
      console.log("Blast Off!");
    }
    else{
      console.log("Rockets already gone, bub!");
    }
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!