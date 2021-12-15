const get = (selector) => {
  return window.document.querySelector(selector);
};

const getAll = (selector) => {
  return window.document.querySelectorAll(selector);
};
const delay = (callback, timeout) => setTimeout(callback, timeout);
const loop = (handler, timeout) => setInterval(handler, timeout);

const endLoop = (handler) => clearInterval(handler);

const endDelay = (handler) => clearTimeout(handler);

const getUrl = () => {
  return window.document.URL;
};
const listen = (elementSelector, type, callback) =>
  get(elementSelector).addEventListener(type, callback);

const numberSort = (array) => array.sort((a, b) => a - b);

const filterOut = (array, valueToFilterOut) =>
  array.filter((element) => element !== valueToFilterOut);

Object.defineProperty(Array.prototype, "toWords", {
  value: function () {
    return [].concat(this).join("");
  },
});

Object.defineProperty(Array.prototype, "add", {
  value: function (value) {
    return [...this, value];
  },
});
Object.defineProperty(Array.prototype, "log", {
  value: function () {
    console.log(this);
  },
});

const arr = ["l", "o", "l"];
arr.log();
