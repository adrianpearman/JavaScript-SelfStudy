// the purpose of this file is to implement the tutorial code while also being able to validate code for any mistakes or syntax conflicts

// function factory example

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




function mapForEach(arr, fn){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  };
  return newArr;
}

var arr1 = [1,2,3,4]
console.log(arr1);

var arr2 = mapForEach(arr1, function(e){
  return e * 2
})
console.log(arr2);

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




var person = {
  firstname: 'default',
  lastname: 'default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname
  }
}

var john = {
  firstname: 'john',
  lastname: 'doe'
}

// Dont ever do this in real code! Just for demmonstration purposes
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

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

// _.extend(john, jim, jane) = only works with the underscore.js script file attached



function Person(){
  this.firstname = 'adrian',
  this.lastname = 'pearman'
}

// when passed through, the function will create a new object but with the set parameters in the function
var john = new Person()
console.log(john);

// the 'new' keyword is an operator that creates an empty object then calls the function. when called

function Person(firstname, lastname){
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('this is being invoked')
}

// in this example when passed through, the function will create a new object set parameters in the variable
var jane = new Person('Jane','Doe')
console.log(jane)



Array.prototype.myCustomFeature = 'cool!';
var arr = ['John','Joe','Jane']

for (var prop in arr){
  console.log(prop+': '+arr[prop]);
}

this will iterate through the array, but because when use for in method, it will iterate through each primitive object in the file. to prevent this from happening; it's advised to use the standard method (for (var i = 0; i < array.length; i++) { array[i] } )




var Person =  {
  firstname: 'Default',
  lastname: 'Default',
  greet: function(){
    return 'Hi ' + this.firstname
  }
}

var john = Object.create(Person)
john.firstname = 'john';
john.lastname = 'doe'
console.log(john);



var a = 3
console.log(typeof a);
var b = 'Hello'
console.log(typeof b);
var c =  {}
console.log(typeof c);
var d = []
console.log(typeof d);
console.log(Obkect.prototype.toString.call(d));

function Person(name){
  this.name = name
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);
console.log(typeof undefined);
console.log(typeof null);

var z = function(){}
console.log(typeof z);



function logNewPerson(){
  'use strict';
  var person2;
  persom2 = {};
  console.log(persom2);
}
