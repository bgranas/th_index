var ready = function() {


}

var map;
var myLatLng = {lat: 11.559145, lng: 104.895077};
function initMap() {
  map = new google.maps.Map(document.getElementById('map-holder'), {
    center: myLatLng,
    zoom: 6,
  });

 	var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Phnom Penh'
  });

  marker.addListener('click', function(){
  	alert("Phnom Penh");

  });
}






$(document).ready(ready);
$(document).on('page:load', ready);
