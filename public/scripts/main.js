"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.filterOut = exports.numberSort = exports.listen = exports.endDelay = exports.endLoop = exports.loop = exports.delay = exports.getAll = exports.get = void 0;
/**
 *
 * @param selector ID or class of the element you want to return
 * @returns HTMLElement of given selector
 */
var get = function (selector) {
    return window.document.querySelector(selector);
};
exports.get = get;
/**
 *
 * @param selector ID or class of the element you want to return
 * @returns All HTMLElements of given selector
 */
var getAll = function (selector) {
    return window.document.querySelectorAll(selector);
};
exports.getAll = getAll;
/**
 *
 * @param callback The function you want to run after the delay
 * @param timeout The amount of time for the delay
 */
var delay = function (callback, timeout) { return setTimeout(callback, timeout); };
exports.delay = delay;
/**
 *
 * @param handler The function you want to run after the delay
 * @param timeout The amount of between loops
 */
var loop = function (handler, timeout) { return setInterval(handler, timeout); };
exports.loop = loop;
/**
 *
 * @param handler The number of the loop or the variable that is used to start the loop
 */
var endLoop = function (handler) { return clearInterval(handler); };
exports.endLoop = endLoop;
/**
 *
 * @param handler The number of the delay or the variable that is used to start the delay
 */
var endDelay = function (handler) { return clearTimeout(handler); };
exports.endDelay = endDelay;
/**
 *
 * @param elementSelector ID or class of the element you want to add the listener to.
 * @param type Type of event to listen for ex: 'click'
 * @param callback The function you want to run when the event is triggered
 */
var listen = function (elementSelector, type, callback) { var _a; return (_a = (0, exports.get)(elementSelector)) === null || _a === void 0 ? void 0 : _a.addEventListener(type, callback); };
exports.listen = listen;
/**
 *
 * @param array The array you want to sory
 * @returns The array sorted by number value
 */
var numberSort = function (array) { return array.sort(function (a, b) { return +a - +b; }); };
exports.numberSort = numberSort;
/**
 *
 * @param array The array you want to filter
 * @param valueToFilterOut The value to filter out
 * @returns The array without the filtered value
 */
var filterOut = function (array, valueToFilterOut) {
    return array.filter(function (element) { return element !== valueToFilterOut; });
};
exports.filterOut = filterOut;
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
        return Number(this.toString().split("").reverse().join(""));
    }
});
Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
        return this.toUpper();
    }
});
