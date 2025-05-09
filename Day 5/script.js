//                              Day 5

// Ternary operator = A shortcut for if{} and else{} statements

let age = 12
let message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message)

let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good afternoon"
console.log(greeting)

let student = true;
let msg = student ? "You are a student" : "You are not a student";
console.log(msg)

// Switch = Used to reduce the amounts of else if statements

// Example 1

day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a day")
}

//Example 2

let testScore = 99;
let letterGrade;

switch (true){
    case testScore >= 98:
        letterGrade = "A+";
        break;
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);

