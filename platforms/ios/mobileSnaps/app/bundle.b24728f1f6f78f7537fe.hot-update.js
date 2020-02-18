webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOzs7QUFHaEQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixzREFBc0Q7QUFDakYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmIyNDcyOGYxZjZmNzhmNzUzN2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBzdGF0dXM6IFwiXCIsXG4gICAgc2VjcmV0OiBcIkVudGVyIFNlY3JldCBoZXJlXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlXG59KTtcbnZhciBjbGlwYm9hcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiKTtcblxuXG5mdW5jdGlvbiBjb3B5VGV4dChhcmdzKXtcblxuICAgIGNsaXBib2FyZC5zZXRUZXh0KHVzZXIuc3RhdHVzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9LLCBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZFwiKTtcbiAgICB9KVxufVxuZXhwb3J0cy5jb3B5VGV4dCA9IGNvcHlUZXh0O1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB1c2VyO1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9IHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2VcIixcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgLy8gU2V0IHVwIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBvbiBwYWdlIG5hdmlnYXRpb24uXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImN1cmxcIixcbiAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICB9fTtcblxuICAgIGNvbnN0IHJldHJpZXZlUGFnZSA9IHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlXCIsXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcImN1cmxcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICB9fTtcblxuZXhwb3J0cy5zaG93R2VuZXJhdGVTZWNyZXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgdXNlci5zaG93RGV0YWlscyA9IGZhbHNlXG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKGdlbmVyYXRlUGFnZSk7XG59ICBcbmV4cG9ydHMuc2hvd1JldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZVxuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZShyZXRyaWV2ZVBhZ2UpO1xufVxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==