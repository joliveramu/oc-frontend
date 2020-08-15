const prompt = require('prompt-sync')(); //downloaded prompt library via npm
const tools = require('./step1.js');//import step1.js files so that we can utilize all the imported functions

let choice;
let mode;
let askNumber;
do
{
//You'll be asked how many quotes ranging from 1 to 5 you would like to generate
askNumber = prompt("Enter number of quotes to generate: (From 1 to 5): ");
//Parse askNumber variable to integer
let numberOfQuotes = parseInt(askNumber, 10);

if(numberOfQuotes > 0 && numberOfQuotes <= 5)
{
    mode = prompt("Choose (1) to Generate Simple quotes. (2) for other kind of quotes: ");
    //Parse mode variable into integer
    let chosenMode = parseInt(mode, 10);
    
    //choseMode variable will be evaluated according to the case available
    switch(chosenMode)
    {
        case 1:
        //Generate N number of quotes from the generateRandomQuote() function from step1.js file
        for(let i = 0; i < askNumber; i++)
        {
            console.log(tools.generateRandomQuote());
        }
            break;
        case 2:
         //Generate N number of quotes to generateRandomQuoteType2() function which contains a parameter
         //for  the number of quotes to be generated 
            tools.generateRandomQuoteType2(askNumber);
            break;
        default:
        //If none of the following cases were true, again, you'll exit this switch statement clause
            console.log("\nYou should pick any number from 1 or 2!..");
            break;
    }
}else{
    //If you failed to supply any numbers from 1 to 5, you'll be reminded to enter any number from the given
    //range of numbers allowed
    console.log("Enter numbers from 1 to 5 only!..");
}

//You'll be asked if you would like to continue to generate quotes or not
choice = prompt("If you don't want to generate any more quotes.. type \"stop\" else press \"enter\". ");
}while(choice != "stop");







