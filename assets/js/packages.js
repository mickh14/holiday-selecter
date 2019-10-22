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




/*-----------------Date Picker------------------------------
$(document).ready(function() {
    $('.dates #leaveDate').datepicker({
        'format': 'yyyy-mm-dd',
        'autoclose': false
    });
});
*/

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




/*-----------------fetch hotel details from API------------------------------*/
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
                <a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[0].hotel_name}</a>
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
                <a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[1].hotel_name}</a>
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
                <a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[6].hotel_name}</a>
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
                <a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[3].hotel_name}</a>
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
                <a href="${hotelDetails.url}" target="_blank">${hotelDetails.result[4].hotel_name}</a>
            </span>
                </li>
            </ul>
        `;
}

function fethHotelDetails(dest) {
    var arrDate = $("#enterDate").val();
    var leaveDate = $("#leaveDate").val();
    //hotelLngLat to be used as dest_ids
    var hotelLngLat = dest;
    console.log(hotelLngLat);

    //API connection to Hotel list API
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/list?arrival_date=" + arrDate + "&departure_date=" + leaveDate + "&dest_ids=-3712125",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };

    //API connection to Hotel photos API    
    var hotelSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-booking-v1.p.rapidapi.com/properties/get-hotel-photos?languagecode=en-us&hotel_ids=1950932",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key": "ecace6c59emsh92e31436031b0c6p1b84d8jsnca11e04da872"
        }
    };


    $.when(
        $.ajax(settings).done(function(firstResponse) {
            //console.log(firstResponse.result[8].hotel_name);
            console.log(firstResponse);
            var hotel_id = firstResponse.result[8].hotel_id;
            console.log(hotel_id);

        }).then(
            $.ajax(hotelSettings).done(function(hotelresponse) {
        console.log(hotelresponse);
    })
    ).then(
        function(firstResponse) {
            var hotelDetails = firstResponse;

            //console.log(hotel_id);


            $("#hotelNameOne").html(hotelInformationHTML(hotelDetails));
            $("#hotelNameTwo").html(hoteltwoInformationHTML(hotelDetails));
            $("#hotelNameThree").html(hoteThreelInformationHTML(hotelDetails));
            $("#hotelNameFour").html(hotelfourlInformationHTML(hotelDetails));
            $("#hotelNameFive").html(hotelfivelInformationHTML(hotelDetails));
        }


    ));

    function geoCodeAddress(hotAddress) {
        // return a Promise
        var geocoder = new google.maps.Geocoder();
        return new Promise(function(resolve, reject) {
            geocoder.geocode({ 'address': hotAddress }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    // resolve results upon a successful status
                    resolve(results);
                    var dest = results[0].geometry.location;
                    //console.log(dest);
                }
                else {
                    // reject status upon un-successful status
                    reject(status);
                }
            });
        });
    }
}





/*-----------------Loop to display hotel details - how do I get 

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
    
    
  /*  when for hotel list response
    $.when(
        $.ajax(settings).done(function(firstResponse) {
            console.log(firstResponse.result[8].hotel_name);
            console.log(firstResponse);
            //var hotel_id = firstResponse.result[8].hotel_id;
            //console.log(hotel_id);

        })
    )*/