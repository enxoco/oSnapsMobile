webpackHotUpdate("vendor",{

/***/ "../node_modules/@nativescript/core/data/observable/observable.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });
var _wrappedIndex = 0;
var WrappedValue = (function () {
    function WrappedValue(wrapped) {
        this.wrapped = wrapped;
    }
    WrappedValue.unwrap = function (value) {
        return (value instanceof WrappedValue) ? value.wrapped : value;
    };
    WrappedValue.wrap = function (value) {
        var w = _wrappedValues[_wrappedIndex++ % 5];
        w.wrapped = value;
        return w;
    };
    return WrappedValue;
}());
exports.WrappedValue = WrappedValue;
var _wrappedValues = [
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null),
    new WrappedValue(null)
];
var Observable = (function () {
    function Observable() {
        this._observers = {};
    }
    Observable.prototype.get = function (name) {
        return this[name];
    };
    Observable.prototype.set = function (name, value) {
        var oldValue = this[name];
        if (this[name] === value) {
            return;
        }
        var newValue = WrappedValue.unwrap(value);
        this[name] = newValue;
        this.notifyPropertyChange(name, newValue, oldValue);
    };
    Observable.prototype.on = function (eventNames, callback, thisArg) {
        this.addEventListener(eventNames, callback, thisArg);
    };
    Observable.prototype.once = function (event, callback, thisArg) {
        var list = this._getEventList(event, true);
        list.push({ callback: callback, thisArg: thisArg, once: true });
    };
    Observable.prototype.off = function (eventNames, callback, thisArg) {
        this.removeEventListener(eventNames, callback, thisArg);
    };
    Observable.prototype.addEventListener = function (eventNames, callback, thisArg) {
        if (typeof eventNames !== "string") {
            throw new TypeError("Events name(s) must be string.");
        }
        if (typeof callback !== "function") {
            throw new TypeError("callback must be function.");
        }
        var events = eventNames.split(",");
        for (var i = 0, l = events.length; i < l; i++) {
            var event_1 = events[i].trim();
            var list = this._getEventList(event_1, true);
            list.push({
                callback: callback,
                thisArg: thisArg
            });
        }
    };
    Observable.prototype.removeEventListener = function (eventNames, callback, thisArg) {
        if (typeof eventNames !== "string") {
            throw new TypeError("Events name(s) must be string.");
        }
        if (callback && typeof callback !== "function") {
            throw new TypeError("callback must be function.");
        }
        var events = eventNames.split(",");
        for (var i = 0, l = events.length; i < l; i++) {
            var event_2 = events[i].trim();
            if (callback) {
                var list = this._getEventList(event_2, false);
                if (list) {
                    var index_1 = this._indexOfListener(list, callback, thisArg);
                    if (index_1 >= 0) {
                        list.splice(index_1, 1);
                    }
                    if (list.length === 0) {
                        delete this._observers[event_2];
                    }
                }
            }
            else {
                this._observers[event_2] = undefined;
                delete this._observers[event_2];
            }
        }
    };
    Observable.prototype.notify = function (data) {
        var observers = this._observers[data.eventName];
        if (!observers) {
            return;
        }
        for (var i = observers.length - 1; i >= 0; i--) {
            var entry = observers[i];
            if (entry.once) {
                observers.splice(i, 1);
            }
            if (entry.thisArg) {
                entry.callback.apply(entry.thisArg, [data]);
            }
            else {
                entry.callback(data);
            }
        }
    };
    Observable.prototype.notifyPropertyChange = function (name, value, oldValue) {
        this.notify(this._createPropertyChangeData(name, value, oldValue));
    };
    Observable.prototype.hasListeners = function (eventName) {
        return eventName in this._observers;
    };
    Observable.prototype._createPropertyChangeData = function (propertyName, value, oldValue) {
        return { eventName: Observable.propertyChangeEvent, object: this, propertyName: propertyName, value: value, oldValue: oldValue };
    };
    Observable.prototype._emit = function (eventNames) {
        var events = eventNames.split(",");
        for (var i = 0, l = events.length; i < l; i++) {
            var event_3 = events[i].trim();
            this.notify({ eventName: event_3, object: this });
        }
    };
    Observable.prototype._getEventList = function (eventName, createIfNeeded) {
        if (!eventName) {
            throw new TypeError("EventName must be valid string.");
        }
        var list = this._observers[eventName];
        if (!list && createIfNeeded) {
            list = [];
            this._observers[eventName] = list;
        }
        return list;
    };
    Observable.prototype._indexOfListener = function (list, callback, thisArg) {
        for (var i = 0; i < list.length; i++) {
            var entry = list[i];
            if (thisArg) {
                if (entry.callback === callback && entry.thisArg === thisArg) {
                    return i;
                }
            }
            else {
                if (entry.callback === callback) {
                    return i;
                }
            }
        }
        return -1;
    };
    Observable.propertyChangeEvent = "propertyChange";
    return Observable;
}());
exports.Observable = Observable;
var ObservableFromObject = (function (_super) {
    __extends(ObservableFromObject, _super);
    function ObservableFromObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._map = {};
        return _this;
    }
    ObservableFromObject.prototype.get = function (name) {
        return this._map[name];
    };
    ObservableFromObject.prototype.set = function (name, value) {
        var currentValue = this._map[name];
        if (currentValue === value) {
            return;
        }
        var newValue = WrappedValue.unwrap(value);
        this._map[name] = newValue;
        this.notifyPropertyChange(name, newValue, currentValue);
    };
    return ObservableFromObject;
}(Observable));
function defineNewProperty(target, propertyName) {
    Object.defineProperty(target, propertyName, {
        get: function () {
            return target._map[propertyName];
        },
        set: function (value) {
            target.set(propertyName, value);
        },
        enumerable: true,
        configurable: true
    });
}
function addPropertiesFromObject(observable, source, recursive) {
    if (recursive === void 0) { recursive = false; }
    Object.keys(source).forEach(function (prop) {
        var value = source[prop];
        if (recursive
            && !Array.isArray(value)
            && value
            && typeof value === "object"
            && !(value instanceof Observable)) {
            value = fromObjectRecursive(value);
        }
        defineNewProperty(observable, prop);
        observable.set(prop, value);
    });
}
function fromObject(source) {
    var observable = new ObservableFromObject();
    addPropertiesFromObject(observable, source, false);
    return observable;
}
exports.fromObject = fromObject;
function fromObjectRecursive(source) {
    var observable = new ObservableFromObject();
    addPropertiesFromObject(observable, source, true);
    return observable;
}
exports.fromObjectRecursive = fromObjectRecursive;
//# sourceMappingURL=observable.js.map; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("/home/murph/projects/mobileSnaps/node_modules/@nativescript/core/data/observable/observable.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "/home/murph/projects/mobileSnaps/node_modules/@nativescript/core/data/observable/observable.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRGQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBbUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlIQUF5SDtBQUNwSixLQUFLO0FBQ0wsQyIsImZpbGUiOiJ2ZW5kb3IuNDU5OTBlOGU3NGU1YmY4NGRkMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfd3JhcHBlZEluZGV4ID0gMDtcbnZhciBXcmFwcGVkVmFsdWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdyYXBwZWRWYWx1ZSh3cmFwcGVkKSB7XG4gICAgICAgIHRoaXMud3JhcHBlZCA9IHdyYXBwZWQ7XG4gICAgfVxuICAgIFdyYXBwZWRWYWx1ZS51bndyYXAgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIFdyYXBwZWRWYWx1ZSkgPyB2YWx1ZS53cmFwcGVkIDogdmFsdWU7XG4gICAgfTtcbiAgICBXcmFwcGVkVmFsdWUud3JhcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdyA9IF93cmFwcGVkVmFsdWVzW193cmFwcGVkSW5kZXgrKyAlIDVdO1xuICAgICAgICB3LndyYXBwZWQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHc7XG4gICAgfTtcbiAgICByZXR1cm4gV3JhcHBlZFZhbHVlO1xufSgpKTtcbmV4cG9ydHMuV3JhcHBlZFZhbHVlID0gV3JhcHBlZFZhbHVlO1xudmFyIF93cmFwcGVkVmFsdWVzID0gW1xuICAgIG5ldyBXcmFwcGVkVmFsdWUobnVsbCksXG4gICAgbmV3IFdyYXBwZWRWYWx1ZShudWxsKSxcbiAgICBuZXcgV3JhcHBlZFZhbHVlKG51bGwpLFxuICAgIG5ldyBXcmFwcGVkVmFsdWUobnVsbCksXG4gICAgbmV3IFdyYXBwZWRWYWx1ZShudWxsKVxuXTtcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKCkge1xuICAgICAgICB0aGlzLl9vYnNlcnZlcnMgPSB7fTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpc1tuYW1lXTtcbiAgICAgICAgaWYgKHRoaXNbbmFtZV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gV3JhcHBlZFZhbHVlLnVud3JhcCh2YWx1ZSk7XG4gICAgICAgIHRoaXNbbmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShuYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lcywgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZXMsIGNhbGxiYWNrLCB0aGlzQXJnKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5fZ2V0RXZlbnRMaXN0KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgbGlzdC5wdXNoKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCB0aGlzQXJnOiB0aGlzQXJnLCBvbmNlOiB0cnVlIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZXMsIGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWVzLCBjYWxsYmFjaywgdGhpc0FyZyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZXMsIGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50cyBuYW1lKHMpIG11c3QgYmUgc3RyaW5nLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBtdXN0IGJlIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnRzID0gZXZlbnROYW1lcy5zcGxpdChcIixcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNbaV0udHJpbSgpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLl9nZXRFdmVudExpc3QoZXZlbnRfMSwgdHJ1ZSk7XG4gICAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICB0aGlzQXJnOiB0aGlzQXJnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWVzLCBjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZXMgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudHMgbmFtZShzKSBtdXN0IGJlIHN0cmluZy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgbXVzdCBiZSBmdW5jdGlvbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGV2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudF8yID0gZXZlbnRzW2ldLnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5fZ2V0RXZlbnRMaXN0KGV2ZW50XzIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMSA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0LCBjYWxsYmFjaywgdGhpc0FyZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleF8xID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4XzEsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX29ic2VydmVyc1tldmVudF8yXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX29ic2VydmVyc1tldmVudF8yXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fb2JzZXJ2ZXJzW2V2ZW50XzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJzW2RhdGEuZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gb2JzZXJ2ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBvYnNlcnZlcnNbaV07XG4gICAgICAgICAgICBpZiAoZW50cnkub25jZSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkudGhpc0FyZykge1xuICAgICAgICAgICAgICAgIGVudHJ5LmNhbGxiYWNrLmFwcGx5KGVudHJ5LnRoaXNBcmcsIFtkYXRhXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubm90aWZ5UHJvcGVydHlDaGFuZ2UgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMubm90aWZ5KHRoaXMuX2NyZWF0ZVByb3BlcnR5Q2hhbmdlRGF0YShuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50TmFtZSBpbiB0aGlzLl9vYnNlcnZlcnM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fY3JlYXRlUHJvcGVydHlDaGFuZ2VEYXRhID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7IGV2ZW50TmFtZTogT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LCBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLCB2YWx1ZTogdmFsdWUsIG9sZFZhbHVlOiBvbGRWYWx1ZSB9O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX2VtaXQgPSBmdW5jdGlvbiAoZXZlbnROYW1lcykge1xuICAgICAgICB2YXIgZXZlbnRzID0gZXZlbnROYW1lcy5zcGxpdChcIixcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50XzMgPSBldmVudHNbaV0udHJpbSgpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkoeyBldmVudE5hbWU6IGV2ZW50XzMsIG9iamVjdDogdGhpcyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX2dldEV2ZW50TGlzdCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNyZWF0ZUlmTmVlZGVkKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnROYW1lIG11c3QgYmUgdmFsaWQgc3RyaW5nLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMuX29ic2VydmVyc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgJiYgY3JlYXRlSWZOZWVkZWQpIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVyc1tldmVudE5hbWVdID0gbGlzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl9pbmRleE9mTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBsaXN0W2ldO1xuICAgICAgICAgICAgaWYgKHRoaXNBcmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIGVudHJ5LnRoaXNBcmcgPT09IHRoaXNBcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50ID0gXCJwcm9wZXJ0eUNoYW5nZVwiO1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydHMuT2JzZXJ2YWJsZSA9IE9ic2VydmFibGU7XG52YXIgT2JzZXJ2YWJsZUZyb21PYmplY3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlRnJvbU9iamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlRnJvbU9iamVjdCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9tYXAgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlRnJvbU9iamVjdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcFtuYW1lXTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVGcm9tT2JqZWN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMuX21hcFtuYW1lXTtcbiAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBXcmFwcGVkVmFsdWUudW53cmFwKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fbWFwW25hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UobmFtZSwgbmV3VmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZUZyb21PYmplY3Q7XG59KE9ic2VydmFibGUpKTtcbmZ1bmN0aW9uIGRlZmluZU5ld1Byb3BlcnR5KHRhcmdldCwgcHJvcGVydHlOYW1lKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5fbWFwW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0YXJnZXQuc2V0KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFByb3BlcnRpZXNGcm9tT2JqZWN0KG9ic2VydmFibGUsIHNvdXJjZSwgcmVjdXJzaXZlKSB7XG4gICAgaWYgKHJlY3Vyc2l2ZSA9PT0gdm9pZCAwKSB7IHJlY3Vyc2l2ZSA9IGZhbHNlOyB9XG4gICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgaWYgKHJlY3Vyc2l2ZVxuICAgICAgICAgICAgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICAmJiB2YWx1ZVxuICAgICAgICAgICAgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAmJiAhKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZnJvbU9iamVjdFJlY3Vyc2l2ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmaW5lTmV3UHJvcGVydHkob2JzZXJ2YWJsZSwgcHJvcCk7XG4gICAgICAgIG9ic2VydmFibGUuc2V0KHByb3AsIHZhbHVlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZyb21PYmplY3Qoc291cmNlKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZUZyb21PYmplY3QoKTtcbiAgICBhZGRQcm9wZXJ0aWVzRnJvbU9iamVjdChvYnNlcnZhYmxlLCBzb3VyY2UsIGZhbHNlKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbn1cbmV4cG9ydHMuZnJvbU9iamVjdCA9IGZyb21PYmplY3Q7XG5mdW5jdGlvbiBmcm9tT2JqZWN0UmVjdXJzaXZlKHNvdXJjZSkge1xuICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVGcm9tT2JqZWN0KCk7XG4gICAgYWRkUHJvcGVydGllc0Zyb21PYmplY3Qob2JzZXJ2YWJsZSwgc291cmNlLCB0cnVlKTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbn1cbmV4cG9ydHMuZnJvbU9iamVjdFJlY3Vyc2l2ZSA9IGZyb21PYmplY3RSZWN1cnNpdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcDsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiL2hvbWUvbXVycGgvcHJvamVjdHMvbW9iaWxlU25hcHMvbm9kZV9tb2R1bGVzL0BuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIvaG9tZS9tdXJwaC9wcm9qZWN0cy9tb2JpbGVTbmFwcy9ub2RlX21vZHVsZXMvQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=