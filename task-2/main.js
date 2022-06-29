const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var arr = input.split(","); // ['5', '3 5 6 8 9']
let count = 0;

for (i = 1; i < arr.length; i++) {
  if(arr[1]!=undefined){
  if (arr[i-1] < arr[i ] && arr[i ] > arr[i + 1]) {
    count++;
  }
}
}
console.log(count);
});
