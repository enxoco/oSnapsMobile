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

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"views/login/login-page\"></Frame>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        let applicationModule = __webpack_require__("tns-core-modules/application");
applicationModule.run({ moduleName: "app-root" });; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"space-between"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/openSuiteMobile.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["#status"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background","value":"lime"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"padding","value":"20px"}]},{"type":"rule","selectors":[".fixed-bottom"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"-0px"}]},{"type":"rule","selectors":[".form"],"declarations":[{"type":"declaration","property":"margin-top","value":"-200px"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/generateSecret/generateSecret-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var page;
var frameModule = __webpack_require__("tns-core-modules/ui/frame");

var observableModule = __webpack_require__("tns-core-modules/data/observable");

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/generateSecret/generateSecret-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/generateSecret/generateSecret-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSNap\" />\n    </Page.actionBar>\n    <FlexboxLayout>\n        <StackLayout class=\"form\">\n            <Label id=\"status\" text=\"{{ status }}\" textWrap=\"true\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\" />\n            <Button id=\"copyClipboard\" text=\"copy to clipboard\" tap=\"copyText\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\"/>\n            <TextView id=\"email\" marginTop=\"15px\" borderColor=\"#DEDEDE\" backgroundColor=\"#f0f0f0\"\n                borderWidth=\"1\" height=\"200px\" hint=\"Enter Note\"\n                returnKeyType=\"send\" class=\"input input-border\"></TextView>\n            <Button text=\"Generate Secret\" class=\"btn btn-primary\"\n                tap=\"signIn\" />\n                <Button text=\"Home\" tap=\"goHome\" class=\"fixed-bottom\" />\n        </StackLayout>\n    </FlexboxLayout>\n    \n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/generateSecret/generateSecret-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/list/list-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/list/list-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page>\n  <Label text=\"Hello world\" />\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/list/list-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/openSuiteMobile.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["#status"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background","value":"lime"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"padding","value":"20px"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/login/login-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var page;
var email;
var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");

var observableModule = __webpack_require__("tns-core-modules/data/observable");

var user = new observableModule.fromObject({
    status: "",
    secret: "Enter Secret here",
    showDetails: false
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
    user.showDetails = false
    frameModule.Frame.topmost().navigate(generatePage);
}  
exports.showRetrieveSecret = function(args) {
    user.showDetails = false
    frameModule.Frame.topmost().navigate(retrievePage);
}

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/login/login-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSNap\" />\n    </Page.actionBar>\n\n\n    <FlexboxLayout>\n\n        <StackLayout class=\"form\">\n            <Label class=\"app-heading\"\n                text=\"Retrieve A self destructing message, or create a new one\"\n                textWrap=\"true\"/>\n\n            <Button text=\"Generate Secret\" class=\"btn btn-primary\"\n                tap=\"showGenerateSecret\" />\n\n            <Button text=\"Retrieve Secret\" class=\"btn btn-primary\"\n                tap=\"showRetrieveSecret\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/login/login-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"comment","comment":" background-color: black;\n  color: white; "},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/openSuiteMobile.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["#status"],"declarations":[{"type":"declaration","property":"padding-bottom","value":"100px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"background","value":"lime"},{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"display","value":"flex"},{"type":"declaration","property":"padding","value":"20px"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/retrieveSecret/retrieveSecret-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/retrieveSecret/retrieveSecret-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var page;
var email;
var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");


var observableModule = __webpack_require__("tns-core-modules/data/observable");

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/retrieveSecret/retrieveSecret-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/retrieveSecret/retrieveSecret-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/retrieveSecret/retrieveSecret-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSnap\" />\n    </Page.actionBar>\n\n\n    <FlexboxLayout>\n\n        <StackLayout class=\"form\">\n            <Label text=\"Enter the code in the box below to retrieve your secret message.  Please note that once this message is retrieved once it is deleted forever!\" textWrap=\"true\" />\n\n            <TextField id=\"pin\" marginTop=\"15px\" borderColor=\"#DEDEDE\" backgroundColor=\"#f0f0f0\"\n                borderWidth=\"1\" hint=\"Enter Pin\" text=\"{{ pin }}\" class=\"input input-border\"></TextField>\n                            <TextView id=\"message\" text=\"{{ secret }}\" textWrap=\"true\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\" />\n\n            <Button text=\"Retreive Secret\" class=\"btn btn-primary\"\n                tap=\"retrieveSecret\" />\n                                <Button text=\"Home\" tap=\"goHome\" class=\"fixed-bottom\" />\n\n        </StackLayout>\n        \n    </FlexboxLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/retrieveSecret/retrieveSecret-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/retrieveSecret/retrieveSecret-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/config.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {
  apiUrl: "https://baas.kinvey.com/",
  appKey: "kid_HyHoT_REf",
  appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ"
};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/config.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/config.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/hint-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/hint-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/hint-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/status-bar-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var application = __webpack_require__("tns-core-modules/application");
var platform = __webpack_require__("tns-core-modules/platform");
var utils = __webpack_require__("tns-core-modules/utils/utils");

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/status-bar-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/status-bar-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/grocery-list-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("tns-core-modules/fetch");
var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/grocery-list-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/grocery-list-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/user-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("tns-core-modules/fetch");
var observableModule = __webpack_require__("tns-core-modules/data/observable");

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/user-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/user-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/success/success-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"align-items","value":"center"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/background.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/success/success-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/success/success-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/success/success-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var page;
var email;
var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");

var observableModule = __webpack_require__("tns-core-modules/data/observable");

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
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/success/success-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/success/success-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/success/success-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"Secret Message Code\" />\n    </Page.actionBar>\n    <FlexboxLayout>\n        <StackLayout class=\"form\">\n            <!-- <Image src=\"~/images/logo.png\" /> -->\n\n            <Label text=\"{{ user.status }}\" />\n            <TextView id=\"email\" style=\"margin-top: 15px\"\n                borderColor=\"#DEDEDE\" borderWidth=\"1\" height=\"200px\"\n                hint=\"Enter Note\" returnKeyType=\"send\"\n                class=\"input input-border\"></TextView>\n            <Button text=\"Generate new secret message\"\n                tap=\"onLoginButtonTap\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/success/success-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/success/success-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/fetch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/fetch");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvdXRpbHMvaGludC11dGlsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuY3NzIiwid2VicGFjazovLy8uL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMt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dXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCI6IFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qc1wiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIjogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCI6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCI6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLnhtbFwiOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmNzc1wiLFxuXHRcIi4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuanNcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS54bWxcIjogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwidmlld3MvbG9naW4vbG9naW4tcGFnZVxcXCI+PC9GcmFtZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAtcm9vdC54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9hcHAtcm9vdC54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRlc3RcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImdyZWVuXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbk1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuYXBwbGljYXRpb25Nb2R1bGUucnVuKHsgbW9kdWxlTmFtZTogXCJhcHAtcm9vdFwiIH0pOzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZsZXhib3hMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcInNwYWNlLWJldHdlZW5cIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCJjb3ZlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcIn4vaW1hZ2VzL29wZW5TdWl0ZU1vYmlsZS5qcGdcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIzMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTAgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjcwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQ0IxRDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNzdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCJsaW1lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJkaXNwbGF5XCIsXCJ2YWx1ZVwiOlwiZmxleFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZpeGVkLWJvdHRvbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCItMHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvcm1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiLTIwMHB4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgcGFnZTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBwaW46IFwiXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgIHNlY3JldDogXCJcIlxufSk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXI7XG59O1xudmFyIGNsaXBib2FyZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCIpO1xuXG5jb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcInZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlXCI7XG5cbmZ1bmN0aW9uIGNvcHlUZXh0KGFyZ3Mpe1xuXG4gICAgY2xpcGJvYXJkLnNldFRleHQodXNlci5zdGF0dXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT0ssIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkXCIpO1xuICAgIH0pXG59XG5leHBvcnRzLmNvcHlUZXh0ID0gY29weVRleHQ7XG5mdW5jdGlvbiBvcGVuTW9kYWwoYXJncykge1xuXG4gICAgY29uc3QgbWFpblZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIGNvbnRleHQ6IHsgdXNlcm5hbWU6IFwidGVzdF91c2VybmFtZVwiLCBwYXNzd29yZDogXCJ0ZXN0XCIgfSxcbiAgICAgICAgY2xvc2VDYWxsYmFjazogKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVjZWl2ZSBkYXRhIGZyb20gdGhlIG1vZGFsIHZpZXcuIGUuZy4gdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAgICAgICAgYWxlcnQoYFVzZXJuYW1lOiAke3VzZXJuYW1lfSA6IFBhc3N3b3JkOiAke3Bhc3N3b3JkfWApO1xuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgfTtcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuc2hvd01vZGFsKG1vZGFsVmlld01vZHVsZSwgb3B0aW9uKTtcbn1cbmV4cG9ydHMub3Blbk1vZGFsID0gb3Blbk1vZGFsO1xuXG5cbmV4cG9ydHMuc2lnbkluID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtZXNzYWdlID0gcGFnZS5nZXRWaWV3QnlJZCgnZW1haWwnKS50ZXh0XG4gICAgbGV0IHN0YXR1c0xhYmVsID0gcGFnZS5nZXRWaWV3QnlJZCgnc3RhdHVzJylcblxuICAgIGZldGNoKFwiaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2VjcmV0OiBtZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb247XG4gICAgICAgICAgICB1c2VyLnN0YXR1cyA9IHJlc3BvbnNlLnVybFxuICAgICAgICAgICAgc3RhdHVzTGFiZWwudGV4dCA9IHJlc3BvbnNlLnVybFxuICAgICAgICAgICAgdXNlci5zaG93RGV0YWlscyA9IHRydWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgfSk7XG59O1xuXG5cbmNvbnN0IGhvbWVQYWdlID0ge1xuICAgIG1vZHVsZU5hbWU6IFwidmlld3MvbG9naW4vbG9naW4tcGFnZVwiLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgfX07XG5cbmV4cG9ydHMuZ29Ib21lID0gZnVuY3Rpb24oKSB7XG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlXG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKGhvbWVQYWdlKVxuXG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbG9hZGVkPVxcXCJsb2FkZWRcXFwiPlxcbiAgICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJvU05hcFxcXCIgLz5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwic3RhdHVzXFxcIiB0ZXh0PVxcXCJ7eyBzdGF0dXMgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gaWQ9XFxcImNvcHlDbGlwYm9hcmRcXFwiIHRleHQ9XFxcImNvcHkgdG8gY2xpcGJvYXJkXFxcIiB0YXA9XFxcImNvcHlUZXh0XFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIi8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGlkPVxcXCJlbWFpbFxcXCIgbWFyZ2luVG9wPVxcXCIxNXB4XFxcIiBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZjBmMGYwXFxcIlxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCIgaGludD1cXFwiRW50ZXIgTm90ZVxcXCJcXG4gICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwic2VuZFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0Vmlldz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdlbmVyYXRlIFNlY3JldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJzaWduSW5cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSG9tZVxcXCIgdGFwPVxcXCJnb0hvbWVcXFwiIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIFxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W10sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2U+XFxuICA8TGFiZWwgdGV4dD1cXFwiSGVsbG8gd29ybGRcXFwiIC8+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZsZXhib3hMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcImNvdmVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwifi9pbWFnZXMvb3BlblN1aXRlTW9iaWxlLmpwZ1xcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjMwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMCAxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIixcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjBmMGYwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNDQjFEMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjQzRBRkI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjBmMGYwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI3N0YXR1c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTAwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZFwiLFwidmFsdWVcIjpcImxpbWVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImRpc3BsYXlcIixcInZhbHVlXCI6XCJmbGV4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjIwcHhcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHN0YXR1czogXCJcIixcbiAgICBzZWNyZXQ6IFwiRW50ZXIgU2VjcmV0IGhlcmVcIixcbiAgICBzaG93RGV0YWlsczogZmFsc2Vcbn0pO1xudmFyIGNsaXBib2FyZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCIpO1xuXG5cbmZ1bmN0aW9uIGNvcHlUZXh0KGFyZ3Mpe1xuXG4gICAgY2xpcGJvYXJkLnNldFRleHQodXNlci5zdGF0dXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT0ssIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkXCIpO1xuICAgIH0pXG59XG5leHBvcnRzLmNvcHlUZXh0ID0gY29weVRleHQ7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXI7XG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlID0ge1xuICAgIG1vZHVsZU5hbWU6IFwidmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZVwiLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwiY3VybFwiLFxuICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgIH19O1xuXG4gICAgY29uc3QgcmV0cmlldmVQYWdlID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2VcIixcbiAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgLy8gU2V0IHVwIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiBwYWdlIG5hdmlnYXRpb24uXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6IFwiY3VybFwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgIH19O1xuXG5leHBvcnRzLnNob3dHZW5lcmF0ZVNlY3JldCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB1c2VyLnNob3dEZXRhaWxzID0gZmFsc2VcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoZ2VuZXJhdGVQYWdlKTtcbn0gIFxuZXhwb3J0cy5zaG93UmV0cmlldmVTZWNyZXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlXG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHJldHJpZXZlUGFnZSk7XG59XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIGxvYWRlZD1cXFwibG9hZGVkXFxcIj5cXG4gICAgPFBhZ2UuYWN0aW9uQmFyPlxcbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cXFwib1NOYXBcXFwiIC8+XFxuICAgIDwvUGFnZS5hY3Rpb25CYXI+XFxuXFxuXFxuICAgIDxGbGV4Ym94TGF5b3V0PlxcblxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImFwcC1oZWFkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJSZXRyaWV2ZSBBIHNlbGYgZGVzdHJ1Y3RpbmcgbWVzc2FnZSwgb3IgY3JlYXRlIGEgbmV3IG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdlbmVyYXRlIFNlY3JldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJzaG93R2VuZXJhdGVTZWNyZXRcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJSZXRyaWV2ZSBTZWNyZXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwic2hvd1JldHJpZXZlU2VjcmV0XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlOyBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGbGV4Ym94TGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCJjb3ZlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcIn4vaW1hZ2VzL29wZW5TdWl0ZU1vYmlsZS5qcGdcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIzMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTAgMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjcwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQ0IxRDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNzdGF0dXNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwMHB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmRcIixcInZhbHVlXCI6XCJsaW1lXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJkaXNwbGF5XCIsXCJ2YWx1ZVwiOlwiZmxleFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyMHB4XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHBpbjogXCJcIixcbiAgICBzaG93RGV0YWlsczogZmFsc2UsXG4gICAgc2VjcmV0OiBcIlwiXG59KTtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbn07XG5cblxuZXhwb3J0cy5yZXRyaWV2ZVNlY3JldCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwcy8ke3VzZXIucGlufWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB1c2VyLnNlY3JldCA9IHJlc3BvbnNlLnNlY3JldFxuICAgICAgICAgICAgdXNlci5zaG93RGV0YWlscyA9IHRydWVcbiAgICAgICAgICAgIHVzZXIucGluID0gXCJcIlxuXG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIH0pO1xufVxuY29uc3QgaG9tZVBhZ2UgPSB7XG4gICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9sb2dpbi9sb2dpbi1wYWdlXCIsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgLy8gU2V0IHVwIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiBwYWdlIG5hdmlnYXRpb24uXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImN1cmxcIixcbiAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICB9fTtcblxuZXhwb3J0cy5nb0hvbWUgPSBmdW5jdGlvbigpIHtcbiAgICB1c2VyLnNob3dEZXRhaWxzID0gZmFsc2VcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoaG9tZVBhZ2UpXG5cbn07IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIm9TbmFwXFxcIiAvPlxcbiAgICA8L1BhZ2UuYWN0aW9uQmFyPlxcblxcblxcbiAgICA8RmxleGJveExheW91dD5cXG5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkVudGVyIHRoZSBjb2RlIGluIHRoZSBib3ggYmVsb3cgdG8gcmV0cmlldmUgeW91ciBzZWNyZXQgbWVzc2FnZS4gIFBsZWFzZSBub3RlIHRoYXQgb25jZSB0aGlzIG1lc3NhZ2UgaXMgcmV0cmlldmVkIG9uY2UgaXQgaXMgZGVsZXRlZCBmb3JldmVyIVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cXFwicGluXFxcIiBtYXJnaW5Ub3A9XFxcIjE1cHhcXFwiIGJvcmRlckNvbG9yPVxcXCIjREVERURFXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNmMGYwZjBcXFwiXFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoPVxcXCIxXFxcIiBoaW50PVxcXCJFbnRlciBQaW5cXFwiIHRleHQ9XFxcInt7IHBpbiB9fVxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VmlldyBpZD1cXFwibWVzc2FnZVxcXCIgdGV4dD1cXFwie3sgc2VjcmV0IH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgdmlzaWJpbGl0eT1cXFwie3sgc2hvd0RldGFpbHMgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJyB9fVxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlJldHJlaXZlIFNlY3JldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJyZXRyaWV2ZVNlY3JldFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSG9tZVxcXCIgdGFwPVxcXCJnb0hvbWVcXFwiIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIC8+XFxuXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgIDwvRmxleGJveExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBpVXJsOiBcImh0dHBzOi8vYmFhcy5raW52ZXkuY29tL1wiLFxuICBhcHBLZXk6IFwia2lkX0h5SG9UX1JFZlwiLFxuICBhcHBVc2VySGVhZGVyOiBcIkJhc2ljIGEybGtYMGg1U0c5VVgxSkZaam8xTVRreE1ESmxaV0ZoTXpRME16TXlPREZqTjJNeU9ETTNNR1E1T1RJek1RXCJcbn07XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL2NvbmZpZy5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zaGFyZWQvdXRpbHMvaGludC11dGlsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG52YXIgdXRpbHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTtcblxuZXhwb3J0cy5zZXRTdGF0dXNCYXJDb2xvcnMgPSBmdW5jdGlvbigpIHtcbiAgLy8gTWFrZSB0aGUgaU9TIHN0YXR1cyBiYXIgdHJhbnNwYXJlbnQgd2l0aCB3aGl0ZSB0ZXh0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2J1cmtlaG9sbGFuZC9uYXRpdmVzY3JpcHQtc3RhdHVzYmFyL2lzc3Vlcy8yXG4gIC8vIGZvciBkZXRhaWxzIG9uIHRoZSB0ZWNobmlxdWUgdXNlZC5cbiAgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xuICAgIHZhciBBcHBEZWxlZ2F0ZSA9IFVJUmVzcG9uZGVyLmV4dGVuZCh7XG4gICAgICBhcHBsaWNhdGlvbkRpZEZpbmlzaExhdW5jaGluZ1dpdGhPcHRpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbi5zdGF0dXNCYXJTdHlsZSA9IFVJU3RhdHVzQmFyU3R5bGUuTGlnaHRDb250ZW50O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiQXBwRGVsZWdhdGVcIixcbiAgICAgICAgcHJvdG9jb2xzOiBbVUlBcHBsaWNhdGlvbkRlbGVnYXRlXVxuICAgICAgfSk7XG4gICAgYXBwbGljYXRpb24uaW9zLmRlbGVnYXRlID0gQXBwRGVsZWdhdGU7XG4gIH1cblxuICAvLyBNYWtlIHRoZSBBbmRyb2lkIHN0YXR1cyBiYXIgdHJhbnNwYXJlbnQuXG4gIC8vIFNlZSBodHRwOi8vYnJhZG1hcnRpbi5uZXQvMjAxNi8wMy8xMC9mdWxsc2NyZWVuLWFuZC1uYXZpZ2F0aW9uLWJhci1jb2xvci1pbi1hLW5hdGl2ZXNjcmlwdC1hbmRyb2lkLWFwcC9cbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxuICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub25BY3Rpdml0eVN0YXJ0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkICYmIHBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIikge1xuICAgICAgICB2YXIgVmlldyA9IGFuZHJvaWQudmlldy5WaWV3O1xuICAgICAgICB2YXIgd2luZG93ID0gYXBwbGljYXRpb24uYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoMHgwMDAwMDApO1xuXG4gICAgICAgIHZhciBkZWNvclZpZXcgPSB3aW5kb3cuZ2V0RGVjb3JWaWV3KCk7XG4gICAgICAgIGRlY29yVmlldy5zZXRTeXN0ZW1VaVZpc2liaWxpdHkoXG4gICAgICAgICAgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9ISURFX05BVklHQVRJT05cbiAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0ZVTExTQ1JFRU5cbiAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFX1NUSUNLWSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL3N0YXR1cy1iYXItdXRpbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGNvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvY29uZmlnXCIpO1xudmFyIGZldGNoTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmV0Y2hcIik7XG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcblxuZnVuY3Rpb24gR3JvY2VyeUxpc3RWaWV3TW9kZWwoaXRlbXMpIHtcbiAgdmFyIGJhc2VVcmwgPSBjb25maWcuYXBpVXJsICsgXCJhcHBkYXRhL1wiICsgY29uZmlnLmFwcEtleSArIFwiL0dyb2Nlcmllc1wiO1xuICB2YXIgdmlld01vZGVsID0gbmV3IE9ic2VydmFibGVBcnJheShpdGVtcyk7XG5cblxuXG4gIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmZ1bmN0aW9uIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gIHJldHVybiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBdXRob3JpemF0aW9uXCI6IFwiS2ludmV5IFwiICsgY29uZmlnLnRva2VuXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm9jZXJ5TGlzdFZpZXdNb2RlbDs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiKTtcbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIpO1xudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbmZ1bmN0aW9uIFVzZXIoaW5mbykge1xuICBpbmZvID0gaW5mbyB8fCB7fTtcblxuICAvLyBZb3UgY2FuIGFkZCBwcm9wZXJ0aWVzIHRvIG9ic2VydmFibGVzIG9uIGNyZWF0aW9uXG4gIHZhciB2aWV3TW9kZWwgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBlbWFpbDogaW5mby5lbWFpbCB8fCBcIlwiLFxuICAgIHBhc3N3b3JkOiBpbmZvLnBhc3N3b3JkIHx8IFwiXCJcbiAgfSk7XG5cbiAgdmlld01vZGVsLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmZXRjaE1vZHVsZS5mZXRjaChcImh0dHBzOi8vdGhlb3BlbnN1aXRlLmNvbS9hcGkvc25hcHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VjcmV0OiB2aWV3TW9kZWwuZ2V0KFwic2VjcmV0XCIpLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKClcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnVybClcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcblxuICB9O1xuICB2aWV3TW9kZWwucmVnaXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIikgfHwgIXZpZXdNb2RlbC5nZXQoXCJwYXNzd29yZFwiKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgIGVtYWlsOiB2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgIHBhc3N3b3JkOiB2aWV3TW9kZWwuZ2V0KFwicGFzc3dvcmRcIilcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczogZ2V0Q29tbW9uSGVhZGVycygpXG4gICAgfSkudGhlbihoYW5kbGVFcnJvcnMpO1xuICB9O1xuXG4gIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbmZ1bmN0aW9uIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gIHJldHVybiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBdXRob3JpemF0aW9uXCI6IGNvbmZpZy5hcHBVc2VySGVhZGVyXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFsaWduLWl0ZW1zXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiRmxleGJveExheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImp1c3RpZnktY29udGVudFwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFsaWduLWl0ZW1zXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1zaXplXCIsXCJ2YWx1ZVwiOlwiY292ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJ+L2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiU3RhY2tMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjMwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMCAxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjBmMGYwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI3MFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiLFwiVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJ0bi1wcmltYXJ5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNDQjFEMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGxhY2Vob2xkZXItY29sb3JcIixcInZhbHVlXCI6XCIjQzRBRkI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBzdGF0dXM6IFwiRW50ZXIgeW91ciBzZWNyZXQuXCIsXG4gICAgc2VjcmV0OiBcIkVudGVyIFNlY3JldCBoZXJlXCJcbn0pO1xuLy8gPj4gbW9kYWwtdmlldy1qc1xubGV0IGNsb3NlQ2FsbGJhY2s7XG5cblxuZnVuY3Rpb24gb25TaG93bk1vZGFsbHkoYXJncykge1xuICAgIHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cbiAgICB2YXIgZ290RGF0YSA9IHBhZ2UubmF2aWdhdGlvbkNvbnRleHQ7XG4gICAgY29uc29sZS5sb2coZ290RGF0YS51c2VyKTtcbiAgICBjb25zb2xlLmxvZyhnb3REYXRhLnN0YXR1cyk7XG59XG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XG5cblxuZnVuY3Rpb24gb25Mb2dpbkJ1dHRvblRhcChhcmdzKSB7XG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgY29uc3QgYmluZGluZ0NvbnRleHQgPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIGNvbnN0IHVzZXJuYW1lID0gYmluZGluZ0NvbnRleHQuZ2V0KGdvdERhdGEudXNlcik7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBiaW5kaW5nQ29udGV4dC5nZXQoZ290RGF0YS5zdGF0dXMpO1xuICAgIGNsb3NlQ2FsbGJhY2sodXNlcm5hbWUsIHBhc3N3b3JkKTtcbn1cbmV4cG9ydHMub25Mb2dpbkJ1dHRvblRhcCA9IG9uTG9naW5CdXR0b25UYXA7XG4vLyA8PCBtb2RhbC12aWV3LWpzOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuICAgIDxQYWdlLmFjdGlvbkJhcj5cXG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlY3JldCBNZXNzYWdlIENvZGVcXFwiIC8+XFxuICAgIDwvUGFnZS5hY3Rpb25CYXI+XFxuICAgIDxGbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2xvZ28ucG5nXFxcIiAvPiAtLT5cXG5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdXNlci5zdGF0dXMgfX1cXFwiIC8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGlkPVxcXCJlbWFpbFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDE1cHhcXFwiXFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPVxcXCIjREVERURFXFxcIiBib3JkZXJXaWR0aD1cXFwiMVxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCJcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgTm90ZVxcXCIgcmV0dXJuS2V5VHlwZT1cXFwic2VuZFxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0Vmlldz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdlbmVyYXRlIG5ldyBzZWNyZXQgbWVzc2FnZVxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJvbkxvZ2luQnV0dG9uVGFwXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==