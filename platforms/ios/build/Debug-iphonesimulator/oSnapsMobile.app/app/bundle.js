require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./views/generateSecret/generateSecret-page.css": "./views/generateSecret/generateSecret-page.css",
	"./views/generateSecret/generateSecret-page.js": "./views/generateSecret/generateSecret-page.js",
	"./views/generateSecret/generateSecret-page.xml": "./views/generateSecret/generateSecret-page.xml",
	"./views/list/list-page.css": "./views/list/list-page.css",
	"./views/list/list-page.js": "./views/list/list-page.js",
	"./views/list/list-page.xml": "./views/list/list-page.xml",
	"./views/login/login-page.css": "./views/login/login-page.css",
	"./views/login/login-page.js": "./views/login/login-page.js",
	"./views/login/login-page.xml": "./views/login/login-page.xml",
	"./views/retrieveSecret/retrieveSecret-page.css": "./views/retrieveSecret/retrieveSecret-page.css",
	"./views/retrieveSecret/retrieveSecret-page.js": "./views/retrieveSecret/retrieveSecret-page.js",
	"./views/retrieveSecret/retrieveSecret-page.xml": "./views/retrieveSecret/retrieveSecret-page.xml",
	"./views/shared/config.js": "./views/shared/config.js",
	"./views/shared/utils/hint-util.js": "./views/shared/utils/hint-util.js",
	"./views/shared/utils/status-bar-util.js": "./views/shared/utils/status-bar-util.js",
	"./views/shared/view-models/grocery-list-view-model.js": "./views/shared/view-models/grocery-list-view-model.js",
	"./views/shared/view-models/user-view-model.js": "./views/shared/view-models/user-view-model.js",
	"./views/success/success-page.css": "./views/success/success-page.css",
	"./views/success/success-page.js": "./views/success/success-page.js",
	"./views/success/success-page.xml": "./views/success/success-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Frame defaultPage=\"views/login/login-page\"></Frame>"; 
if (false ) {} 

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"height","value":"100px"},{"type":"declaration","property":"border-radius","value":"25%"},{"type":"declaration","property":"font-size","value":"22px"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"comment","comment":" background-image: url(\"~/images/openSuiteMobile.jpg\"); "}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"400"},{"type":"declaration","property":"padding","value":"10 16"}]},{"type":"rule","selectors":[".btn-green"],"declarations":[{"type":"declaration","property":"background-color","value":"#4cd136"}]},{"type":"rule","selectors":[".btn-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#3f3c56"}]}],"parsingErrors":[]}};; 
if (false ) {} 

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (false) {}
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (false) {}
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        let applicationModule = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
applicationModule.run({ moduleName: "app-root" });; 
if (false ) {} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"app.js","name":"nativescript-template-groceries","version":"3.0.0"};

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"comment","comment":" background-color: black;\n  color: white; "},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["#status"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"padding","value":"20px"}]},{"type":"rule","selectors":[".app-heading"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"font-family","value":"'AppleSDGothicNeo-Medium'"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"24px"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"height","value":"100px"},{"type":"declaration","property":"border-radius","value":"25%"},{"type":"declaration","property":"width","value":"90%"},{"type":"declaration","property":"font-size","value":"22px"}]},{"type":"rule","selectors":[".btn-green"],"declarations":[{"type":"declaration","property":"background-color","value":"#4cd136"}]},{"type":"rule","selectors":[".btn-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#3f3c56"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.js":
/***/ (function(module, exports, __webpack_require__) {

var page;
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");

var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

var user = new observableModule.fromObject({
    pin: "",
    showDetails: false,
    secret: ""
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};
var clipboard = __webpack_require__("../node_modules/nativescript-clipboard/clipboard.js");

const modalViewModule = "views/success/success-page";

function copyText(args){

    clipboard.setText(user.status).then(function() {
        page.getViewById('copyClipboard').text = "Copied Successfully!"
        console.log("OK, copied to the clipboard");
    })
}
exports.copyText = copyText;
function openModal(args) {

    const mainView = args.object;
    const option = {
        context: { username: "test_username", password: "test" },
        closeCallback: (username, password) => {
            // Receive data from the modal view. e.g. username & password
            alert(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true
    };
    frameModule.Frame.topmost().showModal(modalViewModule, option);
}
exports.openModal = openModal;


exports.signIn = function () {
    let message = page.getViewById('email').text
    let statusLabel = page.getViewById('status')

    fetch("https://theopensuite.com/api/snaps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            secret: message,
        })
    }).then((r) => r.json())
        .then((response) => {
            const result = response.json;
            user.status = response.url
            statusLabel.text = response.url
            user.showDetails = true
        }).then(() => {

        })

        .catch((e) => {
        });
};


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

}; 
if (false ) {} 

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSNap\" />\n    </Page.actionBar>\n    <ScrollView>\n    <FlexboxLayout>\n        <StackLayout class=\"form\">\n        <Image src=\"~/images/logo.png\" height=\"200\" width=\"200\" />\n        <Label class=\"app-heading\" text=\"Enter your message below, then tap Generate Secret\" textWrap=\"true\" visibility=\"{{ showDetails ? 'collapsed' : 'visible' }}\"/>\n            <Label class=\"app-heading btn-dark\" id=\"status\" text=\"{{ status }}\" textWrap=\"true\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\" />\n            <Button id=\"copyClipboard\" class=\"btn-dark\" text=\"copy to clipboard\" tap=\"copyText\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\"/>\n            <TextView id=\"email\" marginTop=\"15px\" borderColor=\"#DEDEDE\" backgroundColor=\"#f0f0f0\"\n                borderWidth=\"1\" height=\"200px\" hint=\"Enter your secret message here, then tap Generate Secret\"\n                returnKeyType=\"send\" class=\"input input-border\"></TextView>\n            <Button text=\"Generate Secret\" class=\"btn btn-primary btn-green\"\n                tap=\"signIn\" />\n                <Button text=\"Home\" tap=\"goHome\" class=\"btn-primary btn-dark\" />\n        </StackLayout>\n    </FlexboxLayout>\n    </ScrollView>\n    \n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./views/list/list-page.css":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if (false ) {} 

/***/ }),

/***/ "./views/list/list-page.js":
/***/ (function(module, exports, __webpack_require__) {

; 
if (false ) {} 

/***/ }),

/***/ "./views/list/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page>\n  <Label text=\"Hello world\" />\n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./views/login/login-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"comment","comment":" background-color: black;\n  color: white; "},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"height","value":"100px"},{"type":"declaration","property":"border-radius","value":"25%"},{"type":"declaration","property":"width","value":"90%"},{"type":"declaration","property":"font-size","value":"22px"}]},{"type":"rule","selectors":[".btn-green"],"declarations":[{"type":"declaration","property":"background-color","value":"#4cd136"}]},{"type":"rule","selectors":[".btn-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#3f3c56"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["#status"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background","value":"lime"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"padding","value":"20px"}]},{"type":"rule","selectors":[".app-heading"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"font-family","value":"'AppleSDGothicNeo-Medium'"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"24px"}]},{"type":"keyframes","name":"moveOffLeft","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"transform","value":"translateX(0, -1000%)"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"transform","value":"translateX(-1000%, 0)"}]}]},{"type":"keyframes","name":"moveInR","keyframes":[{"type":"keyframe","values":["0%"],"declarations":[{"type":"declaration","property":"-webkit-transform","value":"translate(1000%, 0)"},{"type":"declaration","property":"transform","value":"translate(1000%, 0)"}]},{"type":"keyframe","values":["100%"],"declarations":[{"type":"declaration","property":"-webkit-transform","value":"translate(0%, 0)"},{"type":"declaration","property":"transform","value":"translate(0%, 0)"}]}]},{"type":"rule","selectors":[".l"],"declarations":[{"type":"declaration","property":"animation-name","value":"moveOffLeft"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-iteration-count","value":"1"},{"type":"declaration","property":"animation-timing-function","value":"cubic-bezier(1, 1.1, 0, 1)"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"animation-delay","value":"0.5s"}]},{"type":"rule","selectors":[".r"],"declarations":[{"type":"declaration","property":"-webkit-animation-name","value":"moveInR"},{"type":"declaration","property":"animation-name","value":"moveInR"},{"type":"declaration","property":"-webkit-animation-duration","value":"1.5s"},{"type":"declaration","property":"animation-duration","value":"1.5s"},{"type":"declaration","property":"-webkit-animation-iteration-count","value":"1"},{"type":"declaration","property":"animation-iteration-count","value":"1"},{"type":"declaration","property":"-webkit-animation-timing-function","value":"cubic-bezier(1, 1.1, 0, 1.1)"},{"type":"declaration","property":"animation-timing-function","value":"cubic-bezier(1, 1.1, 0, 1.1)"},{"type":"declaration","property":"-webkit-animation-fill-mode","value":"forwards"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"},{"type":"declaration","property":"-webkit-animation-delay","value":"0.5s"},{"type":"declaration","property":"animation-delay","value":"0.5s"}]}],"parsingErrors":[]}};; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.js":
/***/ (function(module, exports, __webpack_require__) {

var page;
var email;
var dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");

var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

var user = new observableModule.fromObject({
    status: "",
    secret: "Enter Secret here",
    showDetails: false,
    moveLeft: false
});
var clipboard = __webpack_require__("../node_modules/nativescript-clipboard/clipboard.js");


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
    user.moveLeft = true
    user.showDetails = false
    frameModule.Frame.topmost().navigate(generatePage);
}  
exports.showRetrieveSecret = function(args) {
    user.showDetails = false
    frameModule.Frame.topmost().navigate(retrievePage);
}

; 
if (false ) {} 

/***/ }),

/***/ "./views/login/login-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSNap\" />\n    </Page.actionBar>\n    <FlexboxLayout>\n\n        <StackLayout class=\"form\">\n                        <Image class=\"r\" src=\"~/images/logo.png\" height=\"200\" width=\"200\" />\n\n            <Label class=\"app-heading\"\n                text=\"Choose an option below to get started\"\n                textWrap=\"true\"/>\n\n            <Button text=\"Generate Secret\" class=\"btn btn-primary btn-green\"\n                tap=\"showGenerateSecret\" />\n\n            <Button text=\"Retrieve Secret\" class=\"btn btn-primary btn-dark\"\n                tap=\"showRetrieveSecret\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"comment","comment":" background-color: black;\n  color: white; "},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"400"},{"type":"declaration","property":"padding","value":"10 16"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":[".app-heading"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"font-family","value":"'AppleSDGothicNeo-Medium'"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"font-size","value":"24px"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"},{"type":"declaration","property":"height","value":"100px"},{"type":"declaration","property":"border-radius","value":"25%"},{"type":"declaration","property":"width","value":"90%"},{"type":"declaration","property":"font-size","value":"22px"}]},{"type":"rule","selectors":[".btn-green"],"declarations":[{"type":"declaration","property":"background-color","value":"#4cd136"}]},{"type":"rule","selectors":[".btn-dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#3f3c56"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-radius","value":"30px"},{"type":"declaration","property":"padding","value":"50px"}]},{"type":"rule","selectors":["#pin"],"declarations":[{"type":"declaration","property":"width","value":"90%"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"border-radius","value":"50%"}]}],"parsingErrors":[]}};; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.js":
/***/ (function(module, exports, __webpack_require__) {

var page;
var email;
var dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");


var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

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

}; 
if (false ) {} 

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSnap\" />\n    </Page.actionBar>\n\n<ScrollView>\n    <FlexboxLayout>\n\n        <StackLayout class=\"form\">\n                <Image src=\"~/images/logo.png\" height=\"200\" width=\"200\" />\n\n            <Label class=\"app-heading\" text=\"Enter your code below to retrieve your secret message.\" \n                textWrap=\"true\" \n                textAlignment=\"center\" \n                visibility=\"{{ showDetails ? 'collapsed' : 'visible' }}\"\n                />\n            <TextView class=\"app-heading btn-dark\" id=\"message\" text=\"{{ secret }}\" textWrap=\"true\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\" />\n\n            <TextField id=\"pin\" marginTop=\"15px\" borderColor=\"#DEDEDE\" backgroundColor=\"#f0f0f0\"\n                borderWidth=\"1\" hint=\"Enter Pin\" text=\"{{ pin }}\" class=\"input input-border\"></TextField>\n\n            <Button text=\"Retreive Secret\" class=\"btn btn-primary btn-green\"\n                tap=\"retrieveSecret\" />\n                                <Button text=\"Home\" tap=\"goHome\" class=\"btn btn-primary btn-dark\" />\n\n        </StackLayout>\n        \n    </FlexboxLayout>\n    </ScrollView>\n</Page>"; 
if (false ) {} 

/***/ }),

/***/ "./views/shared/config.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  apiUrl: "https://baas.kinvey.com/",
  appKey: "kid_HyHoT_REf",
  appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ"
};
; 
if (false ) {} 

/***/ }),

/***/ "./views/shared/utils/hint-util.js":
/***/ (function(module, exports, __webpack_require__) {

; 
if (false ) {} 

/***/ }),

/***/ "./views/shared/utils/status-bar-util.js":
/***/ (function(module, exports, __webpack_require__) {

var application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
var platform = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var utils = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

exports.setStatusBarColors = function() {
  // Make the iOS status bar transparent with white text.
  // See https://github.com/burkeholland/nativescript-statusbar/issues/2
  // for details on the technique used.
  if (application.ios) {
    var AppDelegate = UIResponder.extend({
      applicationDidFinishLaunchingWithOptions: function() {
        UIApplication.sharedApplication.statusBarStyle = UIStatusBarStyle.LightContent;
        return true;
      }
    }, {
        name: "AppDelegate",
        protocols: [UIApplicationDelegate]
      });
    application.ios.delegate = AppDelegate;
  }

  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android) {
    application.android.onActivityStarted = function() {
      if (application.android && platform.device.sdkVersion >= "21") {
        var View = android.view.View;
        var window = application.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_LAYOUT_STABLE
          | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    }
  }
}
; 
if (false ) {} 

/***/ }),

/***/ "./views/shared/view-models/grocery-list-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("../node_modules/@nativescript/core/fetch/fetch.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;

function GroceryListViewModel(items) {
  var baseUrl = config.apiUrl + "appdata/" + config.appKey + "/Groceries";
  var viewModel = new ObservableArray(items);



  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Kinvey " + config.token
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = GroceryListViewModel;; 
if (false ) {} 

/***/ }),

/***/ "./views/shared/view-models/user-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("../node_modules/@nativescript/core/fetch/fetch.js");
var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

function User(info) {
  info = info || {};

  // You can add properties to observables on creation
  var viewModel = new observableModule.fromObject({
    email: info.email || "",
    password: info.password || ""
  });

  viewModel.login = function () {
    return fetchModule.fetch("https://theopensuite.com/api/snaps", {
      method: "POST",
      body: JSON.stringify({
        secret: viewModel.get("secret"),
      }),
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function (response) {
        console.log(response.url)
        return response;
      })

  };
  viewModel.register = function () {
    if (!viewModel.get("email") || !viewModel.get("password")) {
      return Promise.reject(new Error("Please provide both an email address and password."));
    }

    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey, {
      method: "POST",
      body: JSON.stringify({
        username: viewModel.get("email"),
        email: viewModel.get("email"),
        password: viewModel.get("password")
      }),
      headers: getCommonHeaders()
    }).then(handleErrors);
  };

  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": config.appUserHeader
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = User;
; 
if (false ) {} 

/***/ }),

/***/ "./views/success/success-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/background.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"}]}],"parsingErrors":[]}};; 
if (false ) {} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/success/success-page.js":
/***/ (function(module, exports, __webpack_require__) {

var page;
var email;
var dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");

var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

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
// << modal-view-js; 
if (false ) {} 

/***/ }),

/***/ "./views/success/success-page.xml":
/***/ (function(module, exports, __webpack_require__) {


module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"Secret Message Code\" />\n    </Page.actionBar>\n    <FlexboxLayout>\n        <StackLayout class=\"form\">\n            <!-- <Image src=\"~/images/logo.png\" /> -->\n\n            <Label text=\"{{ user.status }}\" />\n            <TextView id=\"email\" style=\"margin-top: 15px\"\n                borderColor=\"#DEDEDE\" borderWidth=\"1\" height=\"200px\"\n                hint=\"Enter Note\" returnKeyType=\"send\"\n                class=\"input input-border\"></TextView>\n            <Button text=\"Generate new secret message\"\n                tap=\"onLoginButtonTap\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>"; 
if (false ) {} 

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvdXRpbHMvaGludC11dGlsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7O0FDNUNBLDBFO0FBQ0EsSUFBSSxLQUEwRixHQUFHLEU7Ozs7Ozs7QUNGakcsa0JBQWtCLGtDQUFrQyxVQUFVLHFEQUFxRCx3REFBd0QsRUFBRSxFQUFFLDREQUE0RCxxRUFBcUUsRUFBRSwwREFBMEQsRUFBRSwyREFBMkQsRUFBRSx5REFBeUQsRUFBRSw4REFBOEQsRUFBRSwyREFBMkQsRUFBRSxFQUFFLDZEQUE2RCxtRUFBbUUsRUFBRSwrREFBK0Qs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QUNBLEM7QUFDQSxJQUFJLEtBQXlILEdBQUcsRTs7Ozs7OztBQ2hFaEkseUhBQTJFLG1CQUFPLENBQUMsNERBQTRDO0FBQy9ILDBFQUEwRSxtQkFBTyxDQUFDLDREQUE0QyxHQUFHLGtCQUFrQixrQ0FBa0MsVUFBVSwyRUFBMkUsRUFBRSx5REFBeUQsbUVBQW1FLEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsK0RBQStELEVBQUUsRUFBRSw2REFBNkQsbUVBQW1FLEVBQUUsK0RBQStELEVBQUUsa0VBQWtFLEVBQUUsOEZBQThGLEVBQUUsRUFBRSwyREFBMkQsc0RBQXNELEVBQUUsMERBQTBELEVBQUUscUVBQXFFLEVBQUUsRUFBRSxxREFBcUQsNkRBQTZELEVBQUUsc0RBQXNELEVBQUUsRUFBRSxrRUFBa0UsNkRBQTZELEVBQUUsRUFBRSw0REFBNEQscUVBQXFFLEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQsc0VBQXNFLEVBQUUsd0RBQXdELEVBQUUsd0I7QUFDbDVELElBQUksS0FBNEcsR0FBRyxFOzs7Ozs7OztBQ0ZuSDtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMsMERBQTZCO0FBQ3pELGtCQUFrQixtQkFBTyxDQUFDLHNEQUEyQjs7QUFFckQsdUJBQXVCLG1CQUFPLENBQUMsa0VBQWtDOztBQUVqRTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0I7QUFDQSxJQUFJLEtBQTJHLEdBQUcsRTs7Ozs7Ozs7QUNqQ2xILCtVQUErVSxlQUFlLHNhO0FBQzlWLElBQUksS0FBNEcsR0FBRyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCI6IFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qc1wiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIjogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCI6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCI6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmNzc1wiLFxuXHRcIi4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuanNcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS54bWxcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwidmlld3MvbG9naW4vbG9naW4tcGFnZVxcXCI+PC9GcmFtZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImdyZWVuXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNDQjFEMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMjUlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZsZXhib3hMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcImNvdmVyXCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL29wZW5TdWl0ZU1vYmlsZS5qcGdcXFwiKTsgXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZ3JlZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRjZDEzNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2YzYzU2XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbk1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuYXBwbGljYXRpb25Nb2R1bGUucnVuKHsgbW9kdWxlTmFtZTogXCJhcHAtcm9vdFwiIH0pOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTsgXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFsaWduLWl0ZW1zXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI3MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiLFwiVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMGYwZjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNDNEFGQjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMGYwZjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjc3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMDBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImRpc3BsYXlcIixcInZhbHVlXCI6XCJmbGV4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjIwcHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYXBwLWhlYWRpbmdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInQXBwbGVTREdvdGhpY05lby1NZWRpdW0nXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0cHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0NCMUQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIyNSVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjkwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIycHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWdyZWVuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM0Y2QxMzZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNmM2M1NlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBwYWdlO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHBpbjogXCJcIixcbiAgICBzaG93RGV0YWlsczogZmFsc2UsXG4gICAgc2VjcmV0OiBcIlwiXG59KTtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbn07XG52YXIgY2xpcGJvYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIik7XG5cbmNvbnN0IG1vZGFsVmlld01vZHVsZSA9IFwidmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2VcIjtcblxuZnVuY3Rpb24gY29weVRleHQoYXJncyl7XG5cbiAgICBjbGlwYm9hcmQuc2V0VGV4dCh1c2VyLnN0YXR1cykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5nZXRWaWV3QnlJZCgnY29weUNsaXBib2FyZCcpLnRleHQgPSBcIkNvcGllZCBTdWNjZXNzZnVsbHkhXCJcbiAgICAgICAgY29uc29sZS5sb2coXCJPSywgY29waWVkIHRvIHRoZSBjbGlwYm9hcmRcIik7XG4gICAgfSlcbn1cbmV4cG9ydHMuY29weVRleHQgPSBjb3B5VGV4dDtcbmZ1bmN0aW9uIG9wZW5Nb2RhbChhcmdzKSB7XG5cbiAgICBjb25zdCBtYWluVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgY29udGV4dDogeyB1c2VybmFtZTogXCJ0ZXN0X3VzZXJuYW1lXCIsIHBhc3N3b3JkOiBcInRlc3RcIiB9LFxuICAgICAgICBjbG9zZUNhbGxiYWNrOiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgICAgICAgICAvLyBSZWNlaXZlIGRhdGEgZnJvbSB0aGUgbW9kYWwgdmlldy4gZS5nLiB1c2VybmFtZSAmIHBhc3N3b3JkXG4gICAgICAgICAgICBhbGVydChgVXNlcm5hbWU6ICR7dXNlcm5hbWV9IDogUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxzY3JlZW46IHRydWVcbiAgICB9O1xuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5zaG93TW9kYWwobW9kYWxWaWV3TW9kdWxlLCBvcHRpb24pO1xufVxuZXhwb3J0cy5vcGVuTW9kYWwgPSBvcGVuTW9kYWw7XG5cblxuZXhwb3J0cy5zaWduSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1lc3NhZ2UgPSBwYWdlLmdldFZpZXdCeUlkKCdlbWFpbCcpLnRleHRcbiAgICBsZXQgc3RhdHVzTGFiZWwgPSBwYWdlLmdldFZpZXdCeUlkKCdzdGF0dXMnKVxuXG4gICAgZmV0Y2goXCJodHRwczovL3RoZW9wZW5zdWl0ZS5jb20vYXBpL3NuYXBzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzZWNyZXQ6IG1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuanNvbjtcbiAgICAgICAgICAgIHVzZXIuc3RhdHVzID0gcmVzcG9uc2UudXJsXG4gICAgICAgICAgICBzdGF0dXNMYWJlbC50ZXh0ID0gcmVzcG9uc2UudXJsXG4gICAgICAgICAgICB1c2VyLnNob3dEZXRhaWxzID0gdHJ1ZVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB9KTtcbn07XG5cblxuY29uc3QgaG9tZVBhZ2UgPSB7XG4gICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9sb2dpbi9sb2dpbi1wYWdlXCIsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgLy8gU2V0IHVwIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiBwYWdlIG5hdmlnYXRpb24uXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImN1cmxcIixcbiAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICB9fTtcblxuZXhwb3J0cy5nb0hvbWUgPSBmdW5jdGlvbigpIHtcbiAgICB1c2VyLnNob3dEZXRhaWxzID0gZmFsc2VcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoaG9tZVBhZ2UpXG5cbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIm9TTmFwXFxcIiAvPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiIGhlaWdodD1cXFwiMjAwXFxcIiB3aWR0aD1cXFwiMjAwXFxcIiAvPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJhcHAtaGVhZGluZ1xcXCIgdGV4dD1cXFwiRW50ZXIgeW91ciBtZXNzYWdlIGJlbG93LCB0aGVuIHRhcCBHZW5lcmF0ZSBTZWNyZXRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnIH19XFxcIi8+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJhcHAtaGVhZGluZyBidG4tZGFya1xcXCIgaWQ9XFxcInN0YXR1c1xcXCIgdGV4dD1cXFwie3sgc3RhdHVzIH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdmlzaWJpbGl0eT1cXFwie3sgc2hvd0RldGFpbHMgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIGlkPVxcXCJjb3B5Q2xpcGJvYXJkXFxcIiBjbGFzcz1cXFwiYnRuLWRhcmtcXFwiIHRleHQ9XFxcImNvcHkgdG8gY2xpcGJvYXJkXFxcIiB0YXA9XFxcImNvcHlUZXh0XFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIi8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGlkPVxcXCJlbWFpbFxcXCIgbWFyZ2luVG9wPVxcXCIxNXB4XFxcIiBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZjBmMGYwXFxcIlxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCIgaGludD1cXFwiRW50ZXIgeW91ciBzZWNyZXQgbWVzc2FnZSBoZXJlLCB0aGVuIHRhcCBHZW5lcmF0ZSBTZWNyZXRcXFwiXFxuICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XFxcInNlbmRcXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiPjwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJHZW5lcmF0ZSBTZWNyZXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWdyZWVuXFxcIlxcbiAgICAgICAgICAgICAgICB0YXA9XFxcInNpZ25JblxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJIb21lXFxcIiB0YXA9XFxcImdvSG9tZVxcXCIgY2xhc3M9XFxcImJ0bi1wcmltYXJ5IGJ0bi1kYXJrXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuICAgIFxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxuICA8TGFiZWwgdGV4dD1cXFwiSGVsbG8gd29ybGRcXFwiIC8+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTsgXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFsaWduLWl0ZW1zXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI3MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiLFwiVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMGYwZjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0NCMUQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxMDBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIyNSVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjkwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIycHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWdyZWVuXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM0Y2QxMzZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLWRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzNmM2M1NlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNzdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCJsaW1lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJkaXNwbGF5XCIsXCJ2YWx1ZVwiOlwiZmxleFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFwcC1oZWFkaW5nXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMDBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0FwcGxlU0RHb3RoaWNOZW8tTWVkaXVtJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNHB4XCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVzXCIsXCJuYW1lXCI6XCJtb3ZlT2ZmTGVmdFwiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIwJVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZVgoMCwgLTEwMDAlKVwifV19LHtcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCIxMDAlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidHJhbnNsYXRlWCgtMTAwMCUsIDApXCJ9XX1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcIm1vdmVJblJcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSgxMDAwJSwgMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUoMTAwMCUsIDApXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcIjEwMCVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInRyYW5zbGF0ZSgwJSwgMClcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ0cmFuc2xhdGUoMCUsIDApXCJ9XX1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1uYW1lXCIsXCJ2YWx1ZVwiOlwibW92ZU9mZkxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxc1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvblwiLFwidmFsdWVcIjpcImN1YmljLWJlemllcigxLCAxLjEsIDAsIDEpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWZpbGwtbW9kZVwiLFwidmFsdWVcIjpcImZvcndhcmRzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWRlbGF5XCIsXCJ2YWx1ZVwiOlwiMC41c1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLXdlYmtpdC1hbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcIm1vdmVJblJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcIm1vdmVJblJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvblwiLFwidmFsdWVcIjpcIjEuNXNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCIxLjVzXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1pdGVyYXRpb24tY291bnRcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uXCIsXCJ2YWx1ZVwiOlwiY3ViaWMtYmV6aWVyKDEsIDEuMSwgMCwgMS4xKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb25cIixcInZhbHVlXCI6XCJjdWJpYy1iZXppZXIoMSwgMS4xLCAwLCAxLjEpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlXCIsXCJ2YWx1ZVwiOlwiZm9yd2FyZHNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZmlsbC1tb2RlXCIsXCJ2YWx1ZVwiOlwiZm9yd2FyZHNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItd2Via2l0LWFuaW1hdGlvbi1kZWxheVwiLFwidmFsdWVcIjpcIjAuNXNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZGVsYXlcIixcInZhbHVlXCI6XCIwLjVzXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBzdGF0dXM6IFwiXCIsXG4gICAgc2VjcmV0OiBcIkVudGVyIFNlY3JldCBoZXJlXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgIG1vdmVMZWZ0OiBmYWxzZVxufSk7XG52YXIgY2xpcGJvYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIik7XG5cblxuZnVuY3Rpb24gY29weVRleHQoYXJncyl7XG5cbiAgICBjbGlwYm9hcmQuc2V0VGV4dCh1c2VyLnN0YXR1cykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPSywgY29waWVkIHRvIHRoZSBjbGlwYm9hcmRcIik7XG4gICAgfSlcbn1cbmV4cG9ydHMuY29weVRleHQgPSBjb3B5VGV4dDtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbiAgICB1c2VyLnNob3dEZXRhaWxzID0gZmFsc2U7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2UgPSB7XG4gICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlXCIsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgfX07XG5cbiAgICBjb25zdCByZXRyaWV2ZVBhZ2UgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZVwiLFxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgfX07XG5cbmV4cG9ydHMuc2hvd0dlbmVyYXRlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHVzZXIubW92ZUxlZnQgPSB0cnVlXG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlXG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKGdlbmVyYXRlUGFnZSk7XG59ICBcbmV4cG9ydHMuc2hvd1JldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZVxuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZShyZXRyaWV2ZVBhZ2UpO1xufVxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIm9TTmFwXFxcIiAvPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcbiAgICA8RmxleGJveExheW91dD5cXG5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzPVxcXCJyXFxcIiBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImFwcC1oZWFkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJDaG9vc2UgYW4gb3B0aW9uIGJlbG93IHRvIGdldCBzdGFydGVkXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIvPlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR2VuZXJhdGUgU2VjcmV0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJzaG93R2VuZXJhdGVTZWNyZXRcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJSZXRyaWV2ZSBTZWNyZXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWRhcmtcXFwiXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwic2hvd1JldHJpZXZlU2VjcmV0XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlOyBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGbGV4Ym94TGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCJjb3ZlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI0MDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTAgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjcwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hcHAtaGVhZGluZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIidBcHBsZVNER290aGljTmVvLU1lZGl1bSdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQ0IxRDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjI1JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiOTAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjJweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZ3JlZW5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzRjZDEzNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjM2YzYzU2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIzMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjUwcHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjcGluXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI5MCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjUwJVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIHBhZ2U7XG52YXIgZW1haWw7XG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcblxuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBwaW46IFwiXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgIHNlY3JldDogXCJcIlxufSk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXI7XG59O1xuXG5cbmV4cG9ydHMucmV0cmlldmVTZWNyZXQgPSBmdW5jdGlvbigpe1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vdGhlb3BlbnN1aXRlLmNvbS9hcGkvc25hcHMvJHt1c2VyLnBpbn1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdXNlci5zZWNyZXQgPSByZXNwb25zZS5zZWNyZXRcbiAgICAgICAgICAgIHVzZXIuc2hvd0RldGFpbHMgPSB0cnVlXG4gICAgICAgICAgICB1c2VyLnBpbiA9IFwiXCJcblxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB9KTtcbn1cbmNvbnN0IGhvbWVQYWdlID0ge1xuICAgIG1vZHVsZU5hbWU6IFwidmlld3MvbG9naW4vbG9naW4tcGFnZVwiLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgfX07XG5cbmV4cG9ydHMuZ29Ib21lID0gZnVuY3Rpb24oKSB7XG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlXG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKGhvbWVQYWdlKVxuXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbG9hZGVkPVxcXCJsb2FkZWRcXFwiPlxcbiAgICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJvU25hcFxcXCIgLz5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG5cXG48U2Nyb2xsVmlldz5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9sb2dvLnBuZ1xcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJhcHAtaGVhZGluZ1xcXCIgdGV4dD1cXFwiRW50ZXIgeW91ciBjb2RlIGJlbG93IHRvIHJldHJpZXZlIHlvdXIgc2VjcmV0IG1lc3NhZ2UuXFxcIiBcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiIFxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxUZXh0VmlldyBjbGFzcz1cXFwiYXBwLWhlYWRpbmcgYnRuLWRhcmtcXFwiIGlkPVxcXCJtZXNzYWdlXFxcIiB0ZXh0PVxcXCJ7eyBzZWNyZXQgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcblxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XFxcInBpblxcXCIgbWFyZ2luVG9wPVxcXCIxNXB4XFxcIiBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZjBmMGYwXFxcIlxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCIgaGludD1cXFwiRW50ZXIgUGluXFxcIiB0ZXh0PVxcXCJ7eyBwaW4gfX1cXFwiIGNsYXNzPVxcXCJpbnB1dCBpbnB1dC1ib3JkZXJcXFwiPjwvVGV4dEZpZWxkPlxcblxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiUmV0cmVpdmUgU2VjcmV0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ncmVlblxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJyZXRyaWV2ZVNlY3JldFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSG9tZVxcXCIgdGFwPVxcXCJnb0hvbWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLWRhcmtcXFwiIC8+XFxuXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgIDwvRmxleGJveExheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlVcmw6IFwiaHR0cHM6Ly9iYWFzLmtpbnZleS5jb20vXCIsXG4gIGFwcEtleTogXCJraWRfSHlIb1RfUkVmXCIsXG4gIGFwcFVzZXJIZWFkZXI6IFwiQmFzaWMgYTJsa1gwaDVTRzlVWDFKRlpqbzFNVGt4TURKbFpXRmhNelEwTXpNeU9ERmpOMk15T0RNM01HUTVPVEl6TVFcIlxufTtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvY29uZmlnLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL2NvbmZpZy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL2hpbnQtdXRpbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xuXG5leHBvcnRzLnNldFN0YXR1c0JhckNvbG9ycyA9IGZ1bmN0aW9uKCkge1xuICAvLyBNYWtlIHRoZSBpT1Mgc3RhdHVzIGJhciB0cmFuc3BhcmVudCB3aXRoIHdoaXRlIHRleHQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnVya2Vob2xsYW5kL25hdGl2ZXNjcmlwdC1zdGF0dXNiYXIvaXNzdWVzLzJcbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxuICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgdmFyIEFwcERlbGVnYXRlID0gVUlSZXNwb25kZXIuZXh0ZW5kKHtcbiAgICAgIGFwcGxpY2F0aW9uRGlkRmluaXNoTGF1bmNoaW5nV2l0aE9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLnN0YXR1c0JhclN0eWxlID0gVUlTdGF0dXNCYXJTdHlsZS5MaWdodENvbnRlbnQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJBcHBEZWxlZ2F0ZVwiLFxuICAgICAgICBwcm90b2NvbHM6IFtVSUFwcGxpY2F0aW9uRGVsZWdhdGVdXG4gICAgICB9KTtcbiAgICBhcHBsaWNhdGlvbi5pb3MuZGVsZWdhdGUgPSBBcHBEZWxlZ2F0ZTtcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIEFuZHJvaWQgc3RhdHVzIGJhciB0cmFuc3BhcmVudC5cbiAgLy8gU2VlIGh0dHA6Ly9icmFkbWFydGluLm5ldC8yMDE2LzAzLzEwL2Z1bGxzY3JlZW4tYW5kLW5hdmlnYXRpb24tYmFyLWNvbG9yLWluLWEtbmF0aXZlc2NyaXB0LWFuZHJvaWQtYXBwL1xuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbkFjdGl2aXR5U3RhcnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQgJiYgcGxhdGZvcm0uZGV2aWNlLnNka1ZlcnNpb24gPj0gXCIyMVwiKSB7XG4gICAgICAgIHZhciBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgIHZhciB3aW5kb3cgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG5cbiAgICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvdXRpbHMvc3RhdHVzLWJhci11dGlsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL3N0YXR1cy1iYXItdXRpbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9jb25maWdcIik7XG52YXIgZmV0Y2hNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiKTtcbnZhciBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5mdW5jdGlvbiBHcm9jZXJ5TGlzdFZpZXdNb2RlbChpdGVtcykge1xuICB2YXIgYmFzZVVybCA9IGNvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBjb25maWcuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XG4gIHZhciB2aWV3TW9kZWwgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGl0ZW1zKTtcblxuXG5cbiAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgcmV0dXJuIHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkF1dGhvcml6YXRpb25cIjogXCJLaW52ZXkgXCIgKyBjb25maWcudG9rZW5cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb2NlcnlMaXN0Vmlld01vZGVsOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGNvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvY29uZmlnXCIpO1xudmFyIGZldGNoTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmV0Y2hcIik7XG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxuZnVuY3Rpb24gVXNlcihpbmZvKSB7XG4gIGluZm8gPSBpbmZvIHx8IHt9O1xuXG4gIC8vIFlvdSBjYW4gYWRkIHByb3BlcnRpZXMgdG8gb2JzZXJ2YWJsZXMgb24gY3JlYXRpb25cbiAgdmFyIHZpZXdNb2RlbCA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIGVtYWlsOiBpbmZvLmVtYWlsIHx8IFwiXCIsXG4gICAgcGFzc3dvcmQ6IGluZm8ucGFzc3dvcmQgfHwgXCJcIlxuICB9KTtcblxuICB2aWV3TW9kZWwubG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZldGNoTW9kdWxlLmZldGNoKFwiaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzZWNyZXQ6IHZpZXdNb2RlbC5nZXQoXCJzZWNyZXRcIiksXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVFcnJvcnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UudXJsKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuXG4gIH07XG4gIHZpZXdNb2RlbC5yZWdpc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXZpZXdNb2RlbC5nZXQoXCJlbWFpbFwiKSB8fCAhdmlld01vZGVsLmdldChcInBhc3N3b3JkXCIpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIikpO1xuICAgIH1cblxuICAgIHJldHVybiBmZXRjaE1vZHVsZS5mZXRjaChjb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgY29uZmlnLmFwcEtleSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHZpZXdNb2RlbC5nZXQoXCJlbWFpbFwiKSxcbiAgICAgICAgZW1haWw6IHZpZXdNb2RlbC5nZXQoXCJlbWFpbFwiKSxcbiAgICAgICAgcGFzc3dvcmQ6IHZpZXdNb2RlbC5nZXQoXCJwYXNzd29yZFwiKVxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKClcbiAgICB9KS50aGVuKGhhbmRsZUVycm9ycyk7XG4gIH07XG5cbiAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgcmV0dXJuIHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkF1dGhvcml6YXRpb25cIjogY29uZmlnLmFwcFVzZXJIZWFkZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGbGV4Ym94TGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCJjb3ZlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMzAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEwIDE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMGYwZjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjcwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0NCMUQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNDNEFGQjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHN0YXR1czogXCJFbnRlciB5b3VyIHNlY3JldC5cIixcbiAgICBzZWNyZXQ6IFwiRW50ZXIgU2VjcmV0IGhlcmVcIlxufSk7XG4vLyA+PiBtb2RhbC12aWV3LWpzXG5sZXQgY2xvc2VDYWxsYmFjaztcblxuXG5mdW5jdGlvbiBvblNob3duTW9kYWxseShhcmdzKSB7XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuICAgIHZhciBnb3REYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDtcbiAgICBjb25zb2xlLmxvZyhnb3REYXRhLnVzZXIpO1xuICAgIGNvbnNvbGUubG9nKGdvdERhdGEuc3RhdHVzKTtcbn1cbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcblxuXG5mdW5jdGlvbiBvbkxvZ2luQnV0dG9uVGFwKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCBiaW5kaW5nQ29udGV4dCA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBiaW5kaW5nQ29udGV4dC5nZXQoZ290RGF0YS51c2VyKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IGJpbmRpbmdDb250ZXh0LmdldChnb3REYXRhLnN0YXR1cyk7XG4gICAgY2xvc2VDYWxsYmFjayh1c2VybmFtZSwgcGFzc3dvcmQpO1xufVxuZXhwb3J0cy5vbkxvZ2luQnV0dG9uVGFwID0gb25Mb2dpbkJ1dHRvblRhcDtcbi8vIDw8IG1vZGFsLXZpZXctanM7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIGxvYWRlZD1cXFwibG9hZGVkXFxcIj5cXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU2VjcmV0IE1lc3NhZ2UgQ29kZVxcXCIgLz5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiIC8+IC0tPlxcblxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB1c2VyLnN0YXR1cyB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8VGV4dFZpZXcgaWQ9XFxcImVtYWlsXFxcIiBzdHlsZT1cXFwibWFyZ2luLXRvcDogMTVweFxcXCJcXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XFxcIiNERURFREVcXFwiIGJvcmRlcldpZHRoPVxcXCIxXFxcIiBoZWlnaHQ9XFxcIjIwMHB4XFxcIlxcbiAgICAgICAgICAgICAgICBoaW50PVxcXCJFbnRlciBOb3RlXFxcIiByZXR1cm5LZXlUeXBlPVxcXCJzZW5kXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRWaWV3PlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR2VuZXJhdGUgbmV3IHNlY3JldCBtZXNzYWdlXFxcIlxcbiAgICAgICAgICAgICAgICB0YXA9XFxcIm9uTG9naW5CdXR0b25UYXBcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9