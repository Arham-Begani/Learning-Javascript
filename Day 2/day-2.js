//                      Day 2

// How to accept user input

// easy way:
let user;

user= window.prompt("Whats your username?");

console.log(user);


let username;
document.getElementById("my-submit").onclick = function(){
   username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`Welcome ${username}`; 
    console.log(username);}

// Type conversion

let x;
let y;
let z;

x = String(x)
y = Number(y)
z = Boolean(z)        

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
