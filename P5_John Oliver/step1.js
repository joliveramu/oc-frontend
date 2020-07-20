// Initial values from the arrays below to form a quote
var beginning = ["Hi! ","Yo! ","Hey "]
var middle = ["What's up ","What up? ","How yo doin? "]
var end = ["Dawg","Bro","Kid"]

// Quote placeholder for quotes that will be generated from the beginning, middle, and end arrays
var quote = ""



// looping three times to randomly generate sentences
for(var i = 0; i < 3; i++)
{
    var index_0 = Math.floor(Math.random() * 3);
    var index_1 = Math.floor(Math.random() * 3);
    var index_2 = Math.floor(Math.random() * 3);
    quote = beginning[index_0] + middle[index_1] + end[index_2];
}

// Generated sentence
console.log(quote);

