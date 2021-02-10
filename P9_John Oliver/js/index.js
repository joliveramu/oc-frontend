// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4cf308c594354b6d8e96cd7452655d09";

// fetch("news.json")
// .then(
//     response => response.text()
// )
// .then((contents) => 
//     console.log(contents)
   
// )
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(posts => {
//     let output = '<h2>Lists of Posts</h2>';
//     posts.forEach(function(post) {
//         output += `
//         <a href="https://www.bbc.com/news/technology-55940112" target="_blank" class="list-group-item list-group-item-action">
//         <div class="d-flex w-100 justify-content-between">
//           <h5 class="mb-1">Can AI tackle racial inequalities in healthcare?</h5>
//           <small class="text-muted">8 hours ago</small>
//         </div>
//         <p class="mb-1">A study indicates AI can improve knee pain diagnosis of black patients, spotting signs doctors miss.</p>
//         <small class="text-muted">Cody Godwin - BBC News</small>
//       </a>
//         `;
//     });
//     document.getElementById("news").innerHTML = output;
// });
const apiKEY = `4cf308c594354b6d8e96cd7452655d09`;
fetch(`js/news.json`)
.then((response) =>{ return response.json()})
.then((posts) => {
   // console.log(posts.articles[0]);
   let output = '';
   for(let i = 0; i < posts.articles.length; i++)
    {

        output += `
        <a href="${posts.articles[i].url}" target="_blank" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${posts.articles[i].title}</h5>
          <small class="text-muted">${posts.articles[i].publishedAt}</small>
        </div>
        <p class="mb-1">${posts.articles[i].description}</p>
        <small class="text-muted">${posts.articles[i].author}</small>
      </a>
        `;
    }
    document.getElementById("news").innerHTML = output;
});

fetch(`js/influence.json`)
.then((response) => { return response.json()})
.then((following) => {
  let output = '';
  for(let i = 0; i < following.influence.length; i++)
   {

       output += `
       <a href="${following.influence[i].handle}" target="_blank" class="list-group-item list-group-item-action">
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">${following.influence[i].Name}</h5>
         <small class="text-muted"><button class ='btn btn-primary'>Follow</button></small>
       </div>
       <p class="mb-1">@${following.influence[i].handle}</p>
       <small class="text-muted">${following.influence[i].Expertise}</small>
     </a>
       `;
   }
   document.getElementById("influence").innerHTML = output;
});