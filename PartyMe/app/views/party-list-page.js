var vmModule = require("./../view-models/party-list-view-model");
var view = require("ui/core/view");
var uiframe = require("ui/frame");
var shouldReload = true;

function pageLoaded(args) {
    var page = args.object;
    vmModule.partyListModel.isLoading = shouldReload;
    page.bindingContext = vmModule.partyListModel;

    if(shouldReload){
        setTimeout(function(){
            shouldReload = false;
            uiframe.reloadPage();
        }, 2000);
    }
    view.getViewById(page, 'partiesList').on("itemTap", function (args) {
        var item = view.getViewById(args.view, 'id');
        if(item){
            vmModule.partyListModel.getPartyById(item.text, function(data){
                uiframe.topmost().navigate({
                    moduleName: "views/party-details-page",
                    context: {party: data}
                });
            });
        }
    });
}
exports.pageLoaded = pageLoaded;
