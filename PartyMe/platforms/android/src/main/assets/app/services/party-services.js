var constantsModule = require("nativescript-sqlite");

var Parties = (function (_super) {
    __extends(Parties, _super);
    function Parties() {
        _super.call(this);
    }


    Parties.prototype.addParty = function (userId, name) {
        global.db.execSQL("insert into Party values (?, ?)", [userId, name])
            .then(function(userId){
                console.log("inserted:", userId);
            }, function(err){
                console.log(err);
            });
    };

    Parties.prototype.getMyParties = function (currentUserId) {
        return global.db.all('select * from Party where userId=?', [currentUserId])
            .then(function(resultSet) {
                console.log("result is: ", resultSet);
                return resultSet;
            }, function(err){
                console.log(err);
            });
    };

    Parties.prototype.deleteDataFromTable = function (name) {
        return global.db.all("delete from " + name + ";")
            .then(function() {
                console.log("Old data removed");
            }, function(err){
                console.log(err);
            });
    };

    Parties.prototype.dropPartyTable = function () {
        return global.db.all("drop table Party;")
            .then(function() {
                console.log("Dropped Party" );
            }, function(err){
                console.log(err);
            });
    };

    return Parties;

})(Object);

exports.Parties = new Parties();