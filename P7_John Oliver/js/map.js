var map = L.map('map').setView([14.5552734,120.9999306], 13);

L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=rbSj7RYeRSmrshxqhdgx',{
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);
  
// new L.Control.GPlaceAutocomplete({
//     callback: function(place){
//         var loc = place.geometry.location;
//         map.panTo([loc.lat(), loc.lng()]);
//         map.setZoom(18);
//     }
// }).addTo(map);


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








function onMapClick(e) {
    //alert("You clicked the map at " + e.latlng);
    //Displays Latitude value at txtLat input
    txtLat.value = e.latlng.lat;
     //Displays Latitude value at txtLong input
    txtLong.value = e.latlng.lng;
    //Displays #exampleModal2
    $('#exampleModal2').modal('show');
}

   
map.on('click', onMapClick);
