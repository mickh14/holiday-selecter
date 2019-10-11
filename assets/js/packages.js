/*-----------------Autocomplete locations
function activatePlacesSearch() {
   var input = document.getElementById('search_term');
   var Autocomplete = new google.maps.places.Autocomplete(input);
}
------------------works when intit map switched off --------------------------/

/*-----------------Autocomplete function------------------------*/
$('#search_term').on('click', function() {

    // Create the search box and link it to the UI element.
    //basic google map api places for search bar
    var input = document.getElementById('search_term');
    var Autocomplete = new google.maps.places.Autocomplete(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

});


$('#whereTo').on('click', function() {

    // Create the search box and link it to the UI element.
    //basic google map api places for search bar
    var enter = document.getElementById('whereTo');
    var Autocomplete = new google.maps.places.Autocomplete(enter);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(enter);

});

/*-----------------Fetch and display packages using Ajax------------------------------*/

function fetchtype() {

    var selectType = document.getElementById("holType").value;
    var selectdest = document.getElementById("search_term").value;
    console.log(selectdest);
    $('#locpic').append($("selectdest.value"));

}


/*-----------------booking apix------------------------------
var req = unirest("GET", "https://apidojo-booking-v1.p.rapidapi.com/properties/list");

req.query({
	"price_filter_currencycode": "USD",
	"travel_purpose": "leisure",
	"categories_filter": "price::9-40,free_cancellation::1,class::1,class::0,class::2",
	"search_id": "none",
	"order_by": "popularity",
	"children_qty": "2",
	"languagecode": "en-us",
	"children_age": "5,7",
	"search_type": "city",
	"offset": "0",
	"dest_ids": "-3712125",
	"guest_qty": "1",
	"arrival_date": "2019-03-13",
	"departure_date": "2019-03-15",
	"room_qty": "1"
});

req.headers({
	"x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
	"x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
===================================

*/

/*
$.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json'
}).done(function(data) {
    console.log(data);
    $.map(data, function(post, i) {
        $('#packagepref').append('<h3>' + post.title + '</h3><p>' + post.body + '</p>');
    });
});


$.ajax(settings).done(function (response) {
	//console.log(response);
	dataType: 'json';
}).done(function(data){
    console.log(data);
        $.map(data, function(post, i) {
        $('#packagepref').append('<h3>' + post.message + '</h3><p>' + post.body + '</p>');
    });
})

*/

/*-----------------Fetch and display packages to match search criteria using get HTML

function fetchtype(){
    
    var selectType = document.getElementById("holType").value;
    var selectdest = document.getElementById("search_term").value;
    console.log(selectdest);
    
    $.get('index.html', function(search_term) {
                $('#locpic').html(data);
            });
    
    if (selectType == "famGet"){
        $(document).ready(function(){
            $.get('fampack.html', function(data) {
                $('#packagepref').html(data);
            });
        });
    } else if (selectType == "romGet"){
        $(document).ready(function(){
            $.get('rompack.html', function(data) {
                $('#packagepref').html(data);
            });
        });
    } else if (selectType == "friGet"){
        $(document).ready(function(){
            $.get('fripack.html', function(data) {
                $('#packagepref').html(data);
            });
        });
    }   
}

function locHead(){
    var selectType = document.getElementById("search_term").value;
}
*/