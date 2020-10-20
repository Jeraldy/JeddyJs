"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changed = exports.createElement = exports.addEventListeners = exports.updateProps = exports.updateProp = exports.setProps = exports.removeProp = exports.setValue = exports.setProp = exports.isCustomProp = exports.extractEventName = exports.isEventProp = exports.removeBooleanProp = exports.setBooleanProp = exports.updateElement = exports.generateVTree = void 0;
const Events_1 = require("./Events");
/**
 * Sets a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @param  {boolean} value       Value of the property eg. True or False
 * @return {void}                Returns nothing
 */
function setBooleanProp($target, name, value) {
    if (value) {
        $target.setAttribute(name, name);
        $target[name] = true;
    }
    else {
        $target[name] = false;
    }
}
exports.setBooleanProp = setBooleanProp;
/**
 * Removes a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @return {void}                Returns nothing
 */
function removeBooleanProp($target, name) {
    $target.removeAttribute(name);
    $target[name] = false;
}
exports.removeBooleanProp = removeBooleanProp;
/**
 * Check if a prop is an Event prop eg. onClick
 * @param  {string} name         Event Name eg. onClick
 * @return {boolean}             true or false
 */
function isEventProp(name) {
    return /^on/.test(name);
}
exports.isEventProp = isEventProp;
/**
 * Extracts the name of the event eg. onClick => click
 * @param  {string} name        Event Name eg. onClick
 * @return {string}             Returns an event name eg.click
 */
function extractEventName(name) {
    return name.slice(2).toLowerCase();
}
exports.extractEventName = extractEventName;
/**
 * Checks if a prop is a custom prop eg. Events or key
 * @param  {string} name        Prop name
 * @return {boolean}            true or false
 */
function isCustomProp(name) {
    return isEventProp(name) || name === 'key';
}
exports.isCustomProp = isCustomProp;
/**
 * Sets a value to the INPUT, SELECT and TEXTAREA
 * @param  {HTMLElement} $target HTMLElement (INPUT, SELECT or TEXTAREA)
 * @param  {string} value        Value
 * @return {void}
 */
function setValue($target, value) {
    document.addEventListener('DOMContentLoaded', () => {
        $target.value = value;
        $target.setAttribute('value', value);
    });
    $target.value = value;
    $target.setAttribute('value', value);
}
exports.setValue = setValue;
/**
 * Sets prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}
 */
function setProp($target, name, value) {
    if (isCustomProp(name)) {
        return;
    }
    else if (name === 'className') {
        $target.setAttribute('class', value);
    }
    else if (typeof value === 'boolean') {
        setBooleanProp($target, name, value);
    }
    else {
        if (($target.nodeName == "INPUT"
            || $target.nodeName == "SELECT"
            || $target.nodeName == "TEXTAREA") && name == "value") {
            setValue($target, value);
        }
        else {
            $target.setAttribute(name, value);
        }
    }
}
exports.setProp = setProp;
/**
 * Removes prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}
 */
function removeProp($target, name, value) {
    if (isCustomProp(name)) {
        return;
    }
    else if (name === 'class') {
        //Todo: Remove specific class & style
        $target.removeAttribute('class');
    }
    else if (typeof value === 'boolean') {
        removeBooleanProp($target, name);
    }
    else {
        if (($target.nodeName == "INPUT"
            || $target.nodeName == "TEXTAREA")
            && name == "value") {
            $target.value = '';
        }
        else {
            $target.removeAttribute(name);
        }
    }
}
exports.removeProp = removeProp;
/**
 * Iterates throught props and sets them to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props        All props
 * @return {void}
 */
function setProps($target, props) {
    Object.keys(props).forEach(name => {
        setProp($target, name, props[name]);
    });
}
exports.setProps = setProps;
/**
 * Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name        Prop name
 * @param  {string} newVal      newVal
 * @param  {string} oldVal      oldVal
 * @return {void}
 */
function updateProp($target, name, newVal, oldVal) {
    if (!newVal) {
        removeProp($target, name, oldVal);
    }
    else if (!oldVal || newVal !== oldVal
        || $target.nodeName == "INPUT"
        || $target.nodeName == "TEXTAREA") {
        setProp($target, name, newVal);
    }
}
exports.updateProp = updateProp;
/**
 * Iterate through props and Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newProps      newVal
 * @param  {object} oldProps      oldVal
 * @return {void}
 */
function updateProps($target, newProps, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
        updateProp($target, name, newProps[name], oldProps[name]);
    });
}
exports.updateProps = updateProps;
/**
 * Checks if a prop is an event listener and adds it accordingly
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props
 * @return {void}
 */
function addEventListeners($target, props) {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target[name] = function _listener(e) {
                props[name](e);
                $target.removeEventListener(name, _listener);
            };
        }
    });
}
exports.addEventListeners = addEventListeners;
/**
 * Converts a VTree into a DOM Element
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} node         VTree
 * @return {HTMLElement | Text}  HTMLElement | Text
 */
function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    setProps($el, node.props);
    addEventListeners($el, node.props);
    node.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));
    return $el;
}
exports.createElement = createElement;
/**
 * Checks if a node has changed (If true the node gets replaced)
 * eg. from 'button' to 'div'
 * or 'hello' to 'hell'
 * or 'div' to text
 * @param  {Object|string} node1 The old node
 * @param  {Object|string} node2 The new node
 * @return {boolean}
 */
function changed(node1, node2) {
    const A = typeof node1 !== typeof node2;
    const B = typeof node1 === 'string' && node1 !== node2;
    const C = node1.type !== node2.type;
    const Z = node1.props ? true : false;
    const W = Z ? node1.props.key ? true : false : false;
    const D = Z && W;
    return A || B || C || D;
}
exports.changed = changed;
/**
 * Reconciles the real DOM to accomodate changes in the virtual DOM
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newNode      VTree
 * @param  {object} oldNode      VTree
 * @param  {number} index        Index of the current element
 * @return {void}
 */
function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(createElement(newNode));
    }
    else if (!newNode) {
        let times = ($parent.childNodes.length || 0) - index;
        while (times-- > 0) {
            if ($parent.lastChild) {
                $parent.removeChild($parent.lastChild);
            }
        }
    }
    else if (changed(newNode, oldNode)) {
        $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
    }
    else if (newNode.type) {
        updateProps($parent.childNodes[index], newNode.props, oldNode.props);
        addEventListeners($parent.childNodes[index], newNode.props);
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
        }
    }
}
exports.updateElement = updateElement;
/**
 * Converts an DOM Element into an VTree
 * @param  {HTMLElement} node HTMLElement
 * @return {object}  VTree
 */
function generateVTree(node) {
    let props = {};
    node.getAttributeNames().forEach((name) => {
        if (node.type == "radio" && name == "checked") {
            props[name] = node.getAttribute(name) == "true";
        }
        else {
            props[name] = node.getAttribute(name);
        }
    });
    if (node.type == "select" && node.value) {
        [].slice.call(node.childNodes).forEach((child) => {
            if (child.value == node.value) {
                child.selected = true;
                child.setAttribute('selected', 'selected');
            }
        });
    }
    Events_1.default.forEach((e) => { if (node[e])
        props[e] = node[e]; });
    return {
        type: node.nodeName, props,
        children: [].slice.call(node.childNodes).map((node) => {
            if (node.nodeName == "#text") {
                return node.data;
            }
            return generateVTree(node);
        })
    };
}
exports.generateVTree = generateVTree;
//# sourceMappingURL=Reconcile.js.map