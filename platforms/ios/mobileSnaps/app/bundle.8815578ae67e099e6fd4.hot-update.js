webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7OztBQUdyRCx1QkFBdUIsbUJBQU8sQ0FBQyxrQ0FBa0M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQSxrQkFBa0IscUNBQXFDOztBQUV2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNULFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHdFQUF3RTtBQUNuRyxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuODgxNTU3OGFlNjdlMDk5ZTZmZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cblxudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbnZhciB1c2VyID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgcGluOiBcIlwiLFxuICAgIHNob3dEZXRhaWxzOiBmYWxzZSxcbiAgICBzZWNyZXQ6IFwiXCJcbn0pO1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB1c2VyO1xufTtcblxuXG5leHBvcnRzLnJldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oKXtcblxuICAgIGZldGNoKGBodHRwczovL3RoZW9wZW5zdWl0ZS5jb20vYXBpL3NuYXBzLyR7dXNlci5waW59YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHVzZXIuc2VjcmV0ID0gcmVzcG9uc2Uuc2VjcmV0XG4gICAgICAgICAgICB1c2VyLnNob3dEZXRhaWxzID0gdHJ1ZVxuICAgICAgICAgICAgdXNlci5waW4gPSBcIlwiXG5cbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgfSk7XG59XG5jb25zdCBob21lUGFnZSA9IHtcbiAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2xvZ2luL2xvZ2luLXBhZ2VcIixcbiAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAvLyBTZXQgdXAgYSB0cmFuc2l0aW9uIHByb3BlcnR5IG9uIHBhZ2UgbmF2aWdhdGlvbi5cbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwiY3VybFwiLFxuICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgIH19O1xuXG5leHBvcnRzLmdvSG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZVxuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZShob21lUGFnZSlcblxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9