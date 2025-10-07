console.log("Siva Murugan");
console.log("Hello Java Script");
//string Method
myVariable="Mathematics";
console.log(myVariable);
//length
console.log(myVariable.length)
//string methods
console.log(myVariable.charAt(9))
//Indexof
console.log(myVariable.indexOf("s"))
//lastIndexOf
console.log(myVariable.lastIndexOf("t"))
//slice
console.log(myVariable.slice(5,9))
//upper case
console.log(myVariable.toUpperCase())
//lower case
console.log(myVariable.toLowerCase())
//includes True or false check the character in the original string
console.log(myVariable.includes("mat"))
console.log(myVariable.includes("siva"))
//split
console.log(myVariable.split(""))
console.log(myVariable.split("e"))
//usage of let and const
//let dynamic can be change the value 
//const can't be change and fixed value
//Numbers
const myNumber=45;
const myFloat=45.8;
console.log(myNumber);
console.log(myFloat);
console.log(myNumber===myFloat);
const varaiable="42";
const number=42;
console.log(varaiable==number);
//string to number
console.log(varaiable);
console.log(Number(varaiable)+3 );
console.log(Number("5")+7);
console.log(Number("Siva")+7);
console.log(Number(true)+7);
console.log(Number(false)+7);
//Number methods
//ISINTEGER
console.log(Number.isInteger(7))
//PARSEFLOAT
console.log(Number.parseFloat(varaiable));
varaiable1="559.067855hhh"
console.log(Number.parseFloat(varaiable1));
//Parseint
console.log(Number.parseInt(varaiable1));
//tofixed
console.log(Number.parseFloat(varaiable1).toFixed(2));//559.07 
//toString
console.log(myNumber.toString());
console.log(typeof (myNumber.toString()));
//ISNAN(global isnan)
console.log(isNaN("Siva"));
console.log(isNaN("3"));
//number.isNAaN
console.log(Number.isNaN("8"));
//Math Methods
//Pi
console.log(Math.PI)
//trunc
console.log(Math.trunc(Math.PI))
//round
console.log(Math.round(Math.PI))
//ceil
console.log(Math.ceil(7.9))
//floor
console.log(Math.floor(7.6654))
//power
console.log(Math.pow(4,2))
//Min
console.log(Math.min(1,4,5,6,798,3))
//Max
console.log(Math.max(1,4,5,6))
//Random
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10)+1)
//Coding Challenge
//print random of the given string
console.log("Sivamurugan".charAt(Math.floor(Math.random()*11)))
const myName="Hello Python"
//Reusability fixed code in the random of the given string
console.log(myName.charAt(Math.floor(Math.random()*myName.length)))
//IF Statements
//Also same as else if conditions one or more conditions use else if condition
let view="Python"
let reply;
if(view){
    reply="Enjoy"
    console.log(reply)
}
else{
    reply="Bye"
    console.log(reply)
}
let name="Siva"
let point;
if(name){
    point=`Hello ${name} how are you`
    console.log(point)
}
else{
    point="Bye"
}
//Switch
switch("2"){
    case "1":
        console.log(1)
        break
    case "2":
        console.log(2)
        break
    default:
        console.log("sorry")
}
//Ternary Operator
const age=15;
const con=age>=20?"Pass":"Fail";
console.log(con);
let score=85;
let grade=score>89?"A":score>79?"B":"C";
console.log(grade);
//User input
//alret confirm prompt ??
//let myBoolean=confirm("Hi");
//console.log(myBoolean)
//let my=prompt("Enter your Name:")
//console.log(my);
//let my1=prompt("Enter your Name:")
//console.log(my1??"You didn't name");
//trin avoid white space
// let my=prompt("Enter your Name:")
// console.log(my);
// console.log(my.trim().length)
//loops
//while loop do while
let i=0;
while(i<=5){
    console.log(i);
    i=i+1;
}
let j=1;
for(j;j<5;j++){
    console.log(j);
}
//Functions
function sum(num1,num2){
    return num1+num2;
}
console.log(sum(4,8));
console.log(sum(5,8));
console.log(sum(6,8));
function toProferCase(name){
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
let name1="sivamurugan"
console.log(toProferCase(name1))
const profer=(name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}
let name2="sivamurugan"
console.log(profer(name1))
//scope-var,let,const
//global scope
var x=1;
let y=2;
let z=3;
//local scope //block scope
{
    let y=4;
    console.log(y)
}
//local scope //function scope
function myFunc()
{
const z=8;
console.log(z)
}
//Arrays
const myArray=[];
//adding element
myArray[0]="siva"
myArray[1]="murugan"
myArray[2]=33
myArray[3]=true
console.log(myArray)
console.log(myArray.length)
console.log(myArray[myArray.length-1])
//add the element
myArray.push("python")
myArray.pop()
console.log(myArray)
//insert element first
myArray.unshift("java")
//remove first element
myArray.shift()
//delete index
//delete myArray[2]//show empty
myArray.splice(1,1)
myArray.splice(2,0,"script")//copy of a new array
const newArray=myArray.slice(1);
console.log(newArray);
//reverse array
myArray.reverse()
console.log(myArray);
//concanate array
myArrayA=["false",44,99]
console.log(myArrayA.concat(myArray))
console.log(...myArrayA,...myArray)
//two dinminoal array
const newArrayA=[newArray,myArray]
console.log(newArrayA[0][1])
//object
//key-value pairs in curly braces
const myObj={name:"siva"};
console.log(myObj)
console.log(myObj.name)
const anotherObj={
    subject:"Tamil",
    score:100,
    name:"siva",
    subjects:["Tamil","English","maths"]
};
console.log(anotherObj.subject)
console.log(anotherObj["name"])//another calling key["name"]
console.log(anotherObj.subjects[0])
const vehicle={
    door:2,
    engine:function(){
        return "Vrooon!";
    }
};
console.log(vehicle.engine());
const car=Object.create(vehicle)//inherit the parent class
console.log(car.engine());
const movie={
    actor:"Vijay",
    music:"Arr",
    director:"Lokesh",
    producer:"Anbu"
}
console.log(Object.keys(movie))
console.log(Object.values(movie))
movie.date="4.01.2004"
delete movie.producer
console.log(movie.hasOwnProperty("producer"))//return true or false "hasOwnProperty"
for(let job in movie){
    //console.log(movie.job)
    console.log(movie[job]);
    console.log(`${job},it's ${movie[job]}`)
}
//destructuring the objects
const {music:myFavMusicDirector}=movie;
console.log(myFavMusicDirector)
//class
const myPizza={
    size:"medium",
    crust:"original",
    bake:function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`)
    }

};
myPizza.bake()
class Pizza{
    constructor(){
        this.size="medium";
        this.crust="Original";
    }
bake(){
    return console.log(`Baking a ${this.size} ${this.crust}`)
}
}
const anotherPizza=new Pizza();
anotherPizza.bake()
console.log(anotherPizza.size )

class Pizza1{
    constructor(typePizza,sizePizza){
        this.type=typePizza;
        this.size=sizePizza;
    }
bake(){
    return console.log(`Baking a ${this.size} ${this.type}`)
}
}
const newPizza=new Pizza1("margarita","small");
newPizza.bake()
//JSON javascript object Notation
//text format
//to send nd receive data in many programming language
const myObj1={
    name:"siva",
    content:["Earn","Grow","Give"],
    sub:function(){
        console.log("Thanks for clicking bell icon");

    }
};
console.log(myObj1)
console.log(myObj1.name)
myObj1.sub()

const sendJSON=JSON.stringify(myObj1)
console.log(sendJSON)
//error and error handling
"use strict"//reference error
const a="siva"
console.log(a)
//syntax error
//type error
const makeError=()=>{
    try{
        const names="siva";
        names="murugan"

    }catch(err){
        console.table(err);//error,warn,table
        logTheError(err.stack);
        
    }
}
makeError()

