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




/*-----------------Date Picker------------------------------*/
$(function() {
    $('.dates #leaveDate').datepicker({
        'format': 'yyyy-mm-dd',
        'autoclose': false
    });
});

$(function() {
    $('.dates #enterDate').datepicker({
        'format': 'yyyy-mm-dd',
        'autoclose': false
    });
});



/*-----------------Fetch and display packages using Ajax------------------------------

function fetchtype() {

    var selectType = document.getElementById("holType").value;
    var selectdest = document.getElementById("search_term").value;
    console.log(selectdest);
    $('#locpic').

}
*/

/*-----------------booking apix------------------------------
https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=+arrDate+&departure_date=+leaveDate+&price_filter_currencycode=USD&travel_purpose=leisure&categories_filter=price%3A%3A9-40%2Cfree_cancellation%3A%3A1%2Cclass%3A%3A1%2Cclass%3A%3A0%2Cclass%3A%3A2&search_id=none&order_by=popularity&children_qty=2&languagecode=en-us&children_age=5%2C7&search_type=city&offset=0&dest_ids=-3712125&guest_qty=1&room_qty=1

*/
function hotelInformationHTML(hotelDetails) {
    return `
        <h1">${hotelDetails.result[0].hotel_name}</h1>
        <p>Room Type: ${hotelDetails.copyright[0]}</p>
        <p>All Inclusive Price: ${hotelDetails.result[0].price_breakdown.all_inclusive_price}${hotelDetails.result[0].price_breakdown.currency}</p>
        <span class="url-style">
                Visit:<a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[8].hotel_name}</a>
            </span>
        `;
}

function hoteltwoInformationHTML(hotelDetails) {
    return `
        <h1">${hotelDetails.result[1].hotel_name}</h1>
        <p>Room Type: ${hotelDetails.copyright[1]}</p>
        <p>All Inclusive Price: ${hotelDetails.result[1].price_breakdown.all_inclusive_price}${hotelDetails.result[1].price_breakdown.currency}</p>
        <span class="url-style">
                Visit:<a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[1].hotel_name}</a>
            </span>
        `;
}

function hoteThreelInformationHTML(hotelDetails) {
    return `
        <h1">${hotelDetails.result[2].hotel_name}</h1>
        <p>Room Type: ${hotelDetails.copyright[2]}</p>
        <p>All Inclusive Price: ${hotelDetails.result[2].price_breakdown.all_inclusive_price}${hotelDetails.result[2].price_breakdown.currency}</p>
        <span class="url-style">
                Visit:<a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[2].hotel_name}</a>
            </span>
        `;
}

function fethHotelDetails() {
    var arrDate = $("#enterDate").val();
    var leaveDate = $("#leaveDate").val();
    //console.log(arrDate);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=2019-11-15&departure_date=2019-11-19&dest_ids=-3712125",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };

    //can I use a promis, when response then do XYZ

    $.when(
        $.ajax(settings).done(function(response) {
            //console.log(response.result[8].hotel_name);
            //console.log(response);
        })
    ).then(
        function (response) {
            var hotelDetails = response;
            console.log(response);
            
            
            $("#hotelNameOne").html(hotelInformationHTML(hotelDetails));
            $("#hotelNameTwo").html(hoteltwoInformationHTML(hotelDetails));
            $("#hotelNameThree").html(hoteThreelInformationHTML(hotelDetails));
        }

    );

    
    }


    /*-----------------/booking apix------------------------------*/

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

then(
        function fetchHotels(response) {
            if (response.result.length > 0) {
                for (var i = 0; i < response.result.length; i++) {
                    var hotel = response.result[i];
                    //var roomInfo = response.copyright[8];
                    //console.log(hotel);
                    //console.log(roomInfo);
                    showHotelDetail(hotel);
                }
            }
            else {
                console.log(response);
            }
        }

    );
    */