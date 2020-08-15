/*
 *This is the first part of step1.js file. This part contains three (3) variables
 *that were arrays. Each of the followng variables will contribute to the generation
 *of new quote coming from the three arrays initiated.
 */
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
    "thinking ahead for the greater good",
    "bringing our hopes in the promise land",
    "building bridges to reach everyone",
    "forgiving those who deserves it",
    "hearomg peoples concern so that we can make this better",
    "knowing what's best for the greater good",
    "making our dreams come true"
]

/*
 *This function will generate a random quote. We utilize the random and floor from Math library. 
 *Once this function is being called, it will generate and return a single, random quote generated
 *from the random index generated per array.
 */
function generateRandomQuote()
{
    let startCount = Math.floor(Math.random() * beginning.length);
    let middleCount = Math.floor(Math.random() * middle.length);
    let endCount = Math.floor(Math.random() * ending.length);

    return `${beginning[startCount]} ${middle[middleCount]} ${ending[endCount]}.\n`;
}

//Remove the comment below to generate a random quote.
// console.log(generateRandomQuote());


/*
 *For the step2.js part, again, we are declaring two arrays. quotes and then the author.
 *This is the second type of quote where it generates N number of quotes according to the
 *input number that was entered on the step2.js.
 */
let quotes = [
    "",
    "The man who does not read books has no advantage over the one who cannot read them.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Teachers can open the door, but you must enter it yourself.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is the most powerful weapon you can use to change the world",
    "The mind is not a vessel to be filled but a fire to be ignited.",
    "Don’t let what you cannot do interfere with what you can do.",
    "A person who never made a mistake never tried anything new.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "It is during our darkest moments that we must focus to see the light.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If life were predictable it would cease to be life and be without flavor.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
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
    "Albert Einstein",
    "Nelson Mandela",
    "Ralph Waldo Emerson",
    "Aristotle",
    "Thomas A. Edison",
    "Eleanor Roosevelt",
    "Dr. Seuss"
];


/*
 *This function contains a parameter that will be the basis of how many quotes it will generate.
 */
function generateRandomQuoteType2(numberOfQuotes)
{
    for(let i = 1; i <= numberOfQuotes; i++)
    {
        //Every time it loops, the randomNum variable produces different randomly generated number
        //to call out the value from the respective arrays that will be used for the quotes.
        let randomNum = Math.floor(Math.random() * quotes.length);
        if(randomNum == 0)
        {
            console.log(`"${quotes[randomNum+1]}" by ${author[randomNum+1]}\n`);
        }else{
            console.log(`"${quotes[randomNum]}" by ${author[randomNum]}\n`);
        }       
    }
}

//Exported objects and functions needed for the step2.js
 module.exports = {
    generateRandomQuote,
    generateRandomQuoteType2
 };




