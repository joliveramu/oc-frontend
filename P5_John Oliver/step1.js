
//Step1.js
let beginning = [
            "I",
            "You",
            "He",
            "She",
            "It",
            "We",
            "They",
            "One"
];

let middle =[
    "will be",
    "should be",
    "would be",
    "shall be"
];

let ending =[
    "the one to protect future",
    "studying for our good",
    "think ahead for the greater good"
]

let startCount = Math.floor(Math.random() * beginning.length);
let middleCount = Math.floor(Math.random() * middle.length);
let endCount = Math.floor(Math.random() * ending.length);


function generateRandomQuote()
{
    return `${beginning[startCount]} ${middle[middleCount]} ${ending[endCount]}.`;
}

//Step 2 part
let quotes = [
    "",
    "The man who does not read books has no advantage over the one who cannot read them.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Teachers can open the door, but you must enter it yourself.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is the most powerful weapon you can use to change the world",
    "The mind is not a vessel to be filled but a fire to be ignited.",
    "Don’t let what you cannot do interfere with what you can do.",
    "A person who never made a mistake never tried anything new."
];

let author = [
    "",
    "Mark Twain",
    "Malcolm X",
    "Chinese proverb",
    "B.B. King",
    "BB King",
    "Plutarch",
    "John Wooden",
    "Albert Einstein"
];

function generateNQuotes(_number)
{
    let randomNum;
    let isNumber = Number.isSafeInteger(_number);
    if(isNumber && (_number >0 && _number  <= 5))
    {
        for(let i = 1; i <= _number; i++)
        {
            randomNum = Math.floor(Math.random() * quotes.length);
            console.log(`"${quotes[randomNum]}" by ${author[randomNum]}\n`);
        }
    }else{
        console.log("\nYou should pick numbers between 1 to 5!..");
    }
}

//Exported objects and functions needed for the step2.js
 module.exports = {
    generateRandomQuote,
    generateNQuotes
 };




