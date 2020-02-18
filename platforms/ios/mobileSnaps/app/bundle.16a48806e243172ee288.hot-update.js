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
};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/generateSecret/generateSecret-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDZCQUE2QjtBQUN6RCxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJELHVCQUF1QixtQkFBTyxDQUFDLGtDQUFrQzs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUE4QztBQUNoRTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsZUFBZSxTQUFTO0FBQ2hFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsU0FBUzs7QUFFVDtBQUNBLFNBQVM7QUFDVCxHO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsd0VBQXdFO0FBQ25HLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4xNmE0ODgwNmUyNDMxNzJlZTI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhZ2U7XG52YXIgZW1haWw7XG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcblxudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbnZhciB1c2VyID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgcGluOiBcIlwiLFxuICAgIHNob3dEZXRhaWxzOiBmYWxzZSxcbiAgICBzZWNyZXQ6IFwiXCJcbn0pO1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB1c2VyO1xufTtcbnZhciBjbGlwYm9hcmQgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNsaXBib2FyZFwiKTtcblxuY29uc3QgbW9kYWxWaWV3TW9kdWxlID0gXCJ2aWV3cy9zdWNjZXNzL3N1Y2Nlc3MtcGFnZVwiO1xuXG5mdW5jdGlvbiBjb3B5VGV4dChhcmdzKXtcblxuICAgIGNsaXBib2FyZC5zZXRUZXh0KHVzZXIuc3RhdHVzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9LLCBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZFwiKTtcbiAgICB9KVxufVxuZXhwb3J0cy5jb3B5VGV4dCA9IGNvcHlUZXh0O1xuZnVuY3Rpb24gb3Blbk1vZGFsKGFyZ3MpIHtcblxuICAgIGNvbnN0IG1haW5WaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICBjb250ZXh0OiB7IHVzZXJuYW1lOiBcInRlc3RfdXNlcm5hbWVcIiwgcGFzc3dvcmQ6IFwidGVzdFwiIH0sXG4gICAgICAgIGNsb3NlQ2FsbGJhY2s6ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgICAgIC8vIFJlY2VpdmUgZGF0YSBmcm9tIHRoZSBtb2RhbCB2aWV3LiBlLmcuIHVzZXJuYW1lICYgcGFzc3dvcmRcbiAgICAgICAgICAgIGFsZXJ0KGBVc2VybmFtZTogJHt1c2VybmFtZX0gOiBQYXNzd29yZDogJHtwYXNzd29yZH1gKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG4gICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLnNob3dNb2RhbChtb2RhbFZpZXdNb2R1bGUsIG9wdGlvbik7XG59XG5leHBvcnRzLm9wZW5Nb2RhbCA9IG9wZW5Nb2RhbDtcblxuXG5leHBvcnRzLnNpZ25JbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWVzc2FnZSA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2VtYWlsJykudGV4dFxuICAgIGxldCBzdGF0dXNMYWJlbCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3N0YXR1cycpXG5cbiAgICBmZXRjaChcImh0dHBzOi8vdGhlb3BlbnN1aXRlLmNvbS9hcGkvc25hcHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlY3JldDogbWVzc2FnZSxcbiAgICAgICAgfSlcbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5qc29uO1xuICAgICAgICAgICAgdXNlci5zdGF0dXMgPSByZXNwb25zZS51cmxcbiAgICAgICAgICAgIHN0YXR1c0xhYmVsLnRleHQgPSByZXNwb25zZS51cmxcbiAgICAgICAgICAgIHVzZXIuc2hvd0RldGFpbHMgPSB0cnVlXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgIH0pXG5cbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIH0pO1xufTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvZ2VuZXJhdGVTZWNyZXQvZ2VuZXJhdGVTZWNyZXQtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==