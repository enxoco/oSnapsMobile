var page;
var email;
var dialogsModule = require("tns-core-modules/ui/dialogs");
var frameModule = require("tns-core-modules/ui/frame");


var observableModule = require("tns-core-modules/data/observable");

var user = new observableModule.fromObject({
    pin: "",
    showDetails: false,
    secret: ""
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};


exports.retrieveSecret = function(){

    fetch(`https://theopensuite.com/api/snaps/${user.pin}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((r) => r.json())
        .then((response) => {
            user.secret = response.secret
            user.showDetails = true
            user.pin = ""

        }).catch((e) => {
        });
}
const homePage = {
    moduleName: "views/login/login-page",
    animated: true,
    // Set up a transition property on page navigation.
    transition: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    }};

exports.goHome = function() {
    user.showDetails = false
    frameModule.Frame.topmost().navigate(homePage)

}