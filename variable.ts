// let num1: number = 5;
// let num2: number = 15;

// console.log("num1=" , num1);
// console.log("num2=" , num2);
// console.log("num1+num2=" , num1+num2);
// console.log("num1-num2=" , num1-num2);
// console.log("num1*num2=" , num1*num2);
// console.log("num2/num1=" , num2/num1);
// console.log("num1**num2=" , num1**num2);

// let Hello = "Eric" 
// console.log(`Hello ${Hello}, whould you like to some phyton today?`);
// let Person_Name = "Mushtaq"
// console.log(Person_Name.toLowerCase());
// let person_Name = "Mushtaq"
// console.log(person_Name.toUpperCase());
// let person_Name = "Mushtaq"
// console.log(person_Name.charAt(0).toUpperCase());
let answer: await inquirer.promt([{
        Name: "UserName",
        type: "string",
        message: "what is your name? ",
        
    }]);
    console.log("welcome" + answer.userName);
    