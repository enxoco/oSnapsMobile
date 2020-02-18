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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGdCQUFnQixtQkFBTyxDQUFDLHFEQUF3Qjs7O0FBR2hEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7QUFDQTtBQUNBLHNGQUFzRixtQkFBbUI7QUFDekc7O0FBRUEsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFzRDtBQUNqRixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNWJlY2MzYTM0NDExOGU3M2M0MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHN0YXR1czogXCJcIixcbiAgICBzZWNyZXQ6IFwiRW50ZXIgU2VjcmV0IGhlcmVcIlxufSk7XG52YXIgY2xpcGJvYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIik7XG5cblxuZnVuY3Rpb24gY29weVRleHQoYXJncyl7XG5cbiAgICBjbGlwYm9hcmQuc2V0VGV4dCh1c2VyLnN0YXR1cykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPSywgY29waWVkIHRvIHRoZSBjbGlwYm9hcmRcIik7XG4gICAgfSlcbn1cbmV4cG9ydHMuY29weVRleHQgPSBjb3B5VGV4dDtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9IHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2VcIixcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwiY3VybFwiLFxuICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgIH19O1xuXG5leHBvcnRzLnNob3dHZW5lcmF0ZVNlY3JldCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoZ2VuZXJhdGVQYWdlKTtcbn0gIFxuZXhwb3J0cy5zaG93UmV0cmlldmVTZWNyZXQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKCd2aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlJywge2NsZWFySGlzdG9yeTogdHJ1ZX0pO1xufVxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==