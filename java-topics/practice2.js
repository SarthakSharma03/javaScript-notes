//use logical operator to find whether the age of a person lies between 10 and 20
let a = 15;
if (a > 10 && a < 20) {
  console.log("your age lie between 10 and 20");
} else {
  console.log("your age is not lies between 10 and 20 ");
}

let age = "10";
switch (age) {
  case "10":
    console.log("your age is 10");
    break;
  case "11":
    console.log("your age is 11");
    break;
  case "12":
    console.log("your age is 12");
    break;
  case "13":
    console.log("your age is 13");
    break;
  default:
    console.log("your age is not special");
}
console.log(age);

let num = 20;
if (num % 2 === 0 && num % 5 === 0){
    console.log(`${num}is divisible by both 2 and 5`);
}
else{
    console.log(`${num} is not divisible by both 2 and 5`)
}
let num1 = 5;
if(num1 % 2 === 0 ){
    console.log(`${num1} is divisible either by 2 or 5`)
}
else if(num1 % 5 === 0) {
console.log(`${num1} is divisible either by 2 or 5`)
}
else{
    console.log(`${num1} is not divisible by both 2 and 5 `)
}