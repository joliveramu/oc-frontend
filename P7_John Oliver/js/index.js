// let msg, sum = 0, avg = 0;
// for(let i = 0; i < data.length; i++)
// {

//       msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
//       msg += "<div class='d-flex w-100 justify-content-between'>";
//       msg += `<h5 class='mb-1 text-info'>${data[i].restaurantName}</h5>`;
//       msg += `<small class='text-warning font-weight-bold'></small>`;
//       msg += "</div>";
//       msg += `<p class='mb-1 text-truncate'></p>`;
//       msg += `<ul>`;
//       for(let j = 0; j < data[i].ratings.length; j++)
//       {
//         sum = sum + data[i].ratings[j].stars;
//         msg += `<li> ${data[i].ratings[j].comment} </li>`;
//         avg = sum / data[i].ratings.length;
//       }
//       msg += `</ul>`;
//       msg +=  `<small class='text-muted'><b>${avg}</b></small>`
//       msg += "</a><br/>";
//       document.querySelector('#list').innerHTML +=  msg; 
//       sum = 0;
// }


let msg, sum = 0, avg = 0;
fetch("js/data.json")
.then((res) => res.json())
.then((data) => {
 
  data.forEach(function(record){

      msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
      msg += "<div class='d-flex w-100 justify-content-between'>";
      msg += `<h5 class='mb-1 text-info'>${record.restaurantName}</h5>`;
      msg += `<small class='text-warning font-weight-bold'></small>`;
      msg += "</div>"; 
      msg += `<p class='mb-1 text-truncate'></p>`;
      msg += `<ul>`;
      for(let i = 0; i < record.ratings.length; i++)
      {
        sum = sum + record.ratings[i].stars;
        msg +=  `<li><small class='text-muted'><b>${record.ratings[i].comment}</b></small></li>`;
        avg = sum / record.ratings.length;
      }
      msg += `</ul>`;
      msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;
  }); 
})


