//for loop
let sum = 0 ;
for(let i = 1; i<=5; i++){
    sum+=i
    console.log(i,"+")
}
console.log(sum);
//for -in loop 
let obj = {
   sarthak: 88,
   bhumi:98,
   piyush:90,
   chirag:89,
}
for(let a in obj ){
    console.log("mark of "+ a + " are " + obj[a])
}
//for -of loop
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log("Value is: " + value);
}

//while loop -
// let i = 1;
// let n= 21
// while(i<n ){
//     console.log(i)
//     i++;
// }
// do while loop
let i = 0;
let n = 6;
do{
    console.log(i);
    i++;
}while(i<n)