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


$(document).ready(function() {
    var minDate = new Date();
    $("#enterDate").datepicker({
        format: 'yyyy-mm-dd',
        minDate: minDate,
        onClose: function(selectedDate) {
            $('#leaveDate').datepicker("option", "minDate", selectedDate);
        }
    });

    $("#leaveDate").datepicker({
        format: 'yyyy-mm-dd',
        minDate: minDate,
        onClose: function(selectedDate) {
            $('#enterDate').datepicker("option", "minDate", selectedDate);
        }
    });
});




/*-----------------show hotel details from API------------------------------*/
function hotelInformationHTML(hotelDetails) {
    return `
        <ul style="list-style: none;">
                <li>
                    <i class="hotel-icon fas fa-h-square" aria-hidden="true"></i> <span class="hotel-text">${hotelDetails.result[0].hotel_name}</span>
                </li>
                <li >
                    <i class="hotel-detail-icon fas fa-bed" aria-hidden="true"></i><span class="hotel-detail-text"> ${hotelDetails.copyright[1]}</span>
                </li>
                <li >
                    <span class="hotel-detail-icon fas fa-link" aria-hidden="true">
                <a href="${hotelDetails.result[0].url}" target="_blank">${hotelDetails.result[0].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

function hoteltwoInformationHTML(hotelDetails) {
    return `
        <ul style="list-style: none;">
                <li>
                    <i class="hotel-icon fas fa-h-square" aria-hidden="true"></i> <span class="hotel-text">${hotelDetails.result[1].hotel_name}</span>
                </li>
                <li >
                    <i class="hotel-detail-icon fas fa-bed" aria-hidden="true"></i><span class="hotel-detail-text"> ${hotelDetails.copyright[3]}</span>
                </li>
                <li >
                    <span class="hotel-detail-icon fas fa-link" aria-hidden="true">
                <a href="${hotelDetails.result[1].url}" target="_blank">${hotelDetails.result[1].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

function hoteThreelInformationHTML(hotelDetails) {
    return `
        <ul style="list-style: none;">
                <li>
                    <i class="hotel-icon fas fa-h-square" aria-hidden="true"></i> <span class="hotel-text">${hotelDetails.result[2].hotel_name}</span>
                </li>
                <li >
                    <i class="hotel-detail-icon fas fa-bed" aria-hidden="true"></i><span class="hotel-detail-text"> ${hotelDetails.copyright[2]}</span>
                </li>
                <li >
                    <span class="hotel-detail-icon fas fa-link" aria-hidden="true">
                <a href="${hotelDetails.result[2].url}" target="_blank">${hotelDetails.result[6].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

function hotelfourlInformationHTML(hotelDetails) {
    return `
        <ul style="list-style: none;">
                <li>
                    <i class="hotel-icon fas fa-h-square" aria-hidden="true"></i> <span class="hotel-text">${hotelDetails.result[3].hotel_name}</span>
                </li>
                <li >
                    <i class="hotel-detail-icon fas fa-bed" aria-hidden="true"></i><span class="hotel-detail-text"> ${hotelDetails.copyright[10]}</span>
                </li>
                <li >
                    <span class="hotel-detail-icon fas fa-link" aria-hidden="true">
                <a href="${hotelDetails.result[3].url}" target="_blank">${hotelDetails.result[3].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

function hotelfivelInformationHTML(hotelDetails) {
    return `
        <ul style="list-style: none;">
                <li>
                    <i class="hotel-icon fas fa-h-square" aria-hidden="true"></i> <span class="hotel-text">${hotelDetails.result[4].hotel_name}</span>
                </li>
                <li >
                    <i class="hotel-detail-icon fas fa-bed" aria-hidden="true"></i><span class="hotel-detail-text"> ${hotelDetails.copyright[13]}</span>
                </li>
                <li >
                    <span class="hotel-detail-icon fas fa-link" aria-hidden="true">
                <a href="${hotelDetails.result[4].url}" target="_blank">${hotelDetails.result[4].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

/*-----------------/show hotel details from API------------------------------*/

/*-----------------Show Hotel Pic------------------------------



function hotelImageHTML(hotelPic) {
    return `
        <div">
                
                    <img src="${hotelPic.data[1950932][0][4]}" width = "80" height = "80" alt="hotel Image"/>
                
            </div>
        `;
}*/

/*-----------------connectict to Booking Automcomplete------------------------------

function fetchSuggestedLocation(location){
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete?languagecode=en-us&text="+location,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
		"x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
	    }
    };

    $.ajax(settings).done(function (response) {
    	console.log("string");
    	console.log(response);
    });
}
To Delete*/
var dest;

function fethHotelDetails() {
    var arrDate = $("#enterDate").val();
    var leaveDate = $("#leaveDate").val();
    var hotAddress = $("#search_term").val();
    var hotel_id;
    $("#pack-area").css("visibility", "visible");

    //var newLatLng = dest;
    //var newLng = hotAddress.lng;
    //console.log(newLatLng);
    //console.log(newLng);


    if (!arrDate || !leaveDate || !hotAddress) {
        $("#hotelNameThree").html(`<p class="error-msg">Please return to search. Do not leave any criteria blank</p>`);
        return;
    }

    // call geocoder passing in address from user input #search_term
    geoCodeAddress(hotAddress)

        .then(function(results) {
            // when geocoder is done log the results in console
            return fetchHotelList(arrDate, leaveDate, dest);
        })
        // .catch only runs when promise is rejected
        .catch(function(status) {
            alert(status);
        });

}

function geoCodeAddress(hotAddress) {
    // return a Promise
    var geocoder = new google.maps.Geocoder();
    return new Promise(function(resolve, reject) {
        geocoder.geocode({ 'address': hotAddress }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                // resolve results upon a successful status
                resolve(results);
                dest = results[0].geometry.location;
            }
            else {
                // reject status upon un-successful status
                reject(status);
            }
        });
    });
}

function fetchHotelList(arrDate, leaveDate, dest) {
    var newLat = dest.lat();
    var newLng = dest.lng();
    //console.log(newLat);
    //console.log(newLng);
    
    //API connection to Hotel list API
    //Postman success - https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=2019-11-13&departure_date=2019-11-14&longitude=106.686102&latitude=10.838039&search_type=latlong
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=" + arrDate + "&departure_date=" + leaveDate + "&longitude=" + newLng + "&latitude=" + newLat + "&search_type=latlong",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };


    $.when(
        $.ajax(settings).done(function(firstResponse) {
            //console.log(firstResponse.result[8].hotel_name);
            //console.log(firstResponse);
            //hotel_id = firstResponse.result[8].hotel_id;
            //console.log(hotel_id);

        })).then(
        function(firstResponse) {
            var hotelDetails = firstResponse;
            //console.log(hotelDetails.result[8].hotel_id);
            //hotel Details
            $("#hotelNameOne").html(hotelInformationHTML(hotelDetails));
            $("#hotelNameTwo").html(hoteltwoInformationHTML(hotelDetails));
            $("#hotelNameThree").html(hoteThreelInformationHTML(hotelDetails));
            $("#hotelNameFour").html(hotelfourlInformationHTML(hotelDetails));
            $("#hotelNameFive").html(hotelfivelInformationHTML(hotelDetails));
            if (hotelDetails.result.length > 0) {
                for (var i = 1; i < 6; i++) {
                    var hotel = hotelDetails.result[i].hotel_id;
                    //var roomInfo = response.copyright[8];
                    //console.log(hotel);
                    //console.log(roomInfo);
                    fetchHotelPic(hotel);
                }
            }
            else {
                console.log(response);
            }

        }
    );
}


function fetchHotelPic(hotel) {
    var hotelIds = hotel;
    console.log(hotelIds);
    //API connection to Hotel photos API    
    var hotelSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photos?hotel_ids=" + hotelIds + "&languagecode=en-us",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };

    $.ajax(hotelSettings).done(function(hotelresponse) {
        console.log(hotelresponse);
        //var hotelPic = hotelresponse.data[1950932][0][4];
        //console.log(hotelPic);

        //$("#hotelImageOne").html(hotelImageHTML(hotelPic));
    });
}




/*-----------------Loop to display hotel details - how do I get 

function (error_Response){
           if  (error_Response.status == 500){
               $("#hotelNameThree").html(`<p class="error-msg">Please review dates: ${error_Response.message}</p>`);
           }
        }

then(
        function fetchHotels(response) {
            if (response.result.length > 0) {
                for (var i = 0; i < response.result.length; i++) {
                    var hotel = response.result[i];
                    //var roomInfo = response.copyright[8];
                    //console.log(hotel);
                    //console.log(roomInfo);
                    hotelInformationHTML(hotelDetails);
                }
            }
            else {
                console.log(response);
            }
        }

    );
    */


/*
geoCodeAddress(hotAddress);
    
    
    //API connection to Hotel list API
    //Postman success - https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=2019-11-13&departure_date=2019-11-14&longitude=53.4304087&latitude=-6.1498546&search_type=latlong
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=" + arrDate + "&departure_date=" + leaveDate + "&longitude=106.686102&latitude=10.838039&search_type=latlong",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };


    $.when(
        $.ajax(settings).done(function(firstResponse) {
            //console.log(firstResponse.result[8].hotel_name);
            //console.log(firstResponse);
            //hotel_id = firstResponse.result[8].hotel_id;
            //console.log(hotel_id);

        })).then(
        function(firstResponse) {
            var hotelDetails = firstResponse;
            console.log(hotelDetails);
            //hotel Details
            $("#hotelNameOne").html(hotelInformationHTML(hotelDetails));
            $("#hotelNameTwo").html(hoteltwoInformationHTML(hotelDetails));
            $("#hotelNameThree").html(hoteThreelInformationHTML(hotelDetails));
            $("#hotelNameFour").html(hotelfourlInformationHTML(hotelDetails));
            $("#hotelNameFive").html(hotelfivelInformationHTML(hotelDetails));


        }
    );

    function geoCodeAddress
*/