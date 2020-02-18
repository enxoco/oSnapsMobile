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

    // Set up a transition property on page navigation.
    transition: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    }};

exports.showGenerateSecret = function(args) {
    user.showDetails = false
    frameModule.Frame.topmost().navigateTo(generatePage);
}  
exports.showRetrieveSecret = function(args) {
    frameModule.Frame.topmost().navigate('views/retrieveSecret/retrieveSecret-page', {clearHistory: true});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOzs7QUFHaEQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDO0FBQ0E7QUFDQSxzRkFBc0YsbUJBQW1CO0FBQ3pHOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixzREFBc0Q7QUFDakYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjMxYTUzMTQwMTYwNWMwZDIyMDE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBzdGF0dXM6IFwiXCIsXG4gICAgc2VjcmV0OiBcIkVudGVyIFNlY3JldCBoZXJlXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlXG59KTtcbnZhciBjbGlwYm9hcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiKTtcblxuXG5mdW5jdGlvbiBjb3B5VGV4dChhcmdzKXtcblxuICAgIGNsaXBib2FyZC5zZXRUZXh0KHVzZXIuc3RhdHVzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9LLCBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZFwiKTtcbiAgICB9KVxufVxuZXhwb3J0cy5jb3B5VGV4dCA9IGNvcHlUZXh0O1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB1c2VyO1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9IHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2VcIixcbiAgICBhbmltYXRlZDogdHJ1ZSxcblxuICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgfX07XG5cbmV4cG9ydHMuc2hvd0dlbmVyYXRlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZVxuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZVRvKGdlbmVyYXRlUGFnZSk7XG59ICBcbmV4cG9ydHMuc2hvd1JldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSgndmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZScsIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcbn1cblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=