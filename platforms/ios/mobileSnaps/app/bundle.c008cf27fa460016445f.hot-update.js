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
            // frameModule.Frame.topmost().closeModal()
            // frameModule.Frame.topmost().navigate('views/retrieveSecret/retrieveSecret-page', {
            //     context: {
            //     secret: response.secret,
            //     showDetails: true
            // }});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7OztBQUdyRCx1QkFBdUIsbUJBQU8sQ0FBQyxrQ0FBa0M7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQSxrQkFBa0IscUNBQXFDOztBQUV2RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTOzs7QUFHVCxTQUFTOztBQUVUO0FBQ0EsU0FBUztBQUNUOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmMwMDhjZjI3ZmE0NjAwMTY0NDVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG5cbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG52YXIgdXNlciA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIHBpbjogXCJcIixcbiAgICBzaG93RGV0YWlsczogZmFsc2UsXG4gICAgc2VjcmV0OiBcIlwiXG59KTtcblxuZXhwb3J0cy5sb2FkZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbn07XG5cblxuZXhwb3J0cy5yZXRyaWV2ZVNlY3JldCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBmZXRjaChgaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwcy8ke3VzZXIucGlufWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG5cbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB1c2VyLnNlY3JldCA9IHJlc3BvbnNlLnNlY3JldFxuICAgICAgICAgICAgdXNlci5zaG93RGV0YWlscyA9IHRydWVcbiAgICAgICAgICAgIC8vIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgIC8vIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSgndmlld3MvcmV0cmlldmVTZWNyZXQvcmV0cmlldmVTZWNyZXQtcGFnZScsIHtcbiAgICAgICAgICAgIC8vICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAvLyAgICAgc2VjcmV0OiByZXNwb25zZS5zZWNyZXQsXG4gICAgICAgICAgICAvLyAgICAgc2hvd0RldGFpbHM6IHRydWVcbiAgICAgICAgICAgIC8vIH19KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG5cblxuICAgICAgICB9KVxuXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICB9KTtcbn1cblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JldHJpZXZlU2VjcmV0L3JldHJpZXZlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9yZXRyaWV2ZVNlY3JldC9yZXRyaWV2ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=