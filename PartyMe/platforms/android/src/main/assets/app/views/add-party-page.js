var vmModule = require("./../view-models/add-party-view-model");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.addPartyViewModel;
}
exports.pageLoaded = pageLoaded;
