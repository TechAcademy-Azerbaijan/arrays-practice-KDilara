const prompt = require("prompt");
prompt.start();

prompt.get("input", function (err, result) {
  var input = result.input; // "5,3 5 6 8 9"
  var arr = input.split(","); // ['5', '3 5 6 8 9']
  let max = -Infinity;  
    let min = Infinity;
    let indexMax;
    let indexMin;
    for(i=0; i<arr.length; i++){
      if( arr[i]>max){
        max=arr[i]
       indexMax=i;
      }
      if(arr[i]<min){
        min = arr[i]
        indexMin=i;
      }
    }
  
    let temp = arr[indexMax];
    arr[indexMax]=arr[indexMin];
    arr[indexMin]=temp;
    
    for(i=0; i<arr.length; i++){
  console.log(arr[i])
    }
  
});
