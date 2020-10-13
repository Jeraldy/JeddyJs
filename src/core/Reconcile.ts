import EVENT_LISTENERS from "./Events";

/**
 * Sets a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @param  {boolean} value       Value of the property eg. True or False
 * @return {void}                Returns nothing
 */
function setBooleanProp($target: HTMLElement, name: string, value: boolean): void {
    if (value) {
        $target.setAttribute(name, name);
        $target[name] = true;
    } else {
        $target[name] = false;
    }
}

/**
 * Removes a boolean property for the DOM Elements like a checkbox
 * @param  {HTMLElement} $target Parent element
 * @param  {string} name         Name of the property eg. checked
 * @return {void}                Returns nothing
 */
function removeBooleanProp($target: HTMLElement, name: string): void {
    $target.removeAttribute(name);
    $target[name] = false;
}

/**
 * Check if a prop is an Event prop eg. onClick
 * @param  {string} name         Event Name eg. onClick
 * @return {boolean}             true or false
 */
function isEventProp(name: string): boolean {
    return /^on/.test(name);
}

/**
 * Extracts the name of the event eg. onClick => click
 * @param  {string} name        Event Name eg. onClick
 * @return {string}             Returns an event name eg.click
 */
function extractEventName(name: string): string {
    return name.slice(2).toLowerCase();
}

/**
 * Checks if a prop is a custom prop eg. Events or key
 * @param  {string} name        Prop name
 * @return {boolean}            true or false
 */
function isCustomProp(name: string): boolean {
    return isEventProp(name) || name === 'key';
}

/**
 * Sets a value to the INPUT, SELECT and TEXTAREA
 * @param  {HTMLElement} $target HTMLElement (INPUT, SELECT or TEXTAREA)
 * @param  {string} value        Value
 * @return {void}            
 */
function setValue($target: any, value: string): void {
    document.addEventListener('DOMContentLoaded', () => {
        $target.value = value
        $target.setAttribute('value', value);
    })
    $target.value = value
    $target.setAttribute('value', value);
}

/**
 * Sets prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}            
 */
function setProp($target: HTMLElement, name: string, value: string): void {
    if (isCustomProp(name)) {
        return;
    } else if (name === 'className') {
        $target.setAttribute('class', value);
    } else if (typeof value === 'boolean') {
        setBooleanProp($target, name, value);
    } else {
        if (($target.nodeName == "INPUT"
            || $target.nodeName == "SELECT"
            || $target.nodeName == "TEXTAREA"
        ) && name == "value") {
            setValue($target, value);
        } else {
            $target.setAttribute(name, value);
        }
    }
}

/**
 * Removes prop(s) to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name         Name of the property
 * @param  {string} value        Value
 * @return {void}            
 */
function removeProp($target: any, name: string, value: string): void {
    if (isCustomProp(name)) {
        return;
    } else if (name === 'class') {
        //Todo: Remove specific class & style
        $target.removeAttribute('class');
    } else if (typeof value === 'boolean') {
        removeBooleanProp($target, name);
    } else {
        if (($target.nodeName == "INPUT"
            || $target.nodeName == "TEXTAREA")
            && name == "value") {
            $target.value = ''
        } else {
            $target.removeAttribute(name);
        }
    }
}

/**
 * Iterates throught props and sets them to an HTMLElement
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props        All props
 * @return {void}            
 */
function setProps($target: HTMLElement, props: any): void {
    Object.keys(props).forEach(name => {
        setProp($target, name, props[name]);
    });
}

/**
 * Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {string} name        Prop name
 * @param  {string} newVal      newVal
 * @param  {string} oldVal      oldVal
 * @return {void}            
 */
function updateProp($target: HTMLElement, name: string, newVal: string, oldVal: string): void {
    if (!newVal
        || $target.nodeName == "INPUT"
        || $target.nodeName == "TEXTAREA") {
        removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal
        || $target.nodeName == "INPUT"
        || $target.nodeName == "TEXTAREA") {
        setProp($target, name, newVal);
    }
}

/**
 * Iterate through props and Update a prop in case it has changed
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newProps      newVal
 * @param  {object} oldProps      oldVal
 * @return {void}            
 */
function updateProps($target: HTMLElement, newProps: {}, oldProps: object = {}): void {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
        updateProp($target, name, newProps[name], oldProps[name]);
    });
}


/**
 * Checks if a prop is an event listener and adds it accordingly
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} props      
 * @return {void}            
 */
function addEventListeners($target: HTMLElement, props: any): void {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target[name] = function _listener(e: any) {
                props[name](e)
                $target.removeEventListener(name, _listener);
            }
        }
    });
}

/**
 * Converts a VTree into a DOM Element
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} node         VTree
 * @return {HTMLElement | Text}  HTMLElement | Text         
 */
function createElement(node: any): HTMLElement | Text {
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

/**
 * Checks if a node has changed (If true the node gets replaced)
 * eg. from 'button' to 'div' 
 * or 'hello' to 'hell'
 * or 'div' to text
 * @param  {Object|string} node1 The old node
 * @param  {Object|string} node2 The new node
 * @return {boolean}      
 */
function changed(node1: any | string, node2: any | string): boolean {
    const A = typeof node1 !== typeof node2;
    const B = typeof node1 === 'string' && node1 !== node2
    const C = node1.type !== node2.type
    const Z = node1.props ? true : false
    const W = Z ? node1.props.key ? true : false : false
    const D = Z && W
    return A || B || C || D;
}

/**
 * Reconciles the real DOM to accomodate changes in the virtual DOM
 * @param  {HTMLElement} $target HTMLElement
 * @param  {object} newNode      VTree
 * @param  {object} oldNode      VTree
 * @param  {number} index        Index of the current element
 * @return {void}        
 */
function updateElement($parent: any, newNode: any, oldNode?: any, index: number = 0): void {
    if (!oldNode) {
        $parent.appendChild(createElement(newNode));
    } else if (!newNode) {
        let times = ($parent.childNodes.length || 0) - index;
        while (times-- > 0) {
            if ($parent.lastChild) {
                $parent.removeChild($parent.lastChild);
            }
        }
    } else if (changed(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        );
    } else if (newNode.type) {
        updateProps(
            $parent.childNodes[index],
            newNode.props,
            oldNode.props
        );
        addEventListeners($parent.childNodes[index], newNode.props)
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            );
        }
    }
}

/**
 * Converts an DOM Element into an VTree
 * @param  {HTMLElement} node HTMLElement
 * @return {object}  VTree        
 */
function generateVTree(node: any): object {
    let props = {}
    node.getAttributeNames().forEach((name: string) => {
        if (node.type == "radio" && name == "checked") {
            props[name] = node.getAttribute(name) == "true"
        } else {
            props[name] = node.getAttribute(name)
        }
    })

    if (node.type == "select" && node.value) {
        [].slice.call(node.childNodes).forEach((child: any) => {
            if (child.value == node.value) {
                child.selected = true
                child.setAttribute('selected', 'selected')
            }
        });
    }

    EVENT_LISTENERS.forEach((e: string) => { if (node[e]) props[e] = node[e] })
    return {
        type: node.nodeName, props,
        children: [].slice.call(node.childNodes).map((node: any) => {
            if (node.nodeName == "#text") {
                return node.data
            }
            return generateVTree(node)
        })
    }
}


export {
    generateVTree,
    updateElement,
    setBooleanProp,
    removeBooleanProp,
    isEventProp,
    extractEventName,
    isCustomProp,
    setProp,
    setValue,
    removeProp,
    setProps,
    updateProp,
    updateProps,
    addEventListeners,
    createElement,
    changed
}