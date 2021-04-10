let msg, sum = 0, avg = 0;

let query = "";
let query2 = "";

let revs;
//Provide your own API Key
const API_KEY = "";


//Fetch data from local json file of the restaurants and reviews
fetch("js/data.json")
.then((res) => res.json())
.then((data) => {
 
  data.forEach(function(record){
      msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
      msg += "<div class='d-flex w-100 justify-content-between'>";
      msg += `<h5 class='mb-1 text-info'><b>${record.restaurantName}</b><hr/>${record.address}</h5>`;
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
      msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[record.lat,record.long]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`;
      msg += `</ul>`;
      msg +=  `<small class='text-muted'><b class = 'average'>${avg.toFixed(2)}</b></small>`;
      msg += "</a><br/>";
      document.querySelector('#list').innerHTML +=  msg; 
      sum = 0;

       //Display markers of each location
        L.marker([record.lat, record.long]).addTo(map).bindPopup(`${record.restaurantName} <label class ='text-warning'>${parseFloat(avg).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[record.lat,record.long]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`).openPopup();
        L.circle([record.lat, record.long]).addTo(map);
  }); 

  });
  
  function loadDataPersistent()
  {
    //Create restaurant table query 
    query += alasql("CREATE TABLE restaurant(id integer not null primary key autoincrement, restaurantName text, address text, lat real NOT NULL ,long real NOT NULL);");
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('AU 2552', '2552 Aurora, Pasay, Metro Manila', 14.5434407, 121.0045482);"); 
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('CKA Jollyplate Eatery', '465 A-1 Protacio, Pasay, Metro Manila', 14.5431196, 121.0026515);");
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('Omartville Foodhub', '2303 Tramo, Pasay, Metro Manila', 14.5434616, 121.0026911);");
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('New Harlem Restaurant', 'Antonio S. Arnaiz Ave, Pasay, Metro Manila', 14.5472883, 120.9967544);");
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('CUSI-NAH Resto Bar', '2408-I P.Zamora, Pasay, 1303 Metro Manila', 14.5472929, 121.0006675);");
    query += alasql("insert into restaurant (restaurantName, address, lat, long) values ('Wei-Cha Capitol Food House', '552 Antonio S. Arnaiz Ave, Pasay, 1300 Metro Manila', 14.5481973, 121.0035737);");
 
    //Create restaurant_review table query 
    query2 += alasql("create table restaurant_review (id integer not null primary key autoincrement, restaurant_id int not null, stars integer not null, comment text);");
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

  }

  //Load restaurants for the popup modal of restaurant review
  function loadRestaurants()
  {
    document.querySelector('#restaurants').innerHTML = null;
    let holder = `<select id = 'cmbRestaurant' class='form-control mb-2' required>`;
      holder += ` <option value =''>Select Restaurant</option>`;

     let query = alasql(`select r.restaurantName, r.id from restaurant as r;`);
      query.forEach(function(data){
        holder += `<option value ='${data.id}'>${data.restaurantName}</option>`;
      });
        holder += `</select>`;
        holder += `<input type ='number' class = 'form-control mb-2' min='1' max='5' placeholder = 'Select from 1 to 5' id = 'txtStars'/>`;
        holder += `<textarea required class = 'form-control mb-2' id = 'txtReview' placeholder ='Write Review here..'></textarea>`;
        holder += `<button class="btn btn-primary" id ='btnSaveReview' onclick='submitReview()'>Save changes</button>`;
        document.querySelector('#restaurants').innerHTML +=  holder;
  }
  
  //Load SQL persistent data
  loadDataPersistent();

  //Load restaurants from SQL to combobox
  loadRestaurants();

  //display restaurant and reviews in the map and to the sidebar
function searchRecord()
{
    if(range2.value < range1.value)
    {    
       alert("First Parameter must be greater than the 2nd parameter");
       range2.focus();
    }else{
      $(".leaflet-marker-icon").remove();
        $(".leaflet-popup").remove();
        $(".leaflet-marker-shadow").remove();
        document.querySelector('#list').innerHTML = null;
        let restaurantQuery = alasql("SELECT r.restaurantName, avg(rr.stars) AS Ratings, r.lat, r.long, r.id, r.address  from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars group by r.restaurantName, r.lat, r.long, r.id, r.address;");
        let reviewsQuery = alasql(`select * from restaurant_review;`);

        restaurantQuery.forEach(function(data)
        {
         
          if(data.Ratings >= range1.value && data.Ratings <= range2.value)
          {
            // Called the function nearbyPlaceSearch() from index.html to generate nearbysearch and places details
            nearbyPlaceSearch();  
            //displaying all the gathered reviews and ratings in the sidebar
            msg = "<a class='list-group-item list-group-item-action flex-column align-items-start'>";
            msg += "<div class='d-flex w-100 justify-content-between'>";
            msg += `<h5 class='mb-1 text-info'>${data.restaurantName}<br/><hr/>${data.address}</h5>`;
            msg += `<small class='text-warning font-weight-bold'></small>`;
            msg += "</div>"; 
            msg += `<p class='mb-1 text-truncate'></p>`;
            msg += `<ul>`;

            //display all the query results of reviewsQuery with matching data.id of restaurantQuery
            reviewsQuery.forEach(function(reviewRecord){
              if(reviewRecord.restaurant_id === data.id)
              {
                msg +=  `<li><small class='text-muted'><b>${reviewRecord.comment}</b></small></li>`;
              }
            });

            msg += `<img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`;
            msg += `</ul>`;
            msg +=  `<small class='text-muted'><b class = 'average'>${data.Ratings.toFixed(2)}</b></small>`;
            msg += "</a><br/>";
            document.querySelector('#list').innerHTML +=  msg; 
            
            //Display markers of each location
            L.marker([data.lat, data.long]).addTo(map).bindPopup(`${data.restaurantName} <label class ='text-warning'>${parseFloat(data.Ratings).toFixed(2)} stars</label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=150x150&location=${[data.lat,data.long]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`).openPopup();
            L.circle([data.lat, data.long]).addTo(map);
            
          }
        });
    }
}



 function submitReview()
 {

  if((cmbRestaurant.value !== null && txtStars.value != null && txtStars.value >= 1 && txtStars.value <= 5 && txtReview.value != null))
  {
    let isOkay = alasql(`insert into restaurant_review (restaurant_id, stars, comment) values (${cmbRestaurant.value}, ${txtStars.value}, '${txtReview.value.replaceAll("'","\\'")}');`,);
    if(isOkay === 1)
    {
      txtStars.value ="";
      cmbRestaurant.value = "";
      txtReview.value = "";
      let query = alasql(`SELECT r.restaurantName, avg(rr.stars) AS Ratings, r.lat, r.long  from restaurant as r INNER JOIN restaurant_review as rr ON r.id = rr.restaurant_id where rr.stars group by r.restaurantName, r.lat, r.long;`);
       alert("Review for the restaurant is added!!");
       $('#exampleModal').modal('hide');
    }else{
      alert("Cannot submit");
    }
    
  }else{
    alert("Problem encountered: Error on submitting reviews.");
    txtStars.focus();
  }
 }
 


frmAddRestaurant.addEventListener('submit', (e) =>{
  e.preventDefault();

  let isAccepted = alasql(`insert into restaurant (restaurantName, address, lat, long) values ('${txtRestoName.value.replaceAll("'","\\'")}', '${txtAddress.value.replaceAll("'","\\'")}', ${txtLat.value}, ${txtLong.value});`);

  if(isAccepted)
  {
    loadRestaurants();
    alert("Restaurant is added!!");
    //Add marker of the currently added restaurants
    L.marker([txtLat.value, txtLong.value]).addTo(map).bindPopup(`${txtRestoName.value} <label class ='text-warning'></label> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[txtLat.value, txtLong.value]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`).openPopup();
    L.circle([txtLat.value, txtLong.value]).addTo(map);
    //Remove entered values in the form
    txtRestoName.value = null;
    txtAddress.value = null;
    txtLat.value = null;
    txtLong.value = null;
    $('#exampleModal2').modal('hide');

   }else{
    alert("Problem encountered in adding restaurant");
  }
});
  

//fetch google places review per id
// function displayReviews(id)
// {
//   fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,formatted_phone_number,reviews,geometry&key=${API_KEY}`,{
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin':'*',
//       'API-Key': `${API_KEY}`
//     }
//   })
//   .then((resp) => {
//   return resp.json();
//   })
//   .then((dataReviews) => {
//       // console.log([dataReviews.result.geometry.location.lat, dataReviews.result.geometry.location.lng]);
//       // console.log(dataReviews.result.name);  
//       L.marker([dataReviews.result.geometry.location.lat, dataReviews.result.geometry.location.lng]).addTo(map).bindPopup(`${dataReviews.result.name} <label class ='text-warning'>${parseFloat(dataReviews.result.rating).toFixed(2)} stars</label> <br> <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[dataReviews.result.geometry.location.lat, dataReviews.result.geometry.location.lng]}&fov=80&heading=70&pitch=0&key=${API_KEY}'/>`).openPopup();
//        L.circle([dataReviews.result.geometry.location.lat, dataReviews.result.geometry.location.lng]).addTo(map);
//       //  console.log(dataReviews.result.rating);
//       //  console.log(dataReviews.result.reviews);
//        //alasql(`insert into restaurant_review (restaurant_id, stars, comment) values (${cmbRestaurant.value}, ${txtStars.value}, '${txtReview.value.replaceAll("'","\\'")}');`,);
       
//   })
//   .catch(err => console.error(err));
// }

// //fetch places search
// fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=14.5552734,120.9999306&type=restaurant&radius=500000`,
// {
//   method: 'GET',
//   mode: 'cors',
//   credentials: 'same-origin',
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin':'*',
//     'API-Key': `${API_KEY}`
//   }
// })
// .then((resp) => {
//   var headers = resp.headers;
//   return resp.json();
// })
// .then((data) => {
//   let placesLength = data.results.length;
  
//   // console.log(placesLength);
//   // console.log(data.results);
//   // console.log(data.results[0].name);
//   for(let i = 0; i < 2; i++)
//   {
//       // //console.log(data.results);
//     displayReviews(data.results[i].place_id)
//     // console.log(data.results[0].geometry.location.lat)
//     let restaurantName = data.results[i].name;
//     let address = data.results[i].vicinity; 
//     let latitude = data.results[i].geometry.location.lat;
//     let longitude = data.results[i].geometry.location.lng;
    
//     let sql = alasql(`insert into restaurant (restaurantName, address, lat, long) values ('${restaurantName}', '${address}', ${latitude}, ${longitude});`);
//     console.log(sql);
//   }
// })
// .catch(err => console.error(err));



