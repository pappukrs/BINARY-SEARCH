function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=Number(input[0]);
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let q=Number(input[2]);
    let l=3;
    while(q--){
        let x=Number(input[l]);l++;
        console.log(solve(arr,x));
    }
  }
  function solve(arr,x){
      let l=0;
      let r=arr.length-1;
      let idx=-1;
      while(l<=r){
          let mid=l+Math.floor((r-l)/2);
          if(arr[mid]===x){
              r=mid-1;
          }
          else if(arr[mid]<x){
              
              idx=mid;
              l=mid+1;
          }
          else{
             r=mid-1; 
          }
      }
      if(idx===-1){
          return 0;
      }
      else{
          let y=idx+1;
          return y;
      }
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