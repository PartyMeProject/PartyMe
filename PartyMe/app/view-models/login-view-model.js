var observable = require("data/observable");
var LoginModel = new observable.Observable();

var telerikBeckend = require("~/common/telerik-backend");
var Everlive = require('~/everlive.all.min');
var el = new Everlive(telerikBeckend.ApiId);

LoginModel.register = function () {
    var username = LoginModel.get("username");
    var password = LoginModel.get("password");
   console.log(username.text);
   console.log(password.text);
   var attrs = null;

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
exports.loginViewModel = LoginModel;