
import inquirer from "inquirer";

// const randomNumber =  Math.random(); //math.random - this generates from 0 - 1.
// console.log(randomNumber);

const randomNumber = Math.floor(Math.random() * 10 +1); //math.floor - round down the number - max value it will give in 9 means below 10
//console.log(randomNumber);

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 - 10: ",
    }
]);


if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations, You guessed the right number!");
}else {
    console.log("Oops ! You guessed the wrong number. Please try again!");
}
