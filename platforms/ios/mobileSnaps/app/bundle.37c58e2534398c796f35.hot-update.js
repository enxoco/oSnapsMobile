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
    console.log(pageData.get('pin'))
    let pin = pageData.get('pin')
    fetch(`https://theopensuite.com/api/snaps/${pin}`, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELGlCQUFpQixtQkFBTyxDQUFDLGtFQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELElBQUk7QUFDcEQ7QUFDQSxrQkFBa0IscUNBQXFDOztBQUV2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULFNBQVM7O0FBRVQ7QUFDQSxTQUFTO0FBQ1QsRTtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHdFQUF3RTtBQUNuRyxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuMzdjNThlMjUzNDM5OGM3OTZmMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYWdlO1xudmFyIGVtYWlsO1xudmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHBhZ2VEYXRhID0gbmV3IG9ic2VydmFibGUuT2JzZXJ2YWJsZSgpO1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBwYWdlRGF0YS5zZXQoXCJzaG93RGV0YWlsc1wiLCBmYWxzZSk7XG4gICAgcGFnZURhdGEuc2V0KFwic2VjcmV0XCIsIFwiXCIpXG4gICAgcGFnZURhdGEuc2V0KFwicGluXCIsIFwiXCIpXG5cdGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0ID0gcGFnZURhdGE7XG59XG5cblxuXG5leHBvcnRzLnJldHJpZXZlU2VjcmV0ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZyhwYWdlRGF0YS5nZXQoJ3BpbicpKVxuICAgIGxldCBwaW4gPSBwYWdlRGF0YS5nZXQoJ3BpbicpXG4gICAgZmV0Y2goYGh0dHBzOi8vdGhlb3BlbnN1aXRlLmNvbS9hcGkvc25hcHMvJHtwaW59YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnNlY3JldClcbiAgICAgICAgICAgIHBhZ2VEYXRhLnNldChcInNob3dEZXRhaWxzXCIsIHRydWUpO1xuICAgICAgICAgICAgcGFnZURhdGEuc2V0KFwic2VjcmV0XCIsIHJlc3BvbnNlLnNlY3JldClcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgfSk7XG59OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=