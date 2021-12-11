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

