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
        avg = sum / record.ratings.length;
        msg +=  `<li><small class='text-muted'><b>${record.ratings[i].comment}</b></small></li>`;
      }
      msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[record.lat,record.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
      msg += `</ul>`;
      msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;
  }); 

  });


function searchRecord()
{
    if(range2.value < range1.value)
    {
      alert("Second Parameter must be greater than the 1st parameter");
    }else{
      
      fetch("js/data.json")
      .then((res) => res.json())
      .then((data) => {
        // map.eachLayer((layer) => {
        //   layer.remove();
        // });
        $(".leaflet-marker-icon").remove();
        $(".leaflet-popup").remove();
        $(".leaflet-marker-shadow").remove();
        document.querySelector('#list').innerHTML = null;
        // document.querySelector('#map').innerHTML = null;
          for(let i = 0; i < data.length; i++)
          {
  
            for(let j = 0; j < data[i].ratings.length; j++)
            {
                sum = sum + data[i].ratings[j].stars;
                avg = sum / data[i].ratings.length;
            }
            sum = 0;
    
  
              
              if(avg >= range1.value && avg <= range2.value)
              {
  
                //Display lists of restaurants
                msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
                msg += "<div class='d-flex w-100 justify-content-between'>";
                msg += `<h5 class='mb-1 text-info'>${data[i].restaurantName}</h5>`;
                msg += `<small class='text-warning font-weight-bold'></small>`;
                msg += "</div>"; 
                msg += `<p class='mb-1 text-truncate'></p>`;
                msg += `<ul>`;
  
                for(let j = 0; j < data[i].ratings.length; j++)
                {
                 
                  msg +=  `<li><small class='text-muted'><b>${data[i].ratings[j].comment}</b></small></li>`;
                 
                }
  
                msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
                msg += `</ul>`;
                msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
                msg += "</a><br/>";
                document.querySelector('#list').innerHTML +=  msg; 
                
                //Display markers of each location
                L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(`${data[i].restaurantName} <label class ='text-warning'>${parseFloat(avg).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data[i].lat,data[i].long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
                L.circle([data[i].lat, data[i].long]).addTo(map);
               
                console.log(`${data[i].restaurantName} ${avg}`);
               
                
              }
          }
       
      });


    }
    
  
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
