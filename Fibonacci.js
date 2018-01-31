console.log("Fibonacci.js");

//Write a Fibonacci number generator that outputs the numbers 
//in the series that are less than 500

var fibo_num = 0;
var num2 = 1;
 console.log(fibo_num);
while(num2 <= 500) {
  console.log(num2);
  num2 = fibo_num + num2;
  fibo_num = num2 - fibo_num;
}



  

