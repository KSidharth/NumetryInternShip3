// function fun()  
// {  
//     function closure(val)  
//     {  
//         return function()  
//         {  
//             return val;  
//         }  
//     }  
//     var a = [];  
//     var i;   
//     for (i = 0; i < 5; i++)  
//     {  
//         a[i] = closure(i);   
//     }  
//     return a;  
// }  
// var output = fun();  
// console.log(output[0]());  
// console.log(" ");  
// console.log(output[1]());  
// console.log(" ");  
// console.log(output[2]());  
// console.log(" ");  
// console.log(output[3]());  
// console.log(" ");  
// console.log(output[4]());  

let counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();

console.log("Counter: "+counter)