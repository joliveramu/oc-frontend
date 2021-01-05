var map = L.map('map').setView([14.5552734,120.9999306], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=rbSj7RYeRSmrshxqhdgx',{
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

// var marker = L.marker([14.5552734,120.9999306]).addTo(map);


//Display all restaurants in the leaflet map using their lat lng coordinates
// for(let i = 0; i < data.length; i++)
// {
//     // L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(`${data[i].restaurantName} <br> <img href='https://www.instantstreetview.com/@${[data[i].lat,data[i].long]},43.51h,5p,1z' target='_blank'>View Place</a>`).openPopup();
//    L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(`${data[i].restaurantName} <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${[data[i].lat,data[i].long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
//     // https://maps.googleapis.com/maps/api/streetview?size=400x400&location=14.5431196,121.0026515&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4
//     L.circle([data[i].lat, data[i].long]).addTo(map);
   
// }
// function cool()
// {
// fetch("js/data.json")
//     .then((res) => res.json())
//         .then((data) => {
    
//             data.forEach(function(record){
//                 L.marker([record.lat, record.long]).addTo(map).bindPopup(`${record.restaurantName} <br> <img src='https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${[record.lat,record.long]}&fov=80&heading=70&pitch=0&key=AIzaSyCjeBzfVtmlDu9mRUIpJbCK_ekqSimIVB4'/>`).openPopup();
//                 L.circle([record.lat, record.long]).addTo(map);
//             });
// });

// }
    




//Location view
map.locate({setView: true, maxZoom: 16});

//Location found function
function onLocationFound(e) {
    var radius = e.accuracy;

    //Display image of the place when being viewed
    // L.streetView({ position: 'topleft', mapillaryId: 'OTNpQldXOGpGWkNmUHc5SU9wTk9zSDphMjBmMGE3ZmUzMTc4MjUw' }).addTo(map);
    
    L.marker(e.latlng).addTo(map)
        .bindPopup(`You are currently here @ ${e.latlng}`).openPopup();

    //L.streetView({ position: 'topleft', mapillaryId: 'RC1ZRTBfaVlhWmJmUGVqRk5CYnAxQTpmMGE3OTU0MzM0MTljZTA4' }).addTo(map);
    L.circle(e.latlng).addTo(map);
}

//Using map on location found
map.on('locationfound', onLocationFound);

//Location error function
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);







    // function onMapClick(e) {
    //     alert("You clicked the map at " + e.latlng);
    //     txtRestaurant.value = e.latlng;
    //     var marker = L.marker(e.latlng).addTo(map);
    //     var popup = L.popup()
    // .setLatLng(e.latlng)
    // .setContent(`I have selected this place @ ${e.latlng}.`)
    // .openOn(map);
    // }

   
    // map.on('click', onMapClick);