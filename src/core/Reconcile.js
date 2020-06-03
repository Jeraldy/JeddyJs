import EVENTS from "./Events";

function setBooleanProp($target, name, value) {
    if (value) {
        $target.setAttribute(name, value);
        $target[name] = true;
    } else {
        $target[name] = false;
    }
}

function removeBooleanProp($target, name) {
    $target.removeAttribute(name);
    $target[name] = false;
}

function isEventProp(name) {
    return /^on/.test(name);
}

function extractEventName(name) {
    return name.slice(2).toLowerCase();
}

function isCustomProp(name) {
    return isEventProp(name) || name === 'forceUpdate';
}

function setProp($target, name, value) {
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

function setValue($target, value) {
    document.addEventListener('DOMContentLoaded', () => { 
        $target.value = value 
        $target.setAttribute('value', value);
    })
    $target.value = value
    $target.setAttribute('value', value);
}

function removeProp($target, name, value) {
    if (isCustomProp(name)) {
        return;
    } else if (name === 'className') {
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

function setProps($target, props) {
    Object.keys(props).forEach(name => {
        setProp($target, name, props[name]);
    });
}

function updateProp($target, name, newVal, oldVal) {
    if (!newVal) {
        removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal) {
        setProp($target, name, newVal);
    }
}

function updateProps($target, newProps, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
        updateProp($target, name, newProps[name], oldProps[name]);
    });
}

function addEventListeners($target, props) {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target[name] = function _listener(e) {
                props[name](e)
                $target.removeEventListener(name, _listener);
            }
        }
    });
}

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

function changed(node1, node2) {
    return typeof node1 !== typeof node2 ||
        typeof node1 === 'string' && node1 !== node2 ||
        node1.type !== node2.type ||
        node1.props && node1.props.forceUpdate;
}

function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        );
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

function generateHTree(node) {
    let props = {}
    node.getAttributeNames()
        .forEach(name => {
            if (node.type == "radio" && name == "checked") {
                props[name] = node.getAttribute(name) == "true"
            } else {
                props[name] = node.getAttribute(name)
            }
        })
    EVENTS.forEach(e => {
        if (node[e]) {
            props[e] = node[e]
        }
    })
    return {
        type: node.nodeName, props,
        children: [].slice.call(node.childNodes).map(node => {
            if (node.nodeName == "#text") {
                return node.data
            }
            return generateHTree(node)
        })
    }
}

export { generateHTree, updateElement }