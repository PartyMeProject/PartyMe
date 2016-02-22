var application = require("application");
application.cssFile = "styles/app.css";
application.mainModule = "./views/main-page";

application.cssFile = "./styles/app.css";
application.start();


var databaseModule = require("./common/sqlite-database");

databaseModule.initializeSQLite();
