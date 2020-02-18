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
            frameModule.Frame.topmost().showModal('views/retrieveSecret/retrieveSecret-page', {context: {
                secret: secret,
                showDetails: true
            }});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELGlCQUFpQixtQkFBTyxDQUFDLGtFQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUEsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBLGtCQUFrQixxQ0FBcUM7O0FBRXZELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtGQUErRjtBQUMvRjtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxTQUFTOztBQUVUO0FBQ0EsU0FBUztBQUNUOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjAxMzhlY2UzMjNjNzQxNWFmODdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XG5cbnZhciBwYWdlRGF0YSA9IG5ldyBvYnNlcnZhYmxlLk9ic2VydmFibGUoKTtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgcGFnZURhdGEuc2V0KFwic2hvd0RldGFpbHNcIiwgZmFsc2UpO1xuICAgIHBhZ2VEYXRhLnNldChcInNlY3JldFwiLCBcIlwiKVxuICAgIHBhZ2VEYXRhLnNldChcInBpblwiLCBcIlwiKVxuXHRhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xufVxuXG5cblxuZXhwb3J0cy5yZXRyaWV2ZVNlY3JldCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwcy8ke3BhZ2VEYXRhLmdldCgncGluJyl9YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnNlY3JldClcbiAgICAgICAgICAgIHBhZ2VEYXRhLnNldChcInNob3dEZXRhaWxzXCIsIHRydWUpO1xuICAgICAgICAgICAgcGFnZURhdGEuc2V0KFwic2VjcmV0XCIsIHJlc3BvbnNlLnNlY3JldClcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuY2xvc2VNb2RhbCgpXG4gICAgICAgICAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuc2hvd01vZGFsKCd2aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlJywge2NvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IHNlY3JldCxcbiAgICAgICAgICAgICAgICBzaG93RGV0YWlsczogdHJ1ZVxuICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIH0pO1xufVxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==