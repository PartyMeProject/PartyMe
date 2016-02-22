var vmModule = require("./../view-models/my-parties-view-model");
var view = require("ui/core/view");
var uiframe = require("ui/frame");
var shouldReload = true;

function pageLoaded(args) {

    var page = args.object;
    vmModule.partyListModel.isLoading = shouldReload;
    page.bindingContext = vmModule.partyListModel;

    if(shouldReload) {
        setTimeout(function () {
            shouldReload = false;
            uiframe.reloadPage();
        }, 2000);
    }
}
exports.pageLoaded = pageLoaded;
exports.delete = function(args) {
    console.log('here');

    var item = args.view.bindingContext;
    console.dir(item);
    vmModule.partyListModel.delete(item);
};