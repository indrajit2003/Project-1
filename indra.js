// THIS IS WAY TO PRINT JAVASCRIPT........


//console.log("hello world");
//alert("me")
// document.write ("this is document");
"use strict";

console.log("hello world", 4 * 6, "another log");

//javascript varibles.......
//what are variables? ---- container store data values.
//multi
//line 
//Comment
var number1 = 89;
var number2 = 68;
console.log(number1+number2);

//data types of java script....
//numbers
var num1 = 455;
var num2 = 56;
console.log(num1+num2);

//string
var str1 = "this is a string";
var str2 = "this is also a string";
console.log(str1, str2);

//objects...
var marks  = {
    ravi: 78,
    indrajit: 90,
    kalyani: 78
}
console.log(marks);
//booleans.....
var a = true;
var b = false;
console.log(a,b);

//undefined & null.....
var und = undefined;
console.log(und);

var nul = null;  //variable can be defined.
console.log(null);
/*
 at a very high level there are two types off data types in js..
 1. premitive data types: undefined,null,booleans,etc
 2. reference data types: arrays & objects.
 */

 //array....
var arr = [1, 2,"indrajit", 3, 4];
console.log(arr);

//operaters in javascript...
var a = 100;
var b = 50;
console.log("the value of a + b is ",  a+b);
console.log("the value of a - b is " , a-b);
console.log("the value of a * b is ",  a*b);
console.log("the value of a / b is ",  a/b);


//assignment operator....
var c = b;  // [b=50] so c==b so,c==50;
c+=2;
console.log(c);


// comparison operators....
var x=45;  //[operator (+,-,*,/)    operant x,y];
var y=67;
console.log(x==y); //[x!=y this is boolean expression so ans is false.]
 console.log(x!=y); // [ans = true];
 console.log(x>y); // [ans = false]; 
 console.log(x<y); // [ans = true];

 //logical operator....
 // 1.
 console.log(true & true); // [true & true = true . so, ans = 1.];
 console.log(true & false); // [true & false = false . so,ans =0];
 console.log(false & false); // [false & false = false . so, ans=0];

//2. Logical or.....
console.log(true||true); // ans true;
console.log(true||false); // ans true;
console.log(false||true);// ans true;
console.log(false||false);// ans true;

//3.Logical not......
console.log(!true); // false;
console.log(!false); // true;





















