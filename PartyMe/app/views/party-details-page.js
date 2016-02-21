var vmModule = require("./../view-models/party-details-view-model");
var view = require("ui/core/view");
var uiframe = require("ui/frame");
var buttonModule = require("ui/button");

var party;

function pageNavigatedTo(args) {
    var page = args.object;
    party = page.navigationContext.party;
    page.bindingContext = page.navigationContext.party;

    view.getViewById(page, 'attend').on('tap', function(){
        vmModule.partyDetailsModel.eventIt(party.Name, party.Location.latitude + '° N, ' + party.Location.longitude + '° E', new Date(party.DueDate));
    });
}

exports.pageLoaded = pageNavigatedTo;
