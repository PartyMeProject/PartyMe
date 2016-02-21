var vmModule = require("./../view-models/login-view-model");
var viewModule = require("ui/core/view");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.loginViewModel;
}
exports.pageLoaded = pageLoaded;
