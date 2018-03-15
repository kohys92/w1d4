var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback){
  var tmp = [];
  for(var i = 0; i < arr.length; i++){
    tmp.push(callback(arr[i]));
  }
  console.log(tmp);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


