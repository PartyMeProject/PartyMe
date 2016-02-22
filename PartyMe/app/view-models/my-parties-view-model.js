var observable = require("data/observable");
var PartyListModel = new observable.Observable();
var frameModule = require("ui/frame");
var partyService = require("~/services/party-services");
var Everlive = require('~/everlive.all.min');
var telerikBeckend = require("~/common/telerik-backend");

var el = new Everlive({
    appId: telerikBeckend.ApiId,
    scheme: "https",
    authentication: {
        persist: true
    }
});
PartyListModel.addParty = function(){
    frameModule.topmost().navigate("./views/add-party-page")
};
PartyListModel.allParties = function(){
    frameModule.topmost().navigate("./views/party-list-page")
};
var userId;
el.Users.currentUser(function(data) {
    userId = data.result.Id;
    var myParties = partyService.Parties.getMyParties(userId);

    var myPartiesSQLiteResult = [];

    myParties.then(function(data) {
        for (var i = 0; i < data.length; i++) {
            var party = {
                Name: data[i][1]
            };
            myPartiesSQLiteResult.push(party);
        }
    });
    PartyListModel.parties = myPartiesSQLiteResult;
    console.dir(PartyListModel.parties);

}, function(err) {
    alert(err.message + " Please log in.");
});




exports.partyListModel = PartyListModel;