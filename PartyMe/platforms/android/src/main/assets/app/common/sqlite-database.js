var Sqlite = require("nativescript-sqlite");

exports.initializeSQLite = function() {
    var db_promise = new Sqlite("Party.sqlite", function(err, db) {
        if (err) {
            console.error("Failed to open database", err);
        } else {
            // This should ALWAYS be true, db object is open in the "Callback" if no errors occurred
            console.log("Are we open yet (Inside Callback)? ", db.isOpen() ? "Yes" : "No");
            global.db = db;
        }
        global.db.execSQL("CREATE TABLE `Party` (`UserId` TEXT NOT NULL, `Name` TEXT NOT NULL );");

        console.log("Table created...");
    });

};