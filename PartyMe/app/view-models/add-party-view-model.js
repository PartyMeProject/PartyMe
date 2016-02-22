var observable = require("data/observable");
var AddPartyModel = new observable.Observable();
var frameModule = require("ui/frame");
var telerikBeckend = require("~/common/telerik-backend");
var Everlive = require('~/everlive.all.min');

var textFieldModule = require("ui/text-field");
var el = new Everlive({
    appId: telerikBeckend.ApiId,
    scheme: "https",
    authentication: {
        persist: true
    }
});
var location = new textFieldModule.TextField();
location.text = "ghghgh";

AddPartyModel.addPartyLocation = function(){
    frameModule.topmost().navigate("./views/map-page")
};

AddPartyModel.add = function () {

    var name = AddPartyModel.get("name");
    var description = AddPartyModel.get("description");

    latitude = AddPartyModel.get("latitude");
    longitude = AddPartyModel.get("longitude");

    var userId;
    el.Users.currentUser(function(data) {
        userId = data.result.Id;
        console.log(userId);
    }, function(err) {
        alert(err.message + " Please log in.");
    });

    var data = el.data('Party');
    data.create({
            'Name' : name,
            'Description' : description,
            'Location' : {
                'Latitude': Number(latitude),
                'Longitude': Number(longitude)
            },
            'UserId':userId
        },
        function(data){
            alert(JSON.stringify(data));
        },
        function(error){
            alert(JSON.stringify(error));
            console.dir(error);
        });
};
exports.addPartyViewModel = AddPartyModel;
