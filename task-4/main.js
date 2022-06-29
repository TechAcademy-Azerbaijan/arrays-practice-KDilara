const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var arr = input.split(","); // ['5', '3 5 6 8 9']
  let arr2=[];

  for(i=0; i<arr.length; i++){  
    if(!arr2.includes(arr[i])){
    arr2.push(arr[i])
   
    }
  }
  console.log(arr2)
  
});
