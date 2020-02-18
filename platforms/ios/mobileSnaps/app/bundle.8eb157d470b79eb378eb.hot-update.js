webpackHotUpdate("bundle",{

/***/ "./views/generateSecret/generateSecret-page.js":
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
var clipboard = __webpack_require__("../node_modules/nativescript-clipboard/clipboard.js");

const modalViewModule = "views/success/success-page";

function copyText(args){

    clipboard.setText(user.status).then(function() {
        console.log("OK, copied to the clipboard");
    })
}
exports.copyText = copyText;
function openModal(args) {

    const mainView = args.object;
    const option = {
        context: { username: "test_username", password: "test" },
        closeCallback: (username, password) => {
            // Receive data from the modal view. e.g. username & password
            alert(`Username: ${username} : Password: ${password}`);
        },
        fullscreen: true
    };
    frameModule.Frame.topmost().showModal(modalViewModule, option);
}
exports.openModal = openModal;


exports.signIn = function () {
    let message = page.getViewById('email').text
    let statusLabel = page.getViewById('status')

    fetch("https://theopensuite.com/api/snaps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            secret: message,
        })
    }).then((r) => r.json())
        .then((response) => {
            const result = response.json;
            user.status = response.url
            statusLabel.text = response.url
            user.showDetails = true
        }).then(() => {

        })

        .catch((e) => {
        });
};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/generateSecret/generateSecret-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUE4QztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsZUFBZSxTQUFTO0FBQ2hFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsU0FBUzs7QUFFVDtBQUNBLFNBQVM7QUFDVDtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjhlYjE1N2Q0NzBiNzllYjM3OGViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnZTtcbnZhciBlbWFpbDtcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xuXG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHVzZXIgPSBuZXcgb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBwaW46IFwiXCIsXG4gICAgc2hvd0RldGFpbHM6IGZhbHNlLFxuICAgIHNlY3JldDogXCJcIlxufSk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXI7XG59O1xudmFyIGNsaXBib2FyZCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2xpcGJvYXJkXCIpO1xuXG5jb25zdCBtb2RhbFZpZXdNb2R1bGUgPSBcInZpZXdzL3N1Y2Nlc3Mvc3VjY2Vzcy1wYWdlXCI7XG5cbmZ1bmN0aW9uIGNvcHlUZXh0KGFyZ3Mpe1xuXG4gICAgY2xpcGJvYXJkLnNldFRleHQodXNlci5zdGF0dXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT0ssIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkXCIpO1xuICAgIH0pXG59XG5leHBvcnRzLmNvcHlUZXh0ID0gY29weVRleHQ7XG5mdW5jdGlvbiBvcGVuTW9kYWwoYXJncykge1xuXG4gICAgY29uc3QgbWFpblZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgIGNvbnRleHQ6IHsgdXNlcm5hbWU6IFwidGVzdF91c2VybmFtZVwiLCBwYXNzd29yZDogXCJ0ZXN0XCIgfSxcbiAgICAgICAgY2xvc2VDYWxsYmFjazogKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVjZWl2ZSBkYXRhIGZyb20gdGhlIG1vZGFsIHZpZXcuIGUuZy4gdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAgICAgICAgYWxlcnQoYFVzZXJuYW1lOiAke3VzZXJuYW1lfSA6IFBhc3N3b3JkOiAke3Bhc3N3b3JkfWApO1xuICAgICAgICB9LFxuICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXG4gICAgfTtcbiAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkuc2hvd01vZGFsKG1vZGFsVmlld01vZHVsZSwgb3B0aW9uKTtcbn1cbmV4cG9ydHMub3Blbk1vZGFsID0gb3Blbk1vZGFsO1xuXG5cbmV4cG9ydHMuc2lnbkluID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBtZXNzYWdlID0gcGFnZS5nZXRWaWV3QnlJZCgnZW1haWwnKS50ZXh0XG4gICAgbGV0IHN0YXR1c0xhYmVsID0gcGFnZS5nZXRWaWV3QnlJZCgnc3RhdHVzJylcblxuICAgIGZldGNoKFwiaHR0cHM6Ly90aGVvcGVuc3VpdGUuY29tL2FwaS9zbmFwc1wiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgc2VjcmV0OiBtZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb247XG4gICAgICAgICAgICB1c2VyLnN0YXR1cyA9IHJlc3BvbnNlLnVybFxuICAgICAgICAgICAgc3RhdHVzTGFiZWwudGV4dCA9IHJlc3BvbnNlLnVybFxuICAgICAgICAgICAgdXNlci5zaG93RGV0YWlscyA9IHRydWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgfSlcblxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgfSk7XG59O1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=