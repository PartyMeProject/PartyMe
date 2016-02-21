var observable = require("data/observable");
var AddPartyModel = new observable.Observable();
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
var telerikBeckend = require("~/common/telerik-backend");
var Everlive = require('~/everlive.all.min');
var el = new Everlive({
    appId: telerikBeckend.ApiId,
    scheme: "https",
    authentication: {
        persist: true
    }
});

AddPartyModel.add = function () {

    var name = AddPartyModel.get("name");
    var description = AddPartyModel.get("description");
    var latitude = AddPartyModel.get("latitude");
    var longitude = AddPartyModel.get("longitude");

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
