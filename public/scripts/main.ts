const get = (selector: keyof HTMLElement) => {
    window.document.querySelector(selector);
};

const getAll = (selector: keyof HTMLElement) => {
    return window.document.querySelectorAll(selector);
};

const delay = (callback: () => void, timeout: number) => setTimeout(callback, timeout);

const loop = (handler: () => void, timeout: number) => setInterval(handler, timeout);

const endLoop = (handler: number) => clearInterval(handler);

const endDelay = (handler: number) => clearTimeout(handler);


const listen = (elementSelector: keyof HTMLElement, type: keyof ElementEventMap, callback: () => void) =>
    get(elementSelector)?.addEventListener(type, callback);

const numberSort = (array: Array<number>) => array.sort((a, b) => a - b);

const filterOut = (array: Array<String | number>, valueToFilterOut: String | number) =>
    array.filter((element) => element !== valueToFilterOut);

Object.defineProperty(Array.prototype, "toWords", {
    value: function () {
        return [].concat(this).join("");
    },
});

Object.defineProperty(Array.prototype, "add", {
    value: function (value: String | number) {
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

Object.defineProperty(Number.prototype, "reverse", {
    value: function () {
        return Number(this.toString().split("").reverse().join(""));
    }
})
