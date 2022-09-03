"use strict"

let arr = ['hello', 'world', 23, '23', null];


function filterBy(a, type){
   return a.filter (value => typeof value !== type)
}

console.log(filterBy(arr, 'number'));


