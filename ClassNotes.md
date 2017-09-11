Syntax Parsar:
A program that reads your code and determines what it does and if its grammar is valid.

Lexical Environment:
Where something sits physically in the code you write. (In this context; Lexical: Where you write something is important)

Execution Context:
A wrapper to help manage the code that is running.

Name/Value Pair:
A name which maps to a unique value.

Object:
A collection of name/value pairs. (Global Objects in Javascript are denoted as 'this')

Function:
A special type of object.
Name property- a function can have a given name or no name (known as an Anonymous function)
Code property- a property of if Object.

Global: 'Not inside a function'

Javascript runs through 'hoisting' as opposed to a line by line set up (i.e Ruby,Python etc)

'undefined' and 'not defined' is not the same. undefined simply means the variable has not been set

Single Threaded:
One command at a time.

Synchronous:
one at a time.

Asynchronous
more than one at a time

Invocation (or invoke):
Running a function; done by use parenthesis

Variable Environment:
Where the variable lives

*execution context runs from global context then to the context within a specific function*

Scope:
Where a variable is available in your code. (and if it's truly the same variable or a new copy)

Dynamic Typing:
you don't tell the engine what type of data a variable holds, it figures it out while you code is running.

Primitive Type:
a type of data that represents a single value.
(undefined: represents a lack of existence [shouldn't set a variable to this];
null: represents lack of existence [you can set a variable to this];
boolean: either true or false;
number: floating point number[meaning that theres always a decimal]
string: a sequence of characters;
symbol: used in ES6)

Operator:
A special function that is syntactically (written) differently (i.e + - * / >= > <= < == ===)

Operator Precedence:
Which operator gets called first. (higher precedence wins) https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Associativity:
What order operator functions get called in. (either 'left to right' or 'right to left')

Coercion:
Converting a value from one type to another.

NaN:
Not a Number. When trying to coerce a value that cannot be made into a value

Namespace:
A container for variables and functions

*In Javascript, functions are considered objects*

First Class Functions:
Everything you can do with other types you can do with functions.

Expression:
A unit of code that results in a value.

Anonymous - a function with no name. [as a sidenote, they cannot be hoisted if the called function is placed before the Anonymous function is defined]
(e.g var foo = function(){
  console.log('i\'m a function')
  }

  called with foo();
  )

Mutate - simply to change something

Immutable - cannot be changed

This - references the global object or the object that contains the

Arguments - the parameters you pass to a function

White Space - invisible characters that create literal space when you type your code


Immediately invoked function expression (IIFE)(
    // function statement
    function greet(name){
      console.log('hello '+ name)
    }
    greet();

    //function Expression
    var greetFunc = function(){
      console.log('hello '+ name)
    }
    greetFunc();

    //using a IIFE
    var greetFunc = function(){
      return 'Hello '+ name;
    }(name);
    console.log(greeting);


    //another example of an IIFE
    var firstname = 'Adrian'

    (function(name) {
      var greeting = 'inside the IIFE function: hello';
      console.log(greeting+' '+name);
      }(firstname));
  )


 Closures - A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain.


 Function Factory Example

 function makeGreeting(language){
   return function(firstname, lastname){
     if (language === 'en'){
       console.log('hello ' + firstname + ', ' + lastname);
     }

     if (language === 'es'){
       console.log('hola ' + firstname + ', ' + lastname);
     }

   }
 }

 var greetEnglish = makeGreeting('en');
 var greetSpanish = makeGreeting('es');

 greetEnglish('Adrian', 'Pearman')
 greetSpanish('Adrian', 'Pearman')

Callback Function - a function you give to another function, to be run when the other function is finished

 Callback Example

 function sayHiLater(){
   var greeting = 'hello!';
   var timer = 3000;
   setTimeout(function(){
     console.log(greeting);
     },timer)
 }

 sayHiLater();



call(), apply(), bind() example:
call and apply invoke function and set up the 'this' keyword
bind creates a copy of a function and also allows
 var person = {
   firstname: 'Adrian',
   lastname: 'Pearman',
   getFullName: function(){
     var fullname = this.firstname + ' ' + this.lastname;
     return fullname;
   }
 }

 var logName = function(lang1, lang2){
   console.log('Logged: '+ this.getFullName())
   console.log('Arguments: '+lang1 + ' ' + lang2)
   console.log('-------------')
 }
<!--
  SHOTRT HAND VERSION OF LINES 188-190
 var logName = function(lang1, lang2){
   console.log('Logged: '+this.getFullName())
 }.bind(person)
 logName();
 -->

 var logPersonName = logName.bind(person);

 logPersonName('en');
 logName.call(person, 'en', 'es');
 logName.apply(person, ['en', 'es']);
<!-- This will return the name -->


// <!-- FUNCTION BORROWING -->
var person2 = {
  firstname: 'Brad',
  lastname: 'Joe'
}

console.log(person.getFullName.apply(person2))

//  
<!-- FUNCTION CURRYING: Creating a copy of a function but with some preset. parameters. Very useful in mathmatical scenarios -->
function multiply(a,b){
  return a*b;
}

var multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(4))


Functional Programming
function mapForEach(arr, fn){
  var newArr = [];
  for(var i=0; i < arr.length; i++){
    arr.push(
      fn(arr[i])
      )
  }
  return newArr;
}

var arr1 = [1,2,3,4];
console.log(arr1)


// var arr2 = [];
// for(var i=0; i < arr1.length; i++){
//   arr2.push(arr1[i]*2)
// }
// console.log(arr2)

// <!-- USING FUNCTIONAL PROGRAMMING INSTEAD -->

var arr2 = mapForEach(arr1, function(item){
    return item*2
  })
console.log(arr2)

var arr3 = mapForEach(arr1, function(e){
  return e > 2
})
console.log(arr3);

var checkPastLimit = function(limiter, item){
  return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1))
console.log(arr4);

var checkPastLimit2 = function(limiter){
  return function(limiter, item){
    return item > limiter;
  }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimit2(2))
console.log(arr5);


Inheritance: One object gets access to the properties and methods of another object


Prototypes:
var person = {
  firstname: 'default',
  lastname: 'default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname
  }
}

// To save space and to run more efficiently, it's advised to add methods to the prototype as opposed to function so that doesnt have to be applied to every instance of the function

example:
function Person1(firstname, lastname){
  console.log(this)
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this has been invoked')
}

Person1.prototype.getFullName = function(){
  return this.firstname + ' ' + this.lastname   
}

var john = new Person1('john', 'doe')
console.log(john)


_--------------------

var john = {
  firstname: 'john',
  lastname: 'doe'
}

// Dont ever do this in real code! Just for demonstration purposes
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);


var jane{
  firstname: 'jane'
}

jane.__proto__ = person
console.log(jane.firstname);
console.log(jane.getFullName());


// returns all values of the proto object
for(var prop in john){
  console.log(prop+':'+john[prop]);
}

// this will return the prop value if it's prop and not a function
for(var prop in john){
  if (john.hasOwnProperty(prop)) {
    console.log(prop+': '+john[prop]);
  }
}

var jane = {
  address: '111 Main Street',
  getFormalFullName: function(){
    return this.lastname+', '+this.firstname
  }
}

var jim = {
  getFirstName: function(){
    return firstname
  }
}


Reflection
An Object that can look at itself, listening and changing its properties and methods
 example:
 // _.extend(john, jim, jane) = only works with the underscore.js script file attached - this method uses the prototype value to string multiple variables and key, values


The 'New' value
// the 'new' keyword is an operator that creates an empty object then calls the function when called

function Person(){
  this.firstname = 'adrian',
  this.lastname = 'pearman'
}

// when passed through, the function will create a new object but with the set parameters in the function
var john = new Person()
console.log(john);


function Person(firstname, lastname){
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this is being invoked')
}

// in this example when passed through, the function will create a new object set parameters in the variable
var jane = new Person('Jane','Doe')
console.log(jane)


Function Constructors - a normal function that is used to construct objects

var a = new String('Adrian') - (looks like it creates a  primitive but it infact creates an object that contains primitives )

when logged to console it will return:
String {0: "a", 1: "d", 2: "r", 3: "i", 4: "a", 5: "n", length: 6, [[PrimitiveValue]]: "adrian"}

String.prototype.isLengthGreaterThan = function(limit){return this.length > limit}

function (limit){return this.length > limit}
console.log("John".isLengthGreaterThan(3))

returns: true

* this function only works where the Javascript Engine is actively converting "John" into a string, however this will not work for a number unless it is defined as a variable beforehand*


var a = 3
var b = new Number(3)

a == b  => true
a===b  => false

var a is primitive and var b is an object which why 'a === b' returns false. This is why it's dangerous to use


Moment.JS = Look it for math functions using dates


For..In +> Why it shouldn't be used for projects

Array.prototype.myCustomFeature = 'cool!';
var arr = ['John','Joe','Jane']

for (var prop in arr){
  console.log(prop+': '+arr[prop]);
}

this will return:
0: John
1: Joe
2: Jane
myCustomFeature: cool!

this will iterate through the array, but because when use for in method, it will iterate through each primitive object in the file. to prevent this from happening; it's advised to use the standard method (for (var i = 0; i < array.length; i++) { array[i] } )

Polyfill - Code that adds a feature which the engine may lack

Syntactic Sugar - A different way to type something that doesnt change how it works under the hood

class Person{
  constructor(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet(){
    return 'Hi '+firstname
  }
}
var john = new Person('John', 'Doe')

<!-- This uses new ES6 formatting to create a new prototype -->
class InformalPerson extends Person{
  constructor(firstname,lastname){
    super(firstname, lastname)
  }

  greet(){
    return 'Yo '+firstname
  }
}


typeof - The typeof operator returns a string indicating the type of the unevaluated operand.

var a = 3
console.log(typeof a); -  returns number
var b = 'Hello'
console.log(typeof b); - returns string
var c =  {}
console.log(typeof c); - returns object
var d = []
console.log(typeof d); - returns object
console.log(Object.prototype.toString.call(d)); - returns [object Array] // Better for determining what these types of objects are

function Person(name){
  this.name = name
}

var e = new Person('Jane');
console.log(typeof e); - returns object
console.log(e instanceof Person); - returns true // as there is an instance of person in the prototype chain
console.log(typeof undefined);- returns object
console.log(typeof null); - returns null //a bug in Javascript

var z = function(){}
console.log(typeof z);

Use Strict -  will only run the code if all of the called objects match.
The example below will throw an error as the variable for person2 is misspelt when called with the console.log
function logNewPerson(){
  'use strict';
  var person2;
  persom2 = {};
  console.log(persom2);
}

normally if 'var person' is called, then 'console.log(persom)' is called; no error would be found as person would be an undefined object and persom would just be an empty object.
more info on strict mode here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

Method Chaining - calling one method after another, and each method affects the parent object.











































d
