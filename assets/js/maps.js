var map;
var service;
var infowindow;



function initMap() {
  var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });
  infowindow = new google.maps.InfoWindow();

  var request = {
    location: pyrmont,
    radius: '500',
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      //console.log(place);
      createMarker(place);
    }
  }
}

function createMarker(place) {

  var openNow = place.opening_hours.open_now;
  var isOpen;
  if (openNow == false) {
    isOpen = "Open Now";
  }
  else {
    isOpen = "Sorry were closed";
  }

  var contentString = `<div id="content">
            <div id="siteNotice">
            </div>
            <h1 id="firstHeading" class="firstHeading">${place.name}</h1>
            <div id="bodyContent">
            <img src="${place.icon}"/>
            <p><b>${place.name}</b>, is located in <b>${place.vicinity}</b></p>
            <p>${isOpen}</p>
            </div>
            </div>;`;
  var marker = new google.maps.Marker({
    position: place.geometry.location,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);

    infowindow.open(map, this);
  });


}

document.getElementById("find").addEventListener("click", function() {
  //clearLocations();
  // grab user input values
  var searchTerm = document.getElementById("searchTerm").value;
  var address = document.getElementById("whereTo").value;
  //console.log(searchTerm);


  // call geocoder passing in address from user input #location
  geoCodeAddress(address)
    // geocoder returns a "then-able" promise with results
    // .then only runs after the promise resolves
    .then(function(results) {
      // when geocoder is done log the results in console
      updateMap(results[0].geometry.location, searchTerm);
      //console.log(results);
    });
});

function geoCodeAddress(address) {
  // return a Promise
  var geocoder = new google.maps.Geocoder();
  return new Promise(function(resolve, reject) {
    geocoder.geocode({ 'address': address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // resolve results upon a successful status
        resolve(results);
      }
      else {
        // reject status upon un-successful status
        reject(status);
      }
    });
  });
}


function updateMap(location, searchTerm) {
  var updateCenter = location;

  //create the map  
  map = new google.maps.Map(document.getElementById("map"), {
    center: updateCenter,
    zoom: 15
  });
  infowindow = new google.maps.InfoWindow();

  var request = {
    location: updateCenter,
    radius: '500',
    type: searchTerm
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      //console.log(place);
      createMarker(place);
    }
  }
}
