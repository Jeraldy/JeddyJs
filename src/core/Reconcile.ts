import EVENTS from "./Events";

function setBooleanProp($target: HTMLElement, name: string, value: string) {
    if (value) {
        $target.setAttribute(name, value);
        $target[name] = true;
    } else {
        $target[name] = false;
    }
}

function removeBooleanProp($target: HTMLElement, name: string) {
    $target.removeAttribute(name);
    $target[name] = false;
}

function isEventProp(name: string) {
    return /^on/.test(name);
}

function extractEventName(name: string) {
    return name.slice(2).toLowerCase();
}

function isCustomProp(name: string) {
    return isEventProp(name) || name === 'forceUpdate';
}

function setProp($target: HTMLElement, name: string, value: string) {
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

function setValue($target: any, value: string) {
    document.addEventListener('DOMContentLoaded', () => {
        $target.value = value
        $target.setAttribute('value', value);
    })
    $target.value = value
    $target.setAttribute('value', value);
}

function removeProp($target: any, name: string, value: string) {
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

function setProps($target: HTMLElement, props: any) {
    Object.keys(props).forEach(name => {
        setProp($target, name, props[name]);
    });
}

function updateProp($target: HTMLElement, name: string, newVal: string, oldVal: string) {
    if (!newVal) {
        removeProp($target, name, oldVal);
    } else if (!oldVal || newVal !== oldVal) {
        setProp($target, name, newVal);
    }
}

function updateProps($target: HTMLElement, newProps: {}, oldProps = {}) {
    const props = Object.assign({}, newProps, oldProps);
    Object.keys(props).forEach(name => {
        updateProp($target, name, newProps[name], oldProps[name]);
    });
}

function addEventListeners($target: HTMLElement, props: any) {
    Object.keys(props).forEach(name => {
        if (isEventProp(name)) {
            $target[name] = function _listener(e: any) {
                props[name](e)
                $target.removeEventListener(name, _listener);
            }
        }
    });
}

function createElement(node: any) {
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

function changed(node1: any, node2: any) {
    return typeof node1 !== typeof node2 ||
        typeof node1 === 'string' && node1 !== node2 ||
        node1.type !== node2.type ||
        node1.props && node1.props.forceUpdate;
}

function updateElement($parent: any, newNode: any, oldNode: any, index = 0) {
    hooks($parent)
    if (!oldNode) {
        $parent.appendChild(createElement(newNode));
    } else if (!newNode) {
        let times = ($parent.childNodes.length || 0) - index;
        while (times-- > 0) {
            if ($parent.lastChild) {
                $parent.removeChild($parent.lastChild);
            }
        }
    } else if (changed(newNode, oldNode) || isDynamicList(newNode, oldNode)) {
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

function isDynamicList(newNode, oldNode) {
    if (newNode.props && oldNode.props) {
        if (newNode.props.type == "checkbox" 
            && oldNode.props.type == "checkbox") {
           return true
        }
        return newNode.props.key && oldNode.props.key
    }
    return false
}

function dropdownHook($el) {
    if ($el.nodeName == "OPTION") {
        if ($el.parentNode.getAttribute('value') == $el.value) {
            $el.parentNode.value = $el.value
        }
    }
}

function onConnectedCallBackHook($el) {
    if ($el.hasAttribute("onconnected")) {
        $el.onconnected($el.parentNode)
    }
}

function hooks($el) {
    dropdownHook($el)
    onConnectedCallBackHook($el)
}

function generateHTree(node: any) {
    let props = {}
    node.getAttributeNames().forEach(name => {
        if (node.type == "radio" && name == "checked") {
            props[name] = node.getAttribute(name) == "true"
        } else {
            props[name] = node.getAttribute(name)
        }
    })

    if (node.type == "select" && node.value) {
        [].slice.call(node.childNodes).forEach(child => {
            if (child.value == node.value) {
                child.selected = true
                child.setAttribute('selected', 'selected')
            }
        });
    }

    EVENTS.forEach(e => {
        if (node[e]) { props[e] = node[e] }
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

function sum(a, b) {
    return a + b;
  }

export { generateHTree, updateElement,sum }