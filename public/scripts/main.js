const get = (selector) => {
  return window.document.querySelector(selector);
};

const getAll = (selector) => {
  return window.document.querySelectorAll(selector);
};

const grabContext = (selector) =>
  window.document.querySelector(selector).getContext("2d");


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

Object.defineProperty(Number.prototype, "log", {
  value: function () {
    console.log(this);
  },
});

Object.defineProperty(String.prototype, "log", {
  value: function () {
    console.log(this);
  },
});

Object.defineProperty(String.prototype, "reverse", {
  value: function () {
    return this.split("").reverse().join("");
  },
});

const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map.get(num) === undefined) map.set(target - num, i);
    else return [map.get(num), i];
  }
};

const romanToInt = (s) => {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};

const intToRoman = (num) => {
  let obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  for (let key in obj) {
    while (num >= obj[key]) {
      str += key;
      num -= obj[key];
    }
  }
  return str;
};
