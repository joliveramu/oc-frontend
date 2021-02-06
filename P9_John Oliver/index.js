const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4cf308c594354b6d8e96cd7452655d09";

fetch("news.json")
.then(
    response => response.text()
)
.then((contents) => 
    console.log(contents)
   
)
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))