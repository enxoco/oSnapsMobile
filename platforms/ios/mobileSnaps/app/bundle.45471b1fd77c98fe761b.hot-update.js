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

exports.showGenerateSecret = function(args) {
    user.showDetails = false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOzs7QUFHaEQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQztBQUNBO0FBQ0Esc0ZBQXNGLG1CQUFtQjtBQUN6Rzs7QUFFQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQXNEO0FBQ2pGLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS40NTQ3MWIxZmQ3N2M5OGZlNzYxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2U7XG52YXIgZW1haWw7XG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcblxudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbnZhciB1c2VyID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgc3RhdHVzOiBcIlwiLFxuICAgIHNlY3JldDogXCJFbnRlciBTZWNyZXQgaGVyZVwiLFxuICAgIHNob3dEZXRhaWxzOiBmYWxzZVxufSk7XG52YXIgY2xpcGJvYXJkID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jbGlwYm9hcmRcIik7XG5cblxuZnVuY3Rpb24gY29weVRleHQoYXJncyl7XG5cbiAgICBjbGlwYm9hcmQuc2V0VGV4dCh1c2VyLnN0YXR1cykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPSywgY29waWVkIHRvIHRoZSBjbGlwYm9hcmRcIik7XG4gICAgfSlcbn1cbmV4cG9ydHMuY29weVRleHQgPSBjb3B5VGV4dDtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbiAgICB1c2VyLnNob3dEZXRhaWxzID0gZmFsc2U7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2UgPSB7XG4gICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlXCIsXG4gICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgIC8vIFNldCB1cCBhIHRyYW5zaXRpb24gcHJvcGVydHkgb24gcGFnZSBuYXZpZ2F0aW9uLlxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgbmFtZTogXCJjdXJsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgfX07XG5cbmV4cG9ydHMuc2hvd0dlbmVyYXRlU2VjcmV0ID0gZnVuY3Rpb24oYXJncykge1xuICAgIHVzZXIuc2hvd0RldGFpbHMgPSBmYWxzZVxuICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZShnZW5lcmF0ZVBhZ2UpO1xufSAgXG5leHBvcnRzLnNob3dSZXRyaWV2ZVNlY3JldCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoJ3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UnLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG59XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9