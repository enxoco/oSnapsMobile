var page;
var email;
var dialogsModule = require("tns-core-modules/ui/dialogs");
var frameModule = require("tns-core-modules/ui/frame");

var observableModule = require("tns-core-modules/data/observable");

var user = new observableModule.fromObject({
    status: "Enter your secret.",
    secret: "Enter Secret here"
});
// >> modal-view-js
let closeCallback;


function onShownModally(args) {
    var page = args.object;

    var gotData = page.navigationContext;
    console.log(gotData.user);
    console.log(gotData.status);
}
exports.onNavigatingTo = onNavigatingTo;


function onLoginButtonTap(args) {
    const page = args.object.page;
    const bindingContext = page.bindingContext;
    const username = bindingContext.get(gotData.user);
    const password = bindingContext.get(gotData.status);
    closeCallback(username, password);
}
exports.onLoginButtonTap = onLoginButtonTap;
// << modal-view-js