"use strick"

let n = +prompt ('Enter your number'); 
while(n ==='' || Number.isNaN(+n)){
    n = prompt ('Enter corect number', `${n}`)
}


function fib( F1, F2, n) {
    if(n == 0){
    return 0;
   } else if (n == 1){
    return F1;
   } else if (n == 2){
    return F2;
   } else if (n > 2){
   return fib( F1, F2, n - 1) + fib( F1, F2, n - 2);
   } else if (n < 0) {
    return fib( F1, F2, n + 1) + fib( F1, F2, n + 2);
   }
 }
 
 alert(fib( 7, 8, n));