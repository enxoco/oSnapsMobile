var page;
var email;
var dialogsModule = require("tns-core-modules/ui/dialogs");
var frameModule = require("tns-core-modules/ui/frame");

var observableModule = require("tns-core-modules/data/observable");

var user = new observableModule.fromObject({
    status: "",
    secret: "Enter Secret here",
    showDetails: false
});
var clipboard = require("nativescript-clipboard");


function copyText(args){

    clipboard.setText(user.status).then(function() {
        console.log("OK, copied to the clipboard");
    })
}
exports.copyText = copyText;

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
    user.showDetails = false;
};

const generatePage = {
    moduleName: "views/generateSecret/generateSecret-page",
    animated: true,
    clearHistory: true,
    // Set up a transition property on page navigation.
    transition: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    }};

    const retrievePage = {
        moduleName: "views/retrieveSecret/retrieveSecret-page",
        animated: true,
        clearHistory: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "curl",
            duration: 380,
            curve: "easeIn"
        }};

exports.showGenerateSecret = function(args) {
    user.showDetails = false
    frameModule.Frame.topmost().navigate(generatePage);
}  
exports.showRetrieveSecret = function(args) {
    user.showDetails = false
    frameModule.Frame.topmost().navigate(retrievePage);
}

