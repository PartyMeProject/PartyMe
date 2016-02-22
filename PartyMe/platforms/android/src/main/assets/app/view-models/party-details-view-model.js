var observable = require("data/observable");
var PartyDetailsModel = new observable.Observable();
var dialogs = require("ui/dialogs");
var Calendar = require("nativescript-calendar");

PartyDetailsModel.eventIt = function(name, location, date){
    console.log(date);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    var options = {
        title: name,
        startDate: new Date(date.getTime() + (60*60*1000)),
        endDate: new Date(date.getTime() + (24*60*60*1000))
    };

    options.location = location;

    options.reminders = {
        first: 30,
        second: 10
    };

    Calendar.createEvent(options).then(
        function(createdId) {
            alert('The event is added to your calendar.');
            console.log("Created Event with ID: " + createdId);
        },
        function(error) {
            console.log("Error creating an Event: " + error);
        }
    );
};

exports.partyDetailsModel = PartyDetailsModel;
