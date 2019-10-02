var map;
function initMap() {
    var center = new google.maps.LatLng(37.422, -122.084058);
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 10
      
    });
    
    var request = {
        locations: center,
        radius: 3000,
        types: ['cafe']
    };
    
    var service = new  google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(result, status){
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++){
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geomerty.location;
    var marker =new google.map.Marker({
        map:map,
        position: place.geomerty.location
    });
    
google.map.event.addDomListener(window, 'load', initMap)
}
    
 /*   var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.698285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984061 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });*/
    
    /*image for the cluster
         var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
         }*/
   
