const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var arr = input.split(","); // ['5', '3 5 6 8 9']
  let max = -Infinity;
  let sum= 0;
  let count;
  for(i=0; i<arr.length; i++){
    sum= sum+arr[i];
    if( arr[i]>max){
      max=arr[i]
      count = 1;
    }else if(arr[i]==max){
      count ++;
    }

  }

  if(sum/arr.length < max){
   
    console.log(max*count)
   console.log(count)
  }

});
