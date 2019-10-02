function fetchorigin() {
     var origin = document.getElementById("origin").value;
     console.log(origin);
     }

function fetchdest() {
     var dest = document.getElementById("dest").value;
     console.log(dest);
     }

function fetchtype() {
     var type = document.getElementById("type").value;
     console.log(type);
     }

/*$(document).ready(function() {
    $.get('rompack.html', function(data) {
        $('#romantic-packages').html(data);
    });
});*/


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

