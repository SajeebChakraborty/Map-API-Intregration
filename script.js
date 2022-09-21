var map;
function initMap() {
	var mapLayer = document.getElementById("map-layer");
	var centerCoordinates = new google.maps.LatLng(37.6, -95.665);
	var defaultOptions = { center: centerCoordinates, zoom: 4 }

	map = new google.maps.Map(mapLayer, defaultOptions);
}

function locate(){
	document.getElementById("btnAction").disabled = true;
	document.getElementById("btnAction").innerHTML = "Processing...";
	if ("geolocation" in navigator){
		navigator.geolocation.getCurrentPosition(function(position){ 
			var currentLatitude = position.coords.latitude;
			var currentLongitude = position.coords.longitude;

			var infoWindowHTML = "Latitude: " + currentLatitude + "<br>Longitude: " + currentLongitude;
			var infoWindow = new google.maps.InfoWindow({map: map, content: infoWindowHTML});
			var currentLocation = { lat: currentLatitude, lng: currentLongitude };
			infoWindow.setPosition(currentLocation);
			document.getElementById("btnAction").style.display = 'none';
		});
	}
}