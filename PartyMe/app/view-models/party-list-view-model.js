var observable = require("data/observable");
var observable_array_1 = require("data/observable-array");
var PartyListModel = new observable.Observable();
var frameModule = require("ui/frame");
var telerikBeckend = require("~/common/telerik-backend");
var listViewModule = require("ui/list-view");
var Everlive = require('~/everlive.all.min');
var el = new Everlive({
    appId: 'wweslm4a9bw08pdf',
    scheme: "https",
    authentication: {
        persist: true
    }
});
PartyListModel.addParty = function(){
    frameModule.topmost().navigate("./views/add-party-page")
};
var data = el.data('Party');
var query = new Everlive.Query();
query.order('Name');
data.get(query)
    .then(function(data){
            PartyListModel.parties = data.result;
        },
        function(error){
            alert(JSON.stringify(error.message));
        });

PartyListModel.getPartyById = function(id, callback){
    var query2 = new Everlive.Query();
    query2.where().eq('Id', id);
    data.get(query2)
        .then(function(data){
                callback(data.result[0]);
            },
            function(error){
                alert(JSON.stringify(error));
            });
};


exports.partyListModel = PartyListModel;
