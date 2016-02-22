var vmModule = require("./../view-models/party-details-view-model");
var view = require("ui/core/view");
var screenshotPlugin = require("nativescript-screenshot");
var mapsModule = require("nativescript-google-maps-sdk");
var image = require("ui/image");
var socialShare = require("nativescript-social-share");
var imageSource = require("image-source");
var party;
var pageToImage;

function pageNavigatedTo(args) {
    var page = args.object;
    pageToImage = page;
    party = page.navigationContext.party;
    page.bindingContext = page.navigationContext.party;

    view.getViewById(page, 'attend').on('tap', function(){
        vmModule.partyDetailsModel.eventIt(party.Name, party.Location.latitude + '° N, ' + party.Location.longitude + '° E', new Date(party.DueDate));
    });
}
function onMapReady(args) {

    var mapView = args.object;

    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(party.Location.latitude,party.Location.longitude);
    marker.title = "Party";
    marker.snippet = "Here";
    marker.userData = { index : 1};
    mapView.addMarker(marker);

}

function onMarkerSelect(args) {
    console.log("Clicked on " +args.marker.title);
}

exports.pageLoaded = pageNavigatedTo;
exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.screenshot = function(args){
    var img = new image.Image();
    img.imageSource = screenshotPlugin.getImage(pageToImage);

    socialShare.shareImage(img.imageSource);


};
