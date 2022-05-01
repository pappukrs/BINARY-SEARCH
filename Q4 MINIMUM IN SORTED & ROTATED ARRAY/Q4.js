function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=Number(input[0]);
    let arr=input[1].trim().split(" ").map(Number);
    console.log(minimum(arr,n));
    
  }
  
   function  minimum(arr,n){
       let l=0;
       let h=n-1;
       
       while(l<=h){
           let mid=l+parseInt((h-l)/2);
           
           if(arr[mid]===arr[h]){
               h--;
           }
           else if(arr[mid]>arr[h]){
               l=mid+1;
           }
           else{
               h=mid;
           }
       }
       return arr[l];
   }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }