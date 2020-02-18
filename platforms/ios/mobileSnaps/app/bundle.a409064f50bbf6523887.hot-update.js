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
            frameModule.Frame.topmost().closeModal()
            frameModule.Frame.topmost().showModal('views/retrieveSecret/retrieveSecret-page', {clearHistory: true});

        })

        .catch((e) => {
        });
}

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/retrieveSecret/retrieveSecret-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/retrieveSecret/retrieveSecret-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELGlCQUFpQixtQkFBTyxDQUFDLGtFQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBLGtCQUFrQixxQ0FBcUM7O0FBRXZELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtGQUErRixtQkFBbUI7O0FBRWxILFNBQVM7O0FBRVQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHdFQUF3RTtBQUNuRyxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuYTQwOTA2NGY1MGJiZjY1MjM4ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHBhZ2VEYXRhID0gbmV3IG9ic2VydmFibGUuT2JzZXJ2YWJsZSgpO1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBwYWdlRGF0YS5zZXQoXCJzaG93RGV0YWlsc1wiLCBmYWxzZSk7XG4gICAgcGFnZURhdGEuc2V0KFwic2VjcmV0XCIsIFwiXCIpXG4gICAgcGFnZURhdGEuc2V0KFwicGluXCIsIFwiXCIpXG5cdGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG59XG5cblxuXG5leHBvcnRzLnJldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oKXtcblxuICAgIGZldGNoKGBodHRwczovL3RoZW9wZW5zdWl0ZS5jb20vYXBpL3NuYXBzLyR7cGFnZURhdGEuZ2V0KCdwaW4nKX1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc2VjcmV0KVxuICAgICAgICAgICAgcGFnZURhdGEuc2V0KFwic2hvd0RldGFpbHNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBwYWdlRGF0YS5zZXQoXCJzZWNyZXRcIiwgcmVzcG9uc2Uuc2VjcmV0KVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5zaG93TW9kYWwoJ3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UnLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgfSk7XG59XG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9