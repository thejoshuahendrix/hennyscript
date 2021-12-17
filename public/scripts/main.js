var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var get = function (selector) {
    return window.document.querySelector(selector);
};
var getAll = function (selector) {
    return window.document.querySelectorAll(selector);
};
var delay = function (callback, timeout) { return setTimeout(callback, timeout); };
var loop = function (handler, timeout) { return setInterval(handler, timeout); };
var endLoop = function (handler) { return clearInterval(handler); };
var endDelay = function (handler) { return clearTimeout(handler); };
var getUrl = function () {
    return window.document.URL;
};
var listen = function (elementSelector, type, callback) { var _a; return (_a = get(elementSelector)) === null || _a === void 0 ? void 0 : _a.addEventListener(type, callback); };
var numberSort = function (array) { return array.sort(function (a, b) { return a - b; }); };
var filterOut = function (array, valueToFilterOut) {
    return array.filter(function (element) { return element !== valueToFilterOut; });
};
Object.defineProperty(Array.prototype, "toWords", {
    value: function () {
        return [].concat(this).join("");
    }
});
Object.defineProperty(Array.prototype, "add", {
    value: function (value) {
        return __spreadArray(__spreadArray([], this, true), [value], false);
    }
});
Object.defineProperty(Array.prototype, "log", {
    value: function () {
        console.log(this);
    }
});
Object.defineProperty(Number.prototype, "log", {
    value: function () {
        console.log(this);
    }
});
Object.defineProperty(String.prototype, "log", {
    value: function () {
        console.log(this);
    }
});
Object.defineProperty(String.prototype, "reverse", {
    value: function () {
        return this.split("").reverse().join("");
    }
});
Object.defineProperty(Number.prototype, "reverse", {
    value: function () {
        return this.split("").reverse().join("");
    }
});
