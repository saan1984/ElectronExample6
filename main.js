var application = require('app'),
    BrowserWindow = require('browser-window'), CrashReporter = require('./js/app-crash-reporter')
application.on('ready', function() {

    var mainWindow = new BrowserWindow({
        width: 600,
        height: 300,
        center:true,
        title:"Electron Application Crash Reporter Example",
    });
    mainWindow.loadUrl('file://' + __dirname + '/main.html');

    mainWindow.on('closed', function() {
        mainWindow.show();
    });
    mainWindow.on('crashed', function() {
        CrashReporter.submitCrashReport();
    });
    mainWindow.on('gpu-crashed', function() {
        CrashReporter.submitCrashReport();
    });
    mainWindow.on('plugin-crashed', function() {
        CrashReporter.submitCrashReport();
    });
});