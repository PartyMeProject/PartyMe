var vmModule = require("./../view-models/login-view-model");
var viewModule = require("ui/core/view");
function pageLoaded(args) {
    var page = args.object;
    var username = viewModule.getViewById(page, "username");
    var password = viewModule.getViewById(page, "password");
    page.bindingContext = vmModule.loginViewModel;
}
exports.pageLoaded = pageLoaded;
