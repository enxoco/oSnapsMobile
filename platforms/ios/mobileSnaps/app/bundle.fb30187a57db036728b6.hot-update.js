webpackHotUpdate("bundle",{

/***/ "./views/generateSecret/generateSecret-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page xmlns=\"http://www.nativescript.org/tns.xsd\" loaded=\"loaded\">\n    <Page.actionBar>\n        <ActionBar title=\"oSNap\" />\n    </Page.actionBar>\n    <FlexboxLayout>\n        <StackLayout class=\"form\">\n            <Label id=\"status\" text=\"{{ status }}\" textWrap=\"true\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\" />\n            <Button id=\"copyClipboard\" text=\"copy to clipboard\" tap=\"copyText\" visibility=\"{{ showDetails ? 'visible' : 'collapsed' }}\"/>\n            <TextView id=\"email\" marginTop=\"15px\" borderColor=\"#DEDEDE\" backgroundColor=\"#f0f0f0\"\n                borderWidth=\"1\" height=\"200px\" hint=\"Enter Note\"\n                returnKeyType=\"send\" class=\"input input-border\"></TextView>\n            <Button text=\"Generate Secret\" class=\"btn btn-primary\"\n                tap=\"signIn\" />\n                <Button text=\"Home\" tap=\"goHome\" class=\"fixed-bottom\" />\n        </StackLayout>\n    </FlexboxLayout>\n    \n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/generateSecret/generateSecret-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/generateSecret/generateSecret-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtUkFBbVIsVUFBVSxvQ0FBb0MseUNBQXlDLDJHQUEyRyx5Q0FBeUMsa2dCO0FBQzlmLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlFQUF5RTtBQUNwRyxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuZmIzMDE4N2E1N2RiMDM2NzI4YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbG9hZGVkPVxcXCJsb2FkZWRcXFwiPlxcbiAgICA8UGFnZS5hY3Rpb25CYXI+XFxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJvU05hcFxcXCIgLz5cXG4gICAgPC9QYWdlLmFjdGlvbkJhcj5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwic3RhdHVzXFxcIiB0ZXh0PVxcXCJ7eyBzdGF0dXMgfX1cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gaWQ9XFxcImNvcHlDbGlwYm9hcmRcXFwiIHRleHQ9XFxcImNvcHkgdG8gY2xpcGJvYXJkXFxcIiB0YXA9XFxcImNvcHlUZXh0XFxcIiB2aXNpYmlsaXR5PVxcXCJ7eyBzaG93RGV0YWlscyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZWQnIH19XFxcIi8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGlkPVxcXCJlbWFpbFxcXCIgbWFyZ2luVG9wPVxcXCIxNXB4XFxcIiBib3JkZXJDb2xvcj1cXFwiI0RFREVERVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZjBmMGYwXFxcIlxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD1cXFwiMVxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCIgaGludD1cXFwiRW50ZXIgTm90ZVxcXCJcXG4gICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZT1cXFwic2VuZFxcXCIgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0Vmlldz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkdlbmVyYXRlIFNlY3JldFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCJcXG4gICAgICAgICAgICAgICAgdGFwPVxcXCJzaWduSW5cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSG9tZVxcXCIgdGFwPVxcXCJnb0hvbWVcXFwiIGNsYXNzPVxcXCJmaXhlZC1ib3R0b21cXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgIFxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9nZW5lcmF0ZVNlY3JldC9nZW5lcmF0ZVNlY3JldC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2dlbmVyYXRlU2VjcmV0L2dlbmVyYXRlU2VjcmV0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=