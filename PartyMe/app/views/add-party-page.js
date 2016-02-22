var vmModule = require("./../view-models/add-party-view-model");
var globalConstants = require("~/common/global-constants");

function pageLoaded(args) {
    var page = args.object;

    globalConstants.DatePicker = page.getViewById("date");
    globalConstants.TimePicker = page.getViewById("time");
    page.bindingContext = vmModule.addPartyViewModel;

    vmModule.addPartyViewModel.set('latitude', globalConstants.Latitude);
    vmModule.addPartyViewModel.set('longitude', globalConstants.Longitude);
}
exports.pageLoaded = pageLoaded;