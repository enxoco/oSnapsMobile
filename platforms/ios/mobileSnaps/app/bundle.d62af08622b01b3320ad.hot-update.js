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
    secret: "Enter Secret here"
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
};

const generatePage = {
    moduleName: "views/generateSecret/generateSecret-page",
    animated: true,
    context: {
        showDetails: false
    },
    // Set up a transition property on page navigation.
    transition: {
        name: "curl",
        duration: 380,
        curve: "easeIn"
    }};

exports.showGenerateSecret = function(args) {
    frameModule.Frame.topmost().navigate(generatePage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdCQUFnQixtQkFBTyxDQUFDLHFEQUF3Qjs7O0FBR2hEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0Esc0ZBQXNGLG1CQUFtQjtBQUN6Rzs7QUFFQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQXNEO0FBQ2pGLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5kNjJhZjA4NjIyYjAxYjMzMjBhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2U7XG52YXIgZW1haWw7XG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcblxudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbnZhciB1c2VyID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgc3RhdHVzOiBcIlwiLFxuICAgIHNlY3JldDogXCJFbnRlciBTZWNyZXQgaGVyZVwiXG59KTtcbnZhciBjbGlwYm9hcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiKTtcblxuXG5mdW5jdGlvbiBjb3B5VGV4dChhcmdzKXtcblxuICAgIGNsaXBib2FyZC5zZXRUZXh0KHVzZXIuc3RhdHVzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9LLCBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZFwiKTtcbiAgICB9KVxufVxuZXhwb3J0cy5jb3B5VGV4dCA9IGNvcHlUZXh0O1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB1c2VyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlID0ge1xuICAgIG1vZHVsZU5hbWU6IFwidmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZVwiLFxuICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgIGNvbnRleHQ6IHtcbiAgICAgICAgc2hvd0RldGFpbHM6IGZhbHNlXG4gICAgfSxcbiAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwiY3VybFwiLFxuICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgIH19O1xuXG5leHBvcnRzLnNob3dHZW5lcmF0ZVNlY3JldCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoZ2VuZXJhdGVQYWdlKTtcbn0gIFxuZXhwb3J0cy5zaG93UmV0cmlldmVTZWNyZXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKCd2aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlJywge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xufVxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==