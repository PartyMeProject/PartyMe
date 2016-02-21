var observable = require("data/observable");
var frameModule = require("ui/frame");
var topmost;
var telerikBeckend = require("~/common/telerik-backend");
var Everlive = require('~/everlive.all.min');
var el = new Everlive({
    appId: telerikBeckend.ApiId,
    scheme: "https",
    authentication: {
        persist: true
    }
});


var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    HelloWorldModel.prototype.tapAction = function () {
        topmost = frameModule.topmost();
        el.Users.currentUser(function(data) {
            console.log(data.result);
            if (data.result) {
                topmost.navigate("./views/add-party-page")
            } else {
                topmost.navigate("./views/login-page")
            }
        }, function(err) {
            alert(err.message + " Please log in.");
        });
    };
    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
