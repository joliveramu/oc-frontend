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
// let ratings = rating.value;
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
      msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[record.lat,record.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
      msg += `</ul>`;
      msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;
  }); 


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


function searchRecord()
{
  fetch("js/data.json")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector('#list').innerHTML = null;
    map.removeLayer(marker)
    //Filter function inside the fetch API
    let result = data.filter(function(obj){
        for(let i = 0; i < obj.ratings.length; i++)
        {
          

          sum = sum + obj.ratings[i].stars;
          avg = sum / obj.ratings.length;
         
            if(avg >= range1.value && avg <= range2.value)
            {

              //Display lists of restaurants
              msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
              msg += "<div class='d-flex w-100 justify-content-between'>";
              msg += `<h5 class='mb-1 text-info'>${obj.restaurantName}</h5>`;
              msg += `<small class='text-warning font-weight-bold'></small>`;
              msg += "</div>"; 
              msg += `<p class='mb-1 text-truncate'></p>`;
              msg += `<ul>`;
              for(let i = 0; i < obj.ratings.length; i++)
              {
               
                msg +=  `<li><small class='text-muted'><b>${obj.ratings[i].comment}</b></small></li>`;
               
              }
              msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[obj.lat,obj.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
              msg += `</ul>`;
              msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
              msg += "</a><br/>";
              document.querySelector('#list').innerHTML +=  msg; 
              sum = 0;
              //Display markers of each location
              L.marker([obj.lat, obj.long]).addTo(map).bindPopup(`${obj.restaurantName} <label class ='text-warning'>${avg} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[obj.lat,obj.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
              L.circle([obj.lat, obj.long]).addTo(map);
              console.log(`${obj.restaurantName} ${avg}`);
              return obj;
            }

          
        }
        sum = 0;
      });

    console.log(result);
  });
}



//Bootstrap filter function using JQuery
  // $(document).ready(function(){
  //   $("#rating").change(function() {
  //     var value = $(this).val().toLowerCase();
  //     // $("#list a").filter(function() {
  //     //   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //     // });
  //     $("#list a").show().filter(function() {
  //       return $(this).text().toLowerCase().trim().indexOf(value) == -1;
  //     }).hide();
  //   });
  // });
