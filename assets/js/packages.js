
/*-----------------Autocomplete locations
function activatePlacesSearch() {
   var input = document.getElementById('search_term');
   var Autocomplete = new google.maps.places.Autocomplete(input);
}
------------------works when intit map switched off --------------------------/

/*-----------------Autocomplete function------------------------*/
$('#search_term').on('click',function(){
    
    // Create the search box and link it to the UI element.
    //basic google map api places for search bar
    var input = document.getElementById('search_term');
   var Autocomplete = new google.maps.places.Autocomplete(input);
   // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
   
});


$('#whereTo').on('click',function(){
    
    // Create the search box and link it to the UI element.
    //basic google map api places for search bar
    var enter = document.getElementById('whereTo');
   var Autocomplete = new google.maps.places.Autocomplete(enter);
   // map.controls[google.maps.ControlPosition.TOP_LEFT].push(enter);
   
});

/*-----------------Fetch and display packages to match search criteria*/





function fetchhotels(event) {



    var username = $("#city").val();

    if (!username) {

        $("#hotelpic").html(`<h2>Please enter search criteria</h2>`);

        return;

    }
}