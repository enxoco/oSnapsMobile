webpackHotUpdate("bundle",{

/***/ "./views/retrieveSecret/retrieveSecret-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var page;
var email;
var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");

var observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

var pageData = new observable.Observable();

exports.loaded = function(args) {
    pageData.set("showDetails", false);
    pageData.set("secret", "")
    pageData.set("pin", "")
	args.object.bindingContext = pageData;
}



exports.retrieveSecret = function(){

    fetch(`https://theopensuite.com/api/snaps/${pageData.get('pin')}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((r) => r.json())
        .then((response) => {
            console.log(response.secret)
            pageData.set("showDetails", true);
            pageData.set("secret", response.secret)
        }).then(() => {

        })

        .catch((e) => {
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELGlCQUFpQixtQkFBTyxDQUFDLGtFQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBLGtCQUFrQixxQ0FBcUM7O0FBRXZELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsU0FBUzs7QUFFVDtBQUNBLFNBQVM7QUFDVCxFO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsd0VBQXdFO0FBQ25HLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4wZTE5YTEyYmViZDc5MWM4YWU2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2U7XG52YXIgZW1haWw7XG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcblxudmFyIG9ic2VydmFibGUgPSByZXF1aXJlKFwiZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgcGFnZURhdGEgPSBuZXcgb2JzZXJ2YWJsZS5PYnNlcnZhYmxlKCk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24oYXJncykge1xuICAgIHBhZ2VEYXRhLnNldChcInNob3dEZXRhaWxzXCIsIGZhbHNlKTtcbiAgICBwYWdlRGF0YS5zZXQoXCJzZWNyZXRcIiwgXCJcIilcbiAgICBwYWdlRGF0YS5zZXQoXCJwaW5cIiwgXCJcIilcblx0YXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQgPSBwYWdlRGF0YTtcbn1cblxuXG5cbmV4cG9ydHMucmV0cmlldmVTZWNyZXQgPSBmdW5jdGlvbigpe1xuXG4gICAgZmV0Y2goYGh0dHBzOi8vdGhlb3BlbnN1aXRlLmNvbS9hcGkvc25hcHMvJHtwYWdlRGF0YS5nZXQoJ3BpbicpfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zZWNyZXQpXG4gICAgICAgICAgICBwYWdlRGF0YS5zZXQoXCJzaG93RGV0YWlsc1wiLCB0cnVlKTtcbiAgICAgICAgICAgIHBhZ2VEYXRhLnNldChcInNlY3JldFwiLCByZXNwb25zZS5zZWNyZXQpXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIH0pO1xufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9