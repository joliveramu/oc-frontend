var map = L.map('map').setView([14.5552734,120.9999306], 13);


L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=rbSj7RYeRSmrshxqhdgx',{
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);
var marker = L.marker([14.5552734,120.9999306]).addTo(map);

//Display all restaurants in the leaflet map using their lat lng coordinates
for(let i = 0; i < data.length; i++)
{
    L.marker([data[i].lat, data[i].long]).addTo(map).bindPopup(data[i].restaurantName).openPopup();
}



//Location view
map.locate({setView: true, maxZoom: 16});

//Location found function
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup(`You are currently here @ ${e.latlng}`).openPopup();

    L.circle(e.latlng).addTo(map);
}

//Using map on location found
map.on('locationfound', onLocationFound);

//Location error function
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


//ESRI
var arcgisOnline = L.esri.Geocoding.arcgisOnlineProvider();

L.esri.Geocoding.geosearch({
providers: [
    arcgisOnline,
    L.esri.Geocoding.mapServiceProvider({
    label: 'States and Counties',
    url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer',
    layers: [2, 3],
    searchFields: ['NAME', 'STATE_NAME']
    })
]
}).addTo(map);
    

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