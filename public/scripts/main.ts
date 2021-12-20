/**
 * 
 * @param selector ID or class of the element you want to return
 * @returns HTMLElement of given selector
 */
export const get = (selector: keyof HTMLElement) => {
    return window.document.querySelector(selector);
};
/**
 * 
 * @param selector ID or class of the element you want to return
 * @returns All HTMLElements of given selector
 */
 export const getAll = (selector: keyof HTMLElement) => {
    return window.document.querySelectorAll(selector);
};
/**
 * 
 * @param callback The function you want to run after the delay
 * @param timeout The amount of time for the delay
 */
 export const delay = (callback: () => void, timeout: number) => setTimeout(callback, timeout);
/**
 * 
 * @param handler The function you want to run after the delay
 * @param timeout The amount of between loops
 */
 export const loop = (handler: () => void, timeout: number) => setInterval(handler, timeout);
/**
 * 
 * @param handler The number of the loop or the variable that is used to start the loop
 */
 export const endLoop = (handler: number) => clearInterval(handler);
/**
 * 
 * @param handler The number of the delay or the variable that is used to start the delay
 */
 export const endDelay = (handler: number) => clearTimeout(handler);

/**
 * 
 * @param elementSelector ID or class of the element you want to add the listener to.
 * @param type Type of event to listen for ex: 'click'
 * @param callback The function you want to run when the event is triggered
 */
 export const listen = (elementSelector: keyof HTMLElement, type: keyof ElementEventMap, callback: () => void) =>
    get(elementSelector)?.addEventListener(type, callback);

/**
 * 
 * @param array The array you want to sory
 * @returns The array sorted by number value
 */
 export const numberSort = (array: Array<number | string>) => array.sort((a, b) => +a - +b);
/**
 * 
 * @param array The array you want to filter
 * @param valueToFilterOut The value to filter out
 * @returns The array without the filtered value
 */
 export const filterOut = (array: Array<String | number>, valueToFilterOut: String | number) =>
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
Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
        return this.toUpper();
    }
})