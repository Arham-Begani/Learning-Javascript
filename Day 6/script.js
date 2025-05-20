//                      Day 6

// While loop
let loggedIn = false;
let user;
let password;

while(!loggedIn){
    user = window.prompt('Enter your username' );
    password = window.prompt('Enter your password' );

    if(user === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}   

// For Loop

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// Number Guessing Game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } 
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
        else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} tries.`);
            running = false;
        }
    }


    running = false;
}

// Functions

function isEven(x){
    if (x%2 == 0) {
        return "This number is even"
    }
    else{
        return "This number is not even"
    }
}
console.log(isEven(10))

function isEmail(email){
    if (email.includes('@')){
        return true
    }
    else{
        return false
    }
}
console.log(isEmail('arham.com'))
console.log(isEmail('arham@gmail.com'))