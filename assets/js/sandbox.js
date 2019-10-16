

function fetchdest() {
    var selectDest = document.getElementById("dest").value;
    var destVal = selectDest.options[selectDest.selectedIndex].value;
    if (destVal == "paris") {
        console.log(destVal);
    }
    else {
        console.log("origin");
    }
    return false;
}
     
 

function fetchtype() {
     var selectType = " ";
     selectType = document.getElementById("holType").value;
     if (selectType == "famGet") {
        $(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#romantic-packages').html(data);
    });
});
    } else if (selectType == "romRet") {
        $(document).ready(function() {
    $.get('fampack.html', function(data) {
        $('#family-packages').html(data);
    });
});
    }
     }



/*
if(dest ="paris"){
   $(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#romantic-packages').html(data);
    });
});
} else if (dest ="berlin"){
    $(document).ready(function() {
    $.get('fampack.html', function(data) {
        $('#family-packages').html(data);
    });
});
}
*/


function callback(results, status) {
  if (status == google.maps.places.PlacesService.OK){
    for(var i = 0; i < results.length; i++){
      createMarker(result[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map:map,
    position:place.geometry.location
  });
}



 var request = {
      location: center,
      radius: 5000,
      type: ['cafe']
    };
    
    var service = new google.maps.places.PlacesService(map);
    
    service.nearbySearch(request, callback);
}    



function callback(results, status) {
  if (status == google.maps.places.PlacesService.OK){
    for(var i = 0; i < results.length; i++){
      createMarker(result[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map:map,
    position:place.geometry.location
  });
}


function fetchhotels(event) {



    var username = $("#city").val();

    if (!username) {

        $("#hotelpic").html(`<h2>Please enter search criteria</h2>`);

        return;

    }
}