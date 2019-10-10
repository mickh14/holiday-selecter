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
      console.log(place);
      createMarker(place);
    }
  }
}

function createMarker(place) {
  var contentString = `<div id="content">
            <div id="siteNotice">
            </div>
            <h1 id="firstHeading" class="firstHeading">${place.name}</h1>
            <div id="bodyContent">
            <img src="${place.icon}"/>
            <p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large 
            sandstone rock formation in the southern part of the '+
            Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) 
            south west of the nearest large town, Alice Springs; 450&#160;km 
            (280&#160;mi) by road. Kata Tjuta and Uluru are the two major 
            features of the Uluru - Kata Tjuta National Park. Uluru is 
            sacred to the Pitjantjatjara and Yankunytjatjara, the 
            Aboriginal people of the area. It has many springs, waterholes, 
            rock caves and ancient paintings. Uluru is listed as a World 
            Heritage Site.</p>
            <p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
            https://en.wikipedia.org/w/index.php?title=Uluru</a> 
            (last visited June 22, 2009).</p>
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


/*================================================

function updateMap(location) {
  //new map coords
  //var newlng = results[0].geometry.location.lng;
  //var newlat = results[0].geometry.location.lat;
  var updateCenter = location;
  //create the map  
  map = new google.maps.Map(document.getElementById("map"), {
    center: updateCenter,
    zoom: 10

  });

.then(function(results) {
    updateMap(results[0].geometry.location);
  })


var map, geocoder, service, markers, bounds, infoWindow;

function initMap() {

  //create the map  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 50.4501, lng: 30.5234 }
  });

  geocoder = new google.maps.Geocoder();
  service = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow();
  // initialize array to hold map markers
  markers = [];


  addMarker({ lat: 53.4256, lng: -6.1316 });
  //add marker function
  function addMarker(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });
  }


}


///click event and attraction find buttons 
document.getElementById("find").addEventListener("click", function() {
  clearLocations();
  // grab user input values
  var searchTerm = document.getElementById("searchTerm").value;
  var address = document.getElementById("whereTo").value;
  

  // call geocoder passing in address from user input "whereTo"
  geoCodeAddress(address)
    // geocoder returns a "then-able" promise with results
    // .then only runs after the promise resolves
  
  


    //TODO search nearbyplaces- currently receive error Uncaught (in promise) ZERO_RESULTS
    .then(function(results) {
      // when geocoder is done call nearbySearch()
      return nearbySearch(results[0].geometry.location, rad, searchTerm);
    })/

    //retrieve the details of a place
    .then(function(results) {
      //send each Place to findDetail() building an array of promises with .map()
      return Promise.all(
          results.map(findDetail)
        );
    })
    
        .then(function(results) {
          // when .all() is fulfilled log results
          console.log(results);
        });
    });

  /*
//add markers
    .then(function(results) {
      // At this point full place objects are contained within results array

      // create new bounds
      bounds = new google.maps.LatLngBounds();
      // call createMarker() for each Place in array
      results.forEach(createMarker);
      // Adjust map with final bounds
      map.fitBounds(bounds);
    });
        */


/*center map - works was run  after Geocoder
  .then(function(results) {
    updateMap(results[0].geometry.location);
  })*/
// .catch only runs when promise is rejected

/*.catch(function(status) {
  alert(status);
});*/

/*
//get the GeoCode details
function geoCodeAddress(address) {
  // return a Promise
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

// nearbySearch() needs a LatLng location, radius, and user's search term.
function nearbySearch(location,rad, searchTerm) {
  // setup request object
  var request = {
    // location is a LatLng object
    location: location,
    radius: rad,
    name: searchTerm
  };
  // return promise
  return new Promise(function(resolve, reject) {
    service.nearbySearch(request, function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // resolve promise with results on OK status
        resolve(results);
      }
      else {
        // reject promise otherwise
        reject(status);
      }
    });
  });
}


// findDetail() takes in a place object
function findDetail(place) {
  // return promise
  return new Promise(function(resolve, reject) {
    // use getDetails method to retrieve Place data via the Place's place_id property
    service.getDetails({ placeId: place.place_id }, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        // upon successful request resolve place
        resolve(place);
      }
      else {
        // else reject with status
        reject(status);
      }
    });
  });
}

function updateMap(location) {
  //new map coords
  //var newlng = results[0].geometry.location.lng;
  //var newlat = results[0].geometry.location.lat;
  var updateCenter = location;
  //create the map  
  map = new google.maps.Map(document.getElementById("map"), {
    center: updateCenter,
    zoom: 10

  });

  geocoder = new google.maps.Geocoder();
  service = new google.maps.places.PlacesService(map);
  infoWindow = new google.maps.InfoWindow();
  // initialize array to hold map markers
  markers = [];

}

function createMarker(element, index, array) {
  // setup HTML to be displayed in infoWindow
  var html = "<b>" + element.name + "</b> <br/>" + element.formatted_address;
  // create map marker object
  var marker = new google.maps.Marker({
    map: map,
    position: element.geometry.location
  });
  // add listener for marker that opens an infoWindow with pre-defined HTML
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  // extend the bounds to accommodate each marker
  bounds.extend(element.geometry.location);
  // add each marker to the markers array
  markers.push(marker);
}

function clearLocations() {
  // set the map reference for each marker to null to erase from map
  markers.forEach(function(element, index, array) {
    element.setMap(null);
  });
  // empty markers array
  markers = [];
}

==================================================================================*/
/*
 var request = {
      location: { lat: 53.4256, lng: -6.1316 },
      radius: 5000,
      type: ['cafe']
    };
    
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    
    
    function callback(results, status) {
  if (status == google.maps.places.PlacesService.OK){
    for(var i = 0; i < results.length; i++){
      addMarker(result[i]);
    }
  }
}

*/
