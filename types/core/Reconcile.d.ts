/**
 * Sets a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @param  {boolean} value       Value of the property eg. True or False
 * @return {void}                Returns nothing
 */
declare function setBooleanProp($target: HTMLElement, name: string, value: boolean): void;
/**
 * Removes a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @return {void}                Returns nothing
 */
declare function removeBooleanProp($target: HTMLElement, name: string): void;
/**
 * Check if a prop is an Event prop eg. onClick
 * @param  {string} name         Event Name eg. onClick
 * @return {boolean}             true or false
 */
declare function isEventProp(name: string): boolean;
/**
 * Extracts the name of the event eg. onClick => click
 * @param  {string} name        Event Name eg. onClick
 * @return {string}             Returns an event name eg.click
 */
declare function extractEventName(name: string): string;
/**
 * Checks if a prop is a custom prop eg. Events or key
 * @param  {string} name        Prop name
 * @return {boolean}            true or false
 */
declare function isCustomProp(name: string): boolean;
/**
 * Sets a value to the INPUT, SELECT and TEXTAREA
 * @param  {HTMLElement} $target HTMLElement (INPUT, SELECT or TEXTAREA)
 * @param  {string} value        Value
 * @return {void}
 */
declare function setValue($target: any, value: string): void;
/**
 * Sets prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}
 */
declare function setProp($target: HTMLElement, name: string, value: string): void;
/**
 * Removes prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}
 */
declare function removeProp($target: any, name: string, value: string): void;
/**
 * Iterates throught props and sets them to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props        All props
 * @return {void}
 */
declare function setProps($target: HTMLElement, props: any): void;
/**
 * Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name        Prop name
 * @param  {string} newVal      newVal
 * @param  {string} oldVal      oldVal
 * @return {void}
 */
declare function updateProp($target: HTMLElement, name: string, newVal: string, oldVal: string): void;
/**
 * Iterate through props and Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newProps      newVal
 * @param  {object} oldProps      oldVal
 * @return {void}
 */
declare function updateProps($target: HTMLElement, newProps: {}, oldProps?: object): void;
/**
 * Checks if a prop is an event listener and adds it accordingly
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props
 * @return {void}
 */
declare function addEventListeners($target: HTMLElement, props: any): void;
/**
 * Converts an VTree into a DOM Element
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} node         VTree
 * @return {HTMLElement | Text}  HTMLElement | Text
 */
declare function createElement(node: any): HTMLElement | Text;
/**
 * Checks if a node has changed (If true the node gets replaced)
 * eg. from 'button' to 'div'
 * or 'hello' to 'hell'
 * or 'div' to text
 * @param  {Object|string} node1 The old node
 * @param  {Object|string} node2 The new node
 * @return {boolean}
 */
declare function changed(node1: any | string, node2: any | string): boolean;
/**
 * Reconciles the real DOM to accomodate changes in the virtual DOM
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newNode      VTree
 * @param  {object} oldNode      VTree
 * @param  {number} index        Index of the current element
 * @return {void}
 */
declare function updateElement($parent: any, newNode: any, oldNode?: any, index?: number): void;
/**
 * Converts an DOM Element into an VTree
 * @param  {HTMLElement} node HTMLElement
 * @return {object}  VTree
 */
declare function generateVTree(node: any): object;
export { generateVTree, updateElement, setBooleanProp, removeBooleanProp, isEventProp, extractEventName, isCustomProp, setProp, setValue, removeProp, setProps, updateProp, updateProps, addEventListeners, createElement, changed };
