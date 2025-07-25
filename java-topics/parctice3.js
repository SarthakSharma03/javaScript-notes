//write a program to print the marks of a student in an object using for loop 
//obj ={ sarthak:98,harry:70,rohan:86}
let marks ={
    sarthak: 90,
    harry :71,
    rohan:56,
    vivek:78
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log(`the marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}` )
}
for(let key in marks){
    console.log(key + " : " + marks[key]);
}
