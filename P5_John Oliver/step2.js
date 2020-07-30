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


let enterValue = 3;

// do
// {

// }while(continuePrompt != 0);

if(enterValue >0 && enterValue  <= 5)
{
    for(let i = 1; i <= enterValue; i++)
    {
        let randomNum = Math.floor(Math.random() * quotes.length);
        console.log(`"${quotes[randomNum]}" by ${author[randomNum]}\n`);
    }
}
