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
let ratings = rating.value;
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
      msg +=  `<small class='text-muted'><b class = 'average'>${parseInt(avg)}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;
  }); 

  //Filter function inside the fetch API
  // let result = data.filter(function(obj){
  //   // return obj.restaurantName === "Barry's Walastik";
  //   for(let i = 0; i < obj.ratings.length; i++)
  //     {
  //       if(obj.ratings[i].stars <= 4)
  //       {
  //         // console.log(`${obj.ratings[i].comment}`);
  //         return obj;
  //       }
  //     }


  });

//   $(document).ready(function(){
//     $("#rating").on("keyup", function() {
//       var value = $(this).val().toLowerCase();
//       $("#list .list-group-item").filter(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//     });
//   });
// })

//Bootstrap filter function using JQuery
  $(document).ready(function(){
    $("#rating").change(function() {
      var value = $(this).val().toLowerCase();
      // $("#list a").filter(function() {
      //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      // });
      $("#list a").show().filter(function() {
        return $(this).text().toLowerCase().trim().indexOf(value) == -1;
      }).hide();
    });
  });


