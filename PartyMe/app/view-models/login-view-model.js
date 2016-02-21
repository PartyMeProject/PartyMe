var observable = require("data/observable");
var LoginModel = new observable.Observable();
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();
var telerikBeckend = require("~/common/telerik-backend");
var Everlive = require('~/everlive.all.min');
var el = new Everlive({
    appId: telerikBeckend.ApiId,
    scheme: "https",
    authentication: {
        persist: true
    }
});

LoginModel.register = function () {
   var attrs = null;
    var username = LoginModel.get("username");
    var password = LoginModel.get("password");
   el.Users.register(username,
       password,
       attrs,
       function (data) {
          alert(JSON.stringify(data));
       },
       function (error) {
          alert(JSON.stringify(error));
       });
};

LoginModel.login = function(){
    var username = LoginModel.get("username");
    var password = LoginModel.get("password");

    el.authentication.login(username, password, function(data) {
        var accessToken = data.result.access_token;

        alert("Successfully logged the user in!");
        console.log("here");
        topmost.navigate("./views/main-page");
    }, function(err) {
        alert("Unfortunately an error occurred: " + err.message);
    });
};
exports.loginViewModel = LoginModel;