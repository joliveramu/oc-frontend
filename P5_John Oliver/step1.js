// Initial values from the arrays below to form a quote
let beginning = ["Hi! ","Yo! ","Hey "]
let middle = ["What's up ","What up? ","How yo doin? "]
let end = ["Dawg","Bro","Kid"]

// Quote placeholder for quotes that will be generated from the beginning, middle, and end arrays
let quote = "";

    var index_0 = Math.floor(Math.random() * beginning.length);
    var index_1 = Math.floor(Math.random() * middle.length);
    var index_2 = Math.floor(Math.random() * end.length);
    quote = beginning[index_0] + middle[index_1] + end[index_2];

// Generated sentence
console.log(quote);

