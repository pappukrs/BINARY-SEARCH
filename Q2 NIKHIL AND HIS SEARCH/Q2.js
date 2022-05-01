function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=Number(input[0]);
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let q=Number(input[2]);
    let l=3;
    while(q--){
        let [t,x]=input[l].trim().split(" ").map(Number);l++;
        let y=solve(arr,t,x);
      console.log(y);
       
    }
  }
  function solve(arr,t,x){
     
      if(t===0){
          let idx=-1;
          let l=0;
          let r=arr.length-1;
          
          while(l<=r){
              let mid=l+Math.floor((r-l)/2);
              if(arr[mid]>=x){
                  idx=mid;
                  r=mid-1;
              }
              else{
                  l=mid+1;
              }
              
          }
          // return idx?(arr.length-idx):0;
          if(idx===-1){
              return 0;
          }
          else{
              let y=arr.length-idx;
              return y;
          }
      }
      if(t===1){
          let idx1=-1;
        let l=0;
          let r=arr.length-1;
          
          while(l<=r){
              let mid=l+Math.floor((r-l)/2);
              if(arr[mid]==x){
                  l=mid+1;
              }
              else if(arr[mid]>x){
                  r=mid-1;
                  idx1=mid;
              }
              else{
                  l=mid+1;
              }
              
          }
          // return idx1?(arr.length-1-idx1):0; 
           if(idx1===-1){
              return 0;
          }
          else{
              let y=arr.length-idx1;
              return y;
          }
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