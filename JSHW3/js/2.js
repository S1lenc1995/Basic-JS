"use strict"
var m = +prompt ("Enter first number");

while (Number.isNaN(m) || m.length === 0)  {
    m = +prompt ("Enter corect first number");
    
}

var n = +prompt ("Enter second number");
while ( Number.isNaN(n) || n.length === 0 ){
   n = +prompt ("Enter corect second number");
}

if (n<=m){
    alert ("Первое число должно быть меньше за второе")
}


 

A:
for (var i = m; i <= n; i++) {

  for (var j = 2; j < i; j++) {
    if (i % j == 0) {continue A;
    }
  }

  console.log( i ); 
}