var datePickerModule = require("ui/date-picker");
var timePickerModule = require("ui/time-picker");
var GlobalConstants = (function() {

    var GlobalConstants = {

        latitude : 0,
        longitude : 0,
        datePicker : new datePickerModule.DatePicker(),
        timePicker : new timePickerModule.TimePicker()
    };

    return GlobalConstants;
})();

exports.Latitude = GlobalConstants.latitude;
exports.Longitude = GlobalConstants.longitude;
exports.DatePicker = GlobalConstants.datePicker;
exports.TimePicker = GlobalConstants.timePicker;
