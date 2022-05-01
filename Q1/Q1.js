function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
  //   console.log(input);
    let [n,q]=input[0].trim().split(" ").map(Number);
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
  //   console.log(arr);
    let l=2;
    while(q--){
        let x=Number(input[l]);l++;
        console.log(solve(arr,x));
    }
  }
  
  function solve(arr,q){
      let l=0;
      let r=arr.length-1;
      while(l<=r){
          let mid=l+Math.floor((r-l)/2);
          if(arr[mid]===q){
              return "YES";
          }
          else if(arr[mid]>q){
              r=mid-1;
          }
          else{
              l=mid+1;
          }
      }
      return "NO";
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