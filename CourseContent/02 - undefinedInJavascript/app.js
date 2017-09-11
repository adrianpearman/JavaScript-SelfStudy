b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

// due to execution stack of javascript, the first called function for 'b' will return as undefined because the javascript engine calls the function before it is ever defined
