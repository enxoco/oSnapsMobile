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
    pageData.set("pin", "")
	args.object.bindingContext = pageData;
}



exports.retrieveSecret = function(){

    fetch(`https://theopensuite.com/api/snaps/${pageData.get('pin')}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },

    }).then((r) => r.json())
        .then((response) => {
            frameModule.Frame.topmost().closeModal()
            frameModule.Frame.topmost().showModal('views/retrieveSecret/retrieveSecret-page', {context: {
                secret: response.secret,
                showDetails: true
            }});
        }).then(() => {


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELGlCQUFpQixtQkFBTyxDQUFDLGtFQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQSxnREFBZ0Qsb0JBQW9CO0FBQ3BFO0FBQ0Esa0JBQWtCLHFDQUFxQzs7QUFFdkQsS0FBSztBQUNMO0FBQ0E7QUFDQSwrRkFBK0Y7QUFDL0Y7QUFDQTtBQUNBLGNBQWM7QUFDZCxTQUFTOzs7QUFHVCxTQUFTOztBQUVUO0FBQ0EsU0FBUztBQUNUOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjAxMWYxMDJmZjM4YmE4YzZkZTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XG5cbnZhciBwYWdlRGF0YSA9IG5ldyBvYnNlcnZhYmxlLk9ic2VydmFibGUoKTtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcGFnZURhdGEuc2V0KFwicGluXCIsIFwiXCIpXG5cdGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG59XG5cblxuXG5leHBvcnRzLnJldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oKXtcblxuICAgIGZldGNoKGBodHRwczovL3RoZW9wZW5zdWl0ZS5jb20vYXBpL3NuYXBzLyR7cGFnZURhdGEuZ2V0KCdwaW4nKX1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLmNsb3NlTW9kYWwoKVxuICAgICAgICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLnNob3dNb2RhbCgndmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZScsIHtjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgc2VjcmV0OiByZXNwb25zZS5zZWNyZXQsXG4gICAgICAgICAgICAgICAgc2hvd0RldGFpbHM6IHRydWVcbiAgICAgICAgICAgIH19KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG5cblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB9KTtcbn1cblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=