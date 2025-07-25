//arrays in js 
//collection of items
let arr = [12,23,34,43,32,32];
console.log(arr);
console.log(arr.length);
console.log(typeof arr);
arr[2] = 67;// to change the value of a arr because arr is mutable {string is immutable}
console.log(arr)
//looping over array
for(let idx=0;idx<arr.length;idx++){
    console.log(arr[idx])
}
for(let num of arr ){
    console.log(arr)
}
let a = [ 85,97,44,37,76,60]
let sum = 0;
for(let val of a ){
    sum+=val;
}
let avg = sum/a.length
console.log(`avg marks of the class= ${avg}`)
