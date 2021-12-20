/**
 *
 * @param selector ID or class of the element you want to return
 * @returns HTMLElement of given selector
 */
declare const get: (selector: keyof HTMLElement) => Element | null;
/**
 *
 * @param selector ID or class of the element you want to return
 * @returns All HTMLElements of given selector
 */
declare const getAll: (selector: keyof HTMLElement) => NodeListOf<Element>;
/**
 *
 * @param callback The function you want to run after the delay
 * @param timeout The amount of time for the delay
 */
declare const delay: (callback: () => void, timeout: number) => number;
/**
 *
 * @param handler The function you want to run after the delay
 * @param timeout The amount of between loops
 */
declare const loop: (handler: () => void, timeout: number) => number;
/**
 *
 * @param handler The number of the loop or the variable that is used to start the loop
 */
declare const endLoop: (handler: number) => void;
/**
 *
 * @param handler The number of the delay or the variable that is used to start the delay
 */
declare const endDelay: (handler: number) => void;
/**
 *
 * @param elementSelector ID or class of the element you want to add the listener to.
 * @param type Type of event to listen for ex: 'click'
 * @param callback The function you want to run when the event is triggered
 */
declare const listen: (elementSelector: keyof HTMLElement, type: keyof ElementEventMap, callback: () => void) => void | undefined;
/**
 *
 * @param array The array you want to sory
 * @returns The array sorted by number value
 */
declare const numberSort: (array: Array<number | string>) => (string | number)[];
/**
 *
 * @param array The array you want to filter
 * @param valueToFilterOut The value to filter out
 * @returns The array without the filtered value
 */
declare const filterOut: (array: Array<String | number>, valueToFilterOut: String | number) => (number | String)[];
