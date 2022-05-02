function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=Number(input[0]);
    let arrivalARR=input[1].trim().replace(/:/gi,0).split(" ").map(Number).sort((a,b)=>a-b);
    let departureARR=input[2].trim().replace(/:/gi,0).split(" ").map(Number).sort((a,b)=>a-b);
  //   console.log(arrivalARR,departureARR);
  console.log(solve(arrivalARR,departureARR));
  }
   function solve(arrivalArr,departureArr){
      let min_platform=1;
      let i=1;
      let j=0;
      while(i<arrivalArr.length){
          if(arrivalArr[i]<=departureArr[j]){
              min_platform++;
              i++;
          }
          else if(arrivalArr[i]>departureArr[j]){
              i++;
              j++;
              
          }
      }
      return min_platform;
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