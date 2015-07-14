var Firebase = require("firebase"),
    CrashReporter = require('crash-reporter'),
firebaseRef = new Firebase("https://electroncrashreport.firebaseio.com/");
CrashReporter.start();
module.exports= {
    submitCrashReport: function(){
        console.log('heeeeeeeeeeeeeeee')
    }
}
