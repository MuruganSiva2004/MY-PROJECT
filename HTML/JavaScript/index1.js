//consloe.log
//basic of javascript
let name1="Siva";
console.log(name1);
//Highlighting error
console.error("This is an error message.")
//tabular data display
const users=[{name:"alice",age:16},
    {name:"siva",age:14}
];
console.table(users)
//consloe.group and console.groupend organizing logs
console.group("User Details");
console.log("Name:Alice");
console.log("Age:18");
console.groupEnd();
//console.assert() conditional logging
let age=14;
console.assert(age>=16,"User is not an adult!!")
//cleaning up
//console.clear()

//function creation types
//named function
function myFunction(){
    console.log("Code Editior")
}
myFunction()
//Anonymous
let greet=function(name){
    console.log(`Hello ${name}`);
}
greet("Siva")
//Arrow Function
let greet1=()=>console.log("Hello");
greet1();
//IIFE- Immediately Invoked Function
(function(){
    let str1="Good Morning!";
    console.log(str1);
})();
//Higher Order Function
//map,filter,reduce
let arr=[10,20,30]
let newArray=arr.map((Element)=>Element+10);
console.log(newArray)
//constructor function
function Persion(name,place){
    this.name=name;
    this.place=place;
}
let user1=new Persion("Siva","India");
console.log(`Hello everyone this is ${user1.name},and i am from ${user1.place}`);
//trim- remove white space
let input=" Hello, World!  "
console.log(input.trim());