let msg, sum = 0, avg = 0;

let query = "";
let query2 = "";

let revs;

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
      msg +=  `<small class='text-muted'><b class = 'average'>${avg.toFixed(2)}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;
  }); 

  });
  
  function loadDataPersistent()
  {
    
    query += alasql("CREATE TABLE restaurant(id integer not null primary key autoincrement, resto_name text, lat real NOT NULL ,long real NOT NULL);");
    query += alasql("insert into restaurant (resto_name, lat, long) values ('AU 2552', 14.5434407, 121.0045482);"); 
    query += alasql("insert into restaurant (resto_name, lat, long) values ('CKA Jollyplate Eatery', 14.5431196, 121.0026515);");
    query += alasql("insert into restaurant (resto_name, lat, long) values ('Omartville Foodhub', 14.5434616, 121.0026911);");
    query += alasql("insert into restaurant (resto_name, lat, long) values ('New Harlem Restaurant', 14.5472883, 120.9967544);");
    query += alasql("insert into restaurant (resto_name, lat, long) values ('CUSI-NAH Resto Bar', 14.5472929, 121.0006675);");
    query += alasql("insert into restaurant (resto_name, lat, long) values ('Wei-Cha Capitol Food House', 14.5481973, 121.0035737);");
    let display = alasql("select * from restaurant");
    console.log(display);
    
    query2 += alasql("create table restaurant_review (id integer not null primary key autoincrement, restaurant_id int not null, stars integer not null, comment text not null);");
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (1, 5,'Fine-dining cuisine in Aurora!');");
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (1, 5,'Cheap eats!');");
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (2, 4,'good sizzling variations');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (2, 4,'A lot of food options');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (2, 5,'good foods');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (3, 3,'Food is good but place is quite small');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (3, 3,'Too many drinkers at night!');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (4, 4,'Good Asian-fusion Resto in Pasay Road!');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (4, 4,'So, goood!');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (5, 5,'Cheap eats!');")
    query2 += alasql("insert into restaurant_review (restaurant_id, stars, comment) values (6, 4,'food is quite acceptable');")
    let display2 = alasql("select * from restaurant_review;");
    console.log(display2);
    

  }
  function loadRestaurants()
  {
    document.querySelector('#restaurants').innerHTML = null;
    let holder = `<form id = 'frmReview' method = 'POST'>`;
    holder += `<select id = 'cmbRestaurant' class='form-control mb-2' required>`;
      holder += ` <option value =''>Select Restaurant</option>`;
      let query = alasql(`SELECT r.resto_name, r.id from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars group by r.resto_name, r.id;`);
      query.forEach(function(data){
        holder += `<option value ='${data.id}'>${data.resto_name}</option>`;
        console.log(data.resto_name);
      });
        holder += `</select>`;
        holder += `<input type ='number' class = 'form-control mb-2' min='1' max='5' placeholder = 'Select from 1 to 5' id = 'txtStars'/>`;
        holder += `<textarea required class = 'form-control mb-2' id = 'txtReview' placeholder ='Write Review here..'></textarea>`;
        holder += `<button type="submit" class="btn btn-primary">Save changes</button>`;
        holder += `</form>`;
        document.querySelector('#restaurants').innerHTML +=  holder;
  }
  
  //Load SQL persistent data
  loadDataPersistent();

  //Load restaurants from SQL to combobox
  loadRestaurants();

  
function searchRecord()
{
  //Declaring iterator variable to handle restaurant id for reviewsQuery
  let iterator = 1;
    if(range2.value < range1.value)
    {
      alert("Second Parameter must be greater than the 1st parameter");
    }else{
      $(".leaflet-marker-icon").remove();
        $(".leaflet-popup").remove();
        $(".leaflet-marker-shadow").remove();
        document.querySelector('#list').innerHTML = null;
        let restaurantQuery = alasql("SELECT r.resto_name, avg(rr.stars) AS Ratings, r.lat, r.long  from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars group by r.resto_name, r.lat, r.long;");
        let reviewsQuery = alasql("select * from restaurant_review;");

        restaurantQuery.forEach(function(data)
        {
         
          if(data.Ratings >= range1.value && data.Ratings <= range2.value)
          {
            msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
            msg += "<div class='d-flex w-100 justify-content-between'>";
            msg += `<h5 class='mb-1 text-info'>${data.resto_name}</h5>`;
            msg += `<small class='text-warning font-weight-bold'></small>`;
            msg += "</div>"; 
            msg += `<p class='mb-1 text-truncate'></p>`;
            msg += `<ul>`;

        
            reviewsQuery.forEach(function(reviewRecord){
              if(reviewRecord.restaurant_id === iterator)
              {
                msg +=  `<li><small class='text-muted'><b>${reviewRecord.comment}</b></small></li>`;
              }
            });
            iterator++;

            msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
            msg += `</ul>`;
            msg +=  `<small class='text-muted'><b class = 'average'></b></small>`;
            msg += "</a><br/>";
            document.querySelector('#list').innerHTML +=  msg; 
            
            //Display markers of each location
            L.marker([data.lat, data.long]).addTo(map).bindPopup(`${data.resto_name} <label class ='text-warning'>${parseFloat(data.Ratings).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
            L.circle([data.lat, data.long]).addTo(map);
          }
         
          console.log(revs);
        });

      //   reviewsQuery.forEach(function(record){
      //     console.log(`${record.restaurant_id} ${record.stars}`);
      // });


        // for(let i = 0; i < data.length; i++)
        //     {
    
        //       for(let j = 0; j < data[i].ratings.length; j++)
        //       {
        //           sum = sum + data[i].ratings[j].stars;
        //           avg = sum / data[i].ratings.length;
        //       }
        //       sum = 0;
      
    
                
        //         if(avg >= range1.value && avg <= range2.value)
        //         {
    
        //           //Display lists of restaurants
        //           msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
        //           msg += "<div class='d-flex w-100 justify-content-between'>";
        //           msg += `<h5 class='mb-1 text-info'>${data[i].restaurantName}</h5>`;
        //           msg += `<small class='text-warning font-weight-bold'></small>`;
        //           msg += "</div>"; 
        //           msg += `<p class='mb-1 text-truncate'></p>`;
        //           msg += `<ul>`;
    
        //           for(let j = 0; j < data[i].ratings.length; j++)
        //           {
                   
        //             msg +=  `<li><small class='text-muted'><b>${data[i].ratings[j].comment}</b></small></li>`;
                   
        //           }
    
        //           msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
        //           msg += `</ul>`;
        //           msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
        //           msg += "</a><br/>";
        //           document.querySelector('#list').innerHTML +=  msg; 
                  
        //           //Display markers of each location
        //           L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(`${data[i].restaurantName} <label class ='text-warning'>${parseFloat(avg).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data[i].lat,data[i].long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
        //           L.circle([data[i].lat, data[i].long]).addTo(map);

      // end of search query
      
      //   document.querySelector('#restaurants').innerHTML = null;
      //   msg += `<select> <option value =''>Select Restaurant</option>`;
      // let query = alasql(`SELECT r.resto_name, avg(rr.stars) AS Ratings from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars between ${range1.value} and ${range2.value} group by r.resto_name;`);
      // query.forEach(function(data){
      //   msg += `<option value ='${data.resto_name}'>${data.resto_name}</option>`;
        
      // });
      //   msg += `</select>`;
      //   document.querySelector('#restaurants').innerHTML +=  msg;

      // fetch("js/data.json")
      // .then((res) => res.json())
      // .then((data) => {
      //   // map.eachLayer((layer) => {
      //   //   layer.remove();
      //   // });
      //   $(".leaflet-marker-icon").remove();
      //   $(".leaflet-popup").remove();
      //   $(".leaflet-marker-shadow").remove();
      //   document.querySelector('#list').innerHTML = null;
      //   // document.querySelector('#map').innerHTML = null;
      //     for(let i = 0; i < data.length; i++)
      //     {
  
      //       for(let j = 0; j < data[i].ratings.length; j++)
      //       {
      //           sum = sum + data[i].ratings[j].stars;
      //           avg = sum / data[i].ratings.length;
      //       }
      //       sum = 0;
    
  
              
      //         if(avg >= range1.value && avg <= range2.value)
      //         {
  
      //           //Display lists of restaurants
      //           msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
      //           msg += "<div class='d-flex w-100 justify-content-between'>";
      //           msg += `<h5 class='mb-1 text-info'>${data[i].restaurantName}</h5>`;
      //           msg += `<small class='text-warning font-weight-bold'></small>`;
      //           msg += "</div>"; 
      //           msg += `<p class='mb-1 text-truncate'></p>`;
      //           msg += `<ul>`;
  
      //           for(let j = 0; j < data[i].ratings.length; j++)
      //           {
                 
      //             msg +=  `<li><small class='text-muted'><b>${data[i].ratings[j].comment}</b></small></li>`;
                 
      //           }
  
      //           msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`;
      //           msg += `</ul>`;
      //           msg +=  `<small class='text-muted'><b class = 'average'>${avg}</b></small>`;
      //           msg += "</a><br/>";
      //           document.querySelector('#list').innerHTML +=  msg; 
                
      //           //Display markers of each location
      //           L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(`${data[i].restaurantName} <label class ='text-warning'>${parseFloat(avg).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data[i].lat,data[i].long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
      //           L.circle([data[i].lat, data[i].long]).addTo(map);
               
      //           console.log(`${data[i].restaurantName} ${avg}`);
               
                
      //         }
      //     }
       
      // });


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
frmReview.addEventListener('submit',(event) =>{
  event.preventDefault();

  let isOkay = alasql(`insert into restaurant_review (restaurant_id, stars, comment) values (${cmbRestaurant.value}, ${txtStars.value}, '${txtReview.value}');`);
  if(isOkay === 1)
  {
    alert("Review for the restaurant is added!!");
    
     let query = alasql(`SELECT r.resto_name, avg(rr.stars) AS Ratings, r.lat, r.long  from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars group by r.resto_name, r.lat, r.long;`);
      query.forEach(function(data){
        console.log(data);
      });
      console.log(alasql("select * from restaurant_review"));
      // frmReview.submit();
  }else{
    alert("Problem encountered");
  }
});