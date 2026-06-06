// 2.If-Else Condition
let number = -5; 

if (number > 0) {
    console.log(number + " is positive");
} else if (number < 0) {
    console.log(number + " is negative");
} else {
    console.log("The number is zero");
}


// 3.Switch Statement

let day = 1; 
// Change this number to test
// 1–7 for Sunday-Saturday
// the rest entered will be assigned as an invalid number

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}


// 4.Loops (For, While, Do-While)

// For Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Loop
console.log("While Loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Do-While Loop
console.log("Do-While Loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);



// 5.Break and Continue

console.log("Break Example:");
for (let x = 1; x <= 5; x++) {
    if (x === 3) {
        break; // stops the loop at 3
    }
    console.log(x);
}

console.log("Continue Example:");
for (let y = 1; y <= 5; y++) {
    if (y === 3) {
        continue; // skips 3
    }
    console.log(y);
}


// 6. Scope Example

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); // accessible
    console.log(localVar);  // accessible
}

scopeExample();

// console.log(localVar); 
// ERROR: localVar is not accessible outside the function