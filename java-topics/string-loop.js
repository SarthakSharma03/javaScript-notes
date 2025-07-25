//loops in js 
//loops are used to execute a piece of code again and again 
//type 
//for loop
//syntax
for(let i=1;i<=5;i++) {
console.log(i);
}
//calculate sum of 1 to 5 
let sum = 0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum)
// while loop 
//syntax
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}
//do- while loop
//syntax
let a =1;
do {
    console.log(a);
    a++;
} while (a<=5);
//for-of loop
//syntax
let str="sarthak"
let length =0;
for (let i of str) {
    console.log(i)
    length++;
}
console.log(length)
//for-in loop
//syntax
let student = {
    name:"sarthak",
    age:21,
    cgpa: 8.6,
    ispass:true,
    gender:"male",
}
for(let key in student) {
    console.log( key+ ":"+ student[key]);
}
//print all even number from 0 to 10
for(let i=0;i<=10;i++){
    if(i%2===0){
        console.log(i)
    }
}
//create a game where you start with any random game number ask the user to keep guessimng the game until enter correct value 
// let gamenum = 25;
//  let usernum = prompt("guess the number: ");
//  while(usernum != gamenum){
//      usernum = prompt("you entered wrong number ,guess again");

//  }
//  console.log("congratulations")
 //string 
 //can be write by "",'',``
 //template literals in js
 //a wy to have embedded expression in strings 
 //`` written in backtick 
 //`string text ${expression}string text`
 console.log('my name is sarthak\n i live in indore')
 //str.replace("searchvalue","newvalue" )
 let b = "sarthak";
 console.log(str.replaceAll("a","o"))
 