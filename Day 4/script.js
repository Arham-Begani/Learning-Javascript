//                          Day 4

// If statements

// Example 1
let time = 9;
if (time < 9){
    console.log("Good Morning!");
 }

else{
    console.log("Bad Morning!");
}

// Example 2 with boolean
let student = true;
if (student){
    console.log("This is a student");
}

else{
    console.log("Not a student");
}

  // Else if statements

const mytxt = document.getElementById("my-txt")
const mySub = document.getElementById("my-submit")
const result_element = document.getElementById("result")

let age;

mySub.onclick = function(){

    age = mytxt.value;
    age = Number(age)
    if (age >= 18){
        result_element.textContent = "You are old enough to enter this website!";
    }

    else if(age <= 0) {
        result_element.textContent = ("Please enter a valid age");
    }

    else{
        result_element.textContent =("You cannot enter this website")
    }
}