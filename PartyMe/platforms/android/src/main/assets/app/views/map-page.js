var mapsModule = require("nativescript-google-maps-sdk");
var geolocation = require("nativescript-geolocation");
var frameModule = require("ui/frame");
var actionBarModule = require("ui/action-bar");
var globalConstants = require("~/common/global-constants");
var topmost;
var camera;
var mapView;
var myLatitude;
var myLongitude;

function onMapReady(args) {

    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10}).
        then(function(loc) {
            if (loc) {
                myLatitude = loc.longitude;
                myLongitude = loc.latitude;

                mapView = args.object;

                var marker = new mapsModule.Marker();
                marker.position = mapsModule.Position.positionFromLatLng(myLongitude,myLatitude);
                marker.title = "Party";
                marker.snippet = "Here";
                marker.userData = { index : 1};
                mapView.addMarker(marker);
            }
        }, function(e){
            console.log("Error: " + e.message);
        });
}

function onMarkerSelect(args) {
    console.log("Clicked on " +args.marker.title);
}

function onCameraChanged(args) {

    console.log("Camera changed: " + JSON.stringify(args.camera));
}

function onCoordinateTapped(args){
    console.log("Clicked ggon " +args.coords);
}

function pageLoaded(args) {
    topmost = frameModule.topmost();

}
function addLocation(eventData) {

   globalConstants.Latitude = myLatitude;
   globalConstants.Longitude = myLongitude;

    console.log(globalConstants.Latitude);
    console.log(globalConstants.Longitude);
    topmost.goBack();
}
exports.addLocation = addLocation;
exports.pageLoaded = pageLoaded;
exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;
exports.onCoordinateTapped = onCoordinateTapped;
